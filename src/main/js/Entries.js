/**
 A set of rss entries.
 */
function Entries () {
    this.entries = new Array();
    Entries.prototype.add = function(name, url){
        this.entries.push(new HtmlListRssEntry(name, url));
        console.log("Added " + name + " - " +url);
    }
    this.read = function(){ return this.entries;}
}