/**
 * Repository methods for a {@link HighlightGroup}
 * @param dataStore {ChromeDataStore} Data Store
 * @constructor
 */
function HighlightGroupRepository(dataStore) {
    Repository.apply(this, [dataStore, "hg"]);
}

HighlightGroupRepository.prototype = Object.create(Repository.prototype);
HighlightGroupRepository.constructor = HighlightGroupRepository;