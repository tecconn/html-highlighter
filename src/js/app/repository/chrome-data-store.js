function ChromeDataStore(objectPrefix) {
	IListenerDataStore.apply(this, [objectPrefix]);
    this.objectPrefix = objectPrefix || "";
}

ChromeDataStore.prototype = Object.create(IListenerDataStore.prototype);
ChromeDataStore.constructor = ChromeDataStore;

ChromeDataStore.prototype.read = function(id, onChangeCallback) {
    chrome.storage.sync.get(id, onChangeCallback);
};

ChromeDataStore.prototype.save = function(obj, onChangeCallback) {
    chrome.storage.sync.set(obj, onChangeCallback);
};

ChromeDataStore.prototype.delete = function(id, onDeleteCallback) {
    chrome.storage.sync.remove(id, onDeleteCallback);
};

ChromeDataStore.prototype.addOnChangeListener = function(id, callback) {
	chrome.storage.onChanged.addListener(function(changes, areaName) {
	    if (changes.hasOwnProperty(id)) {
	        callback(changes[id].newValue, changes[id].oldValue);
        }
    });
};