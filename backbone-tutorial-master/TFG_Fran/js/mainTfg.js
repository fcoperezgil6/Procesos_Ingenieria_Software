
TfgMan.Router = Backbone.Router.extend({
                      routes: {
                        "": "default", 
                        "new": "edit",
                        "edit/:id":"edit"
                      },
                      default:function(){
                        //TfgMan.tfgs = new TfgMan.Collections.Tfgs();
                        //new TfgMan.Views.Tfgs({collection:TfgMan.tfgs});
                        tfgsView.collection.fetch({reset:true});
                        tfgsView.render();
                        //console.log(TfgMan.tfgs);
                      },
                      edit:function(id){
                          editTfgsView.render(id);//render llama a la vista
                        //new TfgMan.Views.EditTfgView({numObj:id});
                      }
                  });

var tfgs = new TfgMan.Collections.Tfgs();
var tfgsView = new TfgMan.Views.Tfgs({collection:tfgs});
var editTfgsView = new TfgMan.Views.EditTfgView();

var router = new TfgMan.Router();
Backbone.history.start();
