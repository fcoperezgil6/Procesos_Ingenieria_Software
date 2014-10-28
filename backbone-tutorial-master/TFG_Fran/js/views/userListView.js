
UserMan.Views.Users = Backbone.View.extend({
    el:'.page',
    //template:UserMan.Templates.users,
    initialize: function () {
        _.bindAll(this, "render");
        this.collection.fetch({reset:true});
        this.collection.bind("reset", this.render);
    },
  
    render: function(){
        //console.log("render");   
        //console.log(this.collection.length);     
        //$(this.el).html();
        var users = this.collection;
        var template = _.template($('#user-list-template').html(), {users: users.models});
        this.$el.html(template);
        //console.log(this.collection.length);
    }
});