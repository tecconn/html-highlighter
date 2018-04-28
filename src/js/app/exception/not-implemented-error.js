function NotImplementedError() {
    this.message = "Not Implemented";
    this.stackTrace = (new Error()).stack;
}