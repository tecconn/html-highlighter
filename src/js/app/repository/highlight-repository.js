/**
 * Repository methods for a {@link Highlight}
 * @param dataStore {IDataStore} Data Store
 * @constructor
 */
function HighlightRepository(dataStore) {
    Repository.apply(this, [dataStore]);
}

HighlightRepository.prototype = Object.create(Repository.prototype);
HighlightRepository.constructor = HighlightRepository;