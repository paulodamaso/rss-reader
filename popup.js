/**
 * Read information from storage
 */
console.log("Syncing sites");

var entries = new Entries();
entries.add('xkcd.com', 'www.xkcd.com');
entries.add('ctrl+alt+del', 'www.ctrlaltdel.com');
entries.add('Quora', 'www.quora.com');
entries.add('Celepar', 'www.celepar.pr.gov.br');
entries.add('Github Repositories', 'www.github.com');
entries.add('Stack Overflow', 'www.stackoverflow.com');
entries.add('Cactoos', 'www.cactoos.com');
entries.add('0crat', 'www.0crat.com');

entries.read().forEach(function print(entry){ console.log(entry.print())});







