/**
 * A simple RSS feeder entry.
 */
function RssEntry(name, url) {
    this.name =  name;
    this.url = url;
    this.print = function() {return name + " - " + url;}
}

