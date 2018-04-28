function Highlight(title, description, patterns, color, backgroundColor) {
    this.id = null;
    this.title = title || "";
    this.description = description || "";
    this.patterns = patterns || [];
    this.color = color || 0;
    this.backgroundColor = backgroundColor || 0;
}