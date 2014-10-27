
UserMan.Router = Backbone.Router.extend({
                      routes: {
                        "": "default", 
                        "new": "edit",
                        "edit/:id":"edit"
                      },
                      default:function(){
                        //UserMan.users = new UserMan.Collections.Users();
                        //new UserMan.Views.Users({collection:UserMan.users});
                        usersView.collection.fetch({reset:true});
                        usersView.render();
                        //console.log(UserMan.users);
                      },
                      edit:function(id){
                          editUsersView.render(id);
                        //new UserMan.Views.EditUserView({numObj:id});
                      }
                  });

var users = new UserMan.Collections.Users();
var usersView = new UserMan.Views.Users({collection:users});
var editUsersView = new UserMan.Views.EditUserView();

var router = new UserMan.Router();
Backbone.history.start();
