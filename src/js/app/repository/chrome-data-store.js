function ChromeDataStore() {

}

ChromeDataStore.prototype.read = function(id, onChangeCallback) {
    chrome.storage.sync.get(id, onChangeCallback);
};

ChromeDataStore.prototype.save = function(obj, onChangeCallback) {
    chrome.storage.sync.get(obj, onChangeCallback);
};

ChromeDataStore.prototype.delete = function(id, onDeleteCallback) {
    chrome.storage.sync.get(id, onDeleteCallback);
};

ChromeDataStore.prototype = Object.create(IDataStore.prototype);
ChromeDataStore.constructor = ChromeDataStore;