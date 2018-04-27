class HtmlListRssEntry {

    constructor(rssentry) {
        this.rssentry = rssentry;
    }

    print(){
        return "<a href='"+this.rssentry.url()+"'>" + this.rssentry.name() + "<\a>";
    }
}