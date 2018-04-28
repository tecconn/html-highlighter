/**
 * Repository methods for a {@link HighlightGroup}
 * @param dataStore {IDataStore} Data Store
 * @constructor
 */
function HighlightGroupRepository(dataStore) {
    Repository.apply(this, [dataStore]);
}

HighlightGroupRepository.prototype = Object.create(Repository.prototype);
HighlightGroupRepository.constructor = HighlightGroupRepository;