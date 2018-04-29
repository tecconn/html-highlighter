/**
 * Repository methods for objects
 * @param dataStore {IDataStore} Data Store
 * @param objectPrefix {string=} Prefix to use for keys in this repository
 * @constructor
 */
function Repository(dataStore, objectPrefix) {
    if (!dataStore)
        throw new Error("Data store not provided");
    this.dataStore = dataStore;
    this.objectPrefix = objectPrefix || "";
}

Repository.prototype.read = function(id, onChangeCallback) {
	console.log("Reading", id);
	var key = this._generateKey(id);
	console.log("Key", key);
    this.dataStore.read(key, function(result) {
    	var values = Object.values(result);
    	if (!Array.isArray(id))
    		onChangeCallback(values[0]);
    	else
    	    onChangeCallback(values);
    });
};

Repository.prototype.save = function(obj, onChangeCallback) {
	var key = this._generateKey(obj);
	var objectToPersist = Repository._replaceKey(key, obj);
	console.log("Saving", objectToPersist);
	objectToPersist[key].id = key;
    this.dataStore.save(objectToPersist, onChangeCallback);
    return key;
};

Repository.prototype.delete = function(id, onDeleteCallback) {
	console.log("Deleting", id);
	var key = this._generateKey(id);
    this.dataStore.delete(key, onDeleteCallback);
};

Repository.prototype._generateKey = function(id) {
	var _this = this;
	var generateKey = function (value) {
		value = value.toString();
		if (value && value.startsWith(_this.objectPrefix))
			return value;
	    return [_this.objectPrefix, value].join("_");
	};
	var newKey = function() {
		return 12437 ^ (new Date()).getTime();
	};
	var hasOwnProperty = function (obj) {
		return function (key) {
			return obj.hasOwnProperty(key);
		}
	};
	if (Array.isArray(id))
		return id.map(generateKey);
	else if (typeof id === "object") {
		if (id.hasOwnProperty(null))
			return generateKey(newKey());
		return generateKey(Object.keys(id).filter(hasOwnProperty(id))[0])
	}
	return generateKey(id);
};

Repository._replaceKey = function(key, obj) {
	var keys = Object.keys(obj);
	if (keys.length > 1)
		console.warn("More than one key found in object", obj);
	var newObject = {};
	newObject[key] = obj[keys[0]];
	console.debug("Object key replaced.", newObject);
	return newObject;
};

/**
 *
 * @param dataStore {IListenerDataStore} Listener Data Store
 * @param objectPrefix {string=} Prefix to use for keys in this repository
 * @constructor
 */
function ListenerRepository(dataStore, objectPrefix) {
    Repository.apply(this, [dataStore, objectPrefix]);
    this.dataStore = dataStore;
}

ListenerRepository.prototype = Object.create(Repository.prototype);
ListenerRepository.constructor = ListenerRepository;

ListenerRepository.prototype.addOnChangeListener = function(id, callback) {
    this.dataStore.addOnChangeListener(id, callback);
};