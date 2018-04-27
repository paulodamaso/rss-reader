/**
 Entries which are showed in html
 */
class HtmlStorageEntries {

    constructor(storage){
        this.storage = storage;
    }

    read(){
        var ret = new Array();
        console.log("start in htmlstorage");
        var entries = this.storage.read();
        console.log("read in htmlstorage");
        for (var entry in entries){
            ret.push(new HtmlListRssEntry(entry));
            console.log("read html");
        }
        return ret;
    }
}