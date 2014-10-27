		//1-comienza definiendo un router para la home "":"home"
		// en el paso 4 añade una route para "new":"edit"
		var Router = Backbone.Router.extend({
		        routes: {
		          "": "home", 
		          "new": "edit",
		        }
		    });

		var router = new Router;
		router.on('route:home', function() {
		      // render user list
		      //userListView.render();

		      //en el paso 1 probar: 
		      //console.log("Home page cargada");

		      //en el paso 2:
		      userList.render();
		    });
		router.on('route:edit', function(id) {
	      		//userEditView.render({id: id});
	      		editUser.render();
	    	});