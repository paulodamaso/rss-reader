class HtmlListRssEntry extends RssEntry{

    constructor(rssentry) {
        super();
        this.rssentry = rssentry;
    }

    print(){
        return "<a href='"+this.rssentry.url()+"'>" + this.rssentry.name() + "<\a>";
    }
}