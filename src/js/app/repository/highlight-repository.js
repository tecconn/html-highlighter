/**
 * Repository methods for a {@link Highlight}
 * @param dataStore {IListenerDataStore} Data Store
 * @constructor
 */
function HighlightRepository(dataStore) {
    ListenerRepository.apply(this, [dataStore, "h"]);
}

HighlightRepository.prototype = Object.create(ListenerRepository.prototype);
HighlightRepository.constructor = HighlightRepository;