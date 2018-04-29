function HighlightGroup(url, highlightGroupIds) {
    this.id = null;
    this.url = url || "https?:\/\/(?:.+.)?splunk.+?.+";
    this.highlightIds = highlightGroupIds || [];
}