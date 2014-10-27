		//2-define una vista para mostrar la lista de usuarios
		var UserList = Backbone.View.extend({
		  	el: '.page',
		  	render: function(){
		  		// 3-c modifica la función render para que muestra la lista de usuarios en forma de tabla
		  		// para la tabla utiliza una template que llama user-list-template y la ubica al principio del
		  		// archivo
		  		var that=this;
		  		var users = new Users();
		  		users.fetch({
		  			success: function(){
		  				var template = _.template($('#user-list-template').html(), {users: users.models});
            			that.$el.html(template);
		  				//comprobación: that.$el.html('El contenido debe aparecer aquí');
		  			}
		  		});

		  		// en el paso-1 solo esto: 
		  		//this.$el.html('El contenido debe aparecer aquí');
		  	}
		  });

		var userList = new UserList();