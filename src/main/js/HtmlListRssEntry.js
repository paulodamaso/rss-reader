function HtmlListRssEntry(name, url) {
    this.name =  name;
    this.url = url;
    this.print = function() {return "<a href='"+this.url+"'>" + this.name + "</\a>";}
}
