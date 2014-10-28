

TfgMan.Views.EditTfgView = Backbone.View.extend({
      el:'.page', 
      initialize: function(options){      
        //_.bindAll(this, "render");
       // this.render(options.numObj);
      },
      render: function(id){
        //4-a para probar
        //this.$el.html('Editar tfg-nuevo');        
        var that=this;
        if (id){
             //console.log("id ",id);
            that.tfg = new TfgMan.Models.Tfg({id:id});
            that.tfg.fetch({
                success:function (tfg){
                    var template = _.template($('#edit-tfg-template').html(), {tfg:tfg});
                    that.$el.html(template); 
                }
            })
        }
        else {
            var template = _.template($('#edit-tfg-template').html(), {tfg:null});
            //console.log('plantilla:');
            this.$el.html(template);  
        }
      },
      events: {
            'submit .edit-tfg-form': 'saveTfg',
            'click .delete' : 'deleteTfg'
          },
          saveTfg: function () {                

                //var tfgDetails = $(ev.currentTarget).serializeObject();  
                
                var tfgDetails = {};
                
                $( '.edit-tfg-form' ).children( 'input' ).each( function( i, el ) {
                    if( $( el ).val() != '' )
                    {
                        tfgDetails[ el.name ] = $( el ).val();
                    }
                });
                var tfg = new TfgMan.Models.Tfg();

                //console.log(tfgDetails);
                
                tfg.save(tfgDetails,{
                success: function(){
                  //console.log("tfg creado en cliente");
                  router.navigate('',{trigger:true});
                }
              })
                return false;
            },
          deleteTfg:function(ev){
              //console.log(this.tfg);
              this.tfg.destroy({
                success: function () {
                   console.log('tfg eliminado');
                   router.navigate('',{trigger:true}); 
                }
              })
              return false;
            }
  });