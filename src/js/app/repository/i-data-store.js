function IDataStore() {

}

IDataStore.prototype.read = function(id, onChangeCallback) {
    throw new NotImplementedError();
};

IDataStore.prototype.save = function(obj, onChangeCallback) {
    throw new NotImplementedError();
};

IDataStore.prototype.delete = function(id, onDeleteCallback) {
    throw new NotImplementedError();
};