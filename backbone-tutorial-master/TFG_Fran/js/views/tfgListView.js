
TfgMan.Views.Tfgs = Backbone.View.extend({
    el:'.page',
    //template:TfgMan.Templates.tfgs,
    initialize: function () {
        _.bindAll(this, "render");
        this.collection.fetch({reset:true});
        this.collection.bind("reset", this.render);
    },
  
    render: function(){
        //console.log("render");   
        //console.log(this.collection.length);     
        //$(this.el).html();
        var tfgs = this.collection;
        var template = _.template($('#tfg-list-template').html(), {tfgs: tfgs.models});
        this.$el.html(template);
        //console.log(this.collection.length);
    }
});