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


function IListenerDataStore() {
	IDataStore.apply(this, arguments);
}

IListenerDataStore.prototype.addOnChangeListener = function(id, callback) {
	throw new NotImplementedError();
};

IListenerDataStore.prototype = Object.create(IDataStore.prototype);
IListenerDataStore.constructor = IListenerDataStore;