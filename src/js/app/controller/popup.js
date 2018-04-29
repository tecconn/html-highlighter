$(function () {

	var dataStore = new ChromeDataStore();
	var highlightGroupRepository = new HighlightGroupRepository(dataStore);
	var highlightRepository = new HighlightRepository(dataStore);

	function initializePage() {
		console.debug("Initializing popup");
		var highlightGroup = new HighlightGroup();
		highlightGroupRepository.read("1", function(result) {
			var highlightGroupIds = [];
			var highlights = [];
			if (result && result.highlightIds)
				highlightGroup = result;
			highlightGroup.highlightIds.forEach(function(element) {
				highlightGroupIds.push(element);
			});
			highlightRepository.read(highlightGroupIds, function(results) {
				if (results)
					highlights = results;
				generateTable(highlights);
			});
		});
	}

	function addHighlight() {
		var title = $("input[name=title-input]").val();
		var color = $("input[name=color-input]").val();
		var backgroundColor = $("input[name=background-color-input]").val();
		var pattern = $("input[name=pattern-input]").val();
		var patterns = pattern.split(",");
		var highlight = new Highlight(title, "", patterns, color, backgroundColor);
		var key = highlightRepository.save({null: highlight});
		highlightGroupRepository.read("1", function(result) {
			if (!result || !result.highlightIds)
				result = new HighlightGroup();
			if (!result.highlightIds.includes(key))
				result.highlightIds.push(key);
			highlightGroupRepository.save({"1": result}, function() {
				clearForm();
			});
		});

	}

	function clearHighlights() {
		highlightGroupRepository.read("1", function(result) {
			if (result) {
				result.highlightIds.forEach(function(id) {
					highlightRepository.delete(id);
				});
				result.highlightIds = [];
				highlightGroupRepository.save({"1": result});
			}
		});
	}

	function generateTable(highlights) {
		var highlightElement = $("#highlights");
		highlightElement.empty();
		highlights.forEach(function(element) {
			var row = generateRow(element);
			highlightElement.append(row);
		});
	}

	/**
	 *
	 * @param highlight {Highlight}
	 * @returns {string}
	 */
	function generateRow(highlight) {
		return "<tr title='" + highlight.title + "'>" +
				"<td>" + highlight.patterns.join(", ") + "</td>" +
				"<td>" + highlight.color + "</td>" +
				"<td>" + highlight.backgroundColor + "</td>" +
				"<td><button name=\"delete\"></button></td>" +
			"</tr>";
	}

	function clearForm() {
		$("input[name=title-input]").clear();
		$("input[name=color-input]").clear();
		$("input[name=background-color-input]").val("#FFFFFF");
		$("input[name=pattern-input]").val("#000000");
	}

	initializePage();

	$("button#add-button").on("click", addHighlight);
	$("button#clear-button").on("click", clearHighlights);

});