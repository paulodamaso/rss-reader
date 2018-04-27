/**
 * Read information from storage
 */
console.log("Syncing sites");

var entries = new ChromeStorageEntries();
entries.add(new RssEntry('xkcd.com', 'www.xkcd.com'));
entries.add(new RssEntry('ctrl+alt+del', 'www.ctrlaltdel.com'));
entries.add(new RssEntry('Quora', 'www.quora.com'));
entries.add(new RssEntry('Celepar', 'www.celepar.pr.gov.br'));
entries.add(new RssEntry('Github Repositories', 'www.github.com'));
entries.add(new RssEntry('Stack Overflow', 'www.stackoverflow.com'));
entries.add(new RssEntry('Cactoos', 'www.cactoos.com'));
entries.add(new RssEntry('0crat', 'www.0crat.com'));

var htmlentries = new HtmlStorageEntries(entries);

for (var entry in htmlentries.read()){
    console.log("!");
    console.log(entry.print());
}



