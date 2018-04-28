$(function () {

	var dataStore = new ChromeDataStore();
	var highlightGroupRepository = new HighlightGroupRepository(dataStore);
	var highlightRepository = new HighlightRepository(dataStore);

	function initializePage() {
		var highlightGroup = new HighlightGroup();
		highlightGroupRepository.read("1", function(result) {
			if (result)
				highlightGroup = result;
		});
		var highlightGroupIds = [];
		highlightGroup.highlightIds.forEach(function(element) {
			highlightGroupIds.push(element);
		});
		var highlightGroups = [];
		highlightRepository.read(highlightGroupIds, function(results) {
			if (results)
				highlightGroups = results;
			generateTable(highlightGroups);
		});
	}

	function generateTable(highlightGroups) {
		var highlightGroupsElement = $("#highlight-groups");
		highlightGroups.innerHTML = "";
		highlightGroups.forEach(function(element) {
			highlightGroupsElement.innerHTML += generateRow(element);
		});
	}

	/**
	 *
	 * @param highlight {Highlight}
	 * @returns {string}
	 */
	function generateRow(highlight) {
		return "<tr>" +
				"<td>" + highlight.title + "</td>" +
				"<td>" + highlight.color + "</td>" +
				"<td>" + + highlight.backgroundColor + "</td>" +
			"</tr>" +
			"<tr>" +
				"<td colspan=\"3\">" + highlight.patterns.join(", ") + "</td>" +
			"</tr>";
	}

	initializePage();

	// chrome.storage.sync.get("enabled", function (result) {
	// 	$("#enable").find(".check,.x").prop("class", !!result.enabled ? "check" : "x");
	// 	$("#enable").find("button,.button").html(!!result.enabled ? "Enabled" : "Disabled");
	// });
	//
	// $("#enable").on("click", function () {
	// 	$(this).find(".check,.x").prop("class", $(this).find(".check,.x").hasClass("check") ? "x" : "check");
	// 	$(this).find("button,.button").html($(this).find(".check,.x").hasClass("check") ? "Enabled" : "Disabled");
	// 	chrome.storage.sync.set({enabled: $(this).find(".check,.x").hasClass("check")});
	// });

});