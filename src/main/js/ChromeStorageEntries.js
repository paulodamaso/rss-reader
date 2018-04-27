/**
 A collection of RssEntry read from chrome.storage.sync
 */
class ChromeStorageEntries {

    /**
     * Adds an entry to chrome.storage.sync
     * @param entry the entry to be added.
     */
    add(entry){
        chrome.storage.sync.set({[entry.name] : entry.url});
        console.log("Added " + entry.name + " | " + entry.url);
    }

    /**
     * Reads all entries from chrome.storage.sync
     */
    read() {
        var entries = new Array();
        chrome.storage.sync.get(null, function (result) {
            for (var key in result) {
                entries.push(new RssEntry(key, result[key]));
                console.log("Reading site in ChromeStorage: " + key + " - " + result[key]);
            }
        });
        return entries;
    }
}