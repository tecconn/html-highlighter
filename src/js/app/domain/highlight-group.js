function HighlightGroup(url, highlightGroupIds) {
    this.id = null;
    this.url = url || "https?://(?:.+.)?.+?.+";
    this.highlightIds = highlightGroupIds || [];
}