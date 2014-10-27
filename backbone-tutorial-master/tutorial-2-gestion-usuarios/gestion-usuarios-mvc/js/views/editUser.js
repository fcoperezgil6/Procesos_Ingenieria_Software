		//4- nuevo usuario
		var EditUser = Backbone.View.extend({
			el:'.page',
			render: function(){
				//4-a para probar
				//this.$el.html('Editar usuario-nuevo');
				var template = _.template($('#edit-user-template').html(), {});
            			this.$el.html(template);	
			},
			events: {
		        'submit .edit-user-form': 'saveUser',
		      },
      		saveUser: function (ev) {
        		var userDetails = $(ev.currentTarget).serializeObject();	
        		//console.log(userDetails);
        		var user = new User();
        		user.save(userDetails,{
        			success: function(){
        				//console.log("usuario creado");
        				router.navigate('',{trigger:true})
        			}
        		})		
        		return false;
				}
			});

		var editUser = new EditUser();
