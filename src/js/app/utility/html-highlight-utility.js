/**
 *
 * @constructor
 */
function HtmlHighlightUtility() {
}

/**
 *
 * @param highlight {Highlight}
 */
HtmlHighlightUtility.paint = function(highlight) {
	console.debug("Painting", highlight);
	var elements = $(highlight.patterns.join(","));
	if (elements) {
		elements.css("color", highlight.color);
		elements.css("backgroundColor", highlight.backgroundColor);
	}
	else {
		console.info("No elements found for selector " + highlight.patterns.join(","));
	}
};