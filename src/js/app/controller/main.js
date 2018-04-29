$(function () {

	var jWindow = $(window);

	var chromeDataStore = new ChromeDataStore();
	var highlightGroupRepository = new HighlightGroupRepository(chromeDataStore);
	var highlightRepository = new HighlightRepository(chromeDataStore);

	var highlightGroup = new HighlightGroup();
	var highlights = [];

	function initializeData() {
		console.debug("Initializing data");
		highlightGroupRepository.read("1", function(result) {
			if (result) {
				highlightGroup = result;
				highlightRepository.read(highlightGroup.highlightIds, function(result) {
					if (result)
						highlights = result;
					highlights.forEach(function(result) {
						highlightRepository.addOnChangeListener("1", onHighlightChange);
						onHighlightChange(result);
					});
				});
			}
		});
	}

	function onHighlightChange(highlight) {
		HtmlHighlightUtility.paint(highlight);
	}

	function highlightMatches() {
		highlights.forEach(function(highlight) {
			onHighlightChange(highlight);
		});
	}

	initializeData();

	jWindow.on("click", highlightMatches);
	jWindow.on("load", highlightMatches);

});