/**
 * Repository methods for objects
 * @param dataStore {IDataStore} Data Store
 * @constructor
 */
function Repository(dataStore) {
    if (!dataStore)
        throw new Error("Data store not provided");
    this.dataStore = dataStore;
}

Repository.prototype.read = function(id, onChangeCallback) {
    this.dataStore.read(id, onChangeCallback);
};

Repository.prototype.save = function(obj, onChangeCallback) {
    this.dataStore.save(obj, onChangeCallback);
};

Repository.prototype.delete = function(id, onDeleteCallback) {
    this.dataStore.delete(id, onDeleteCallback);
};