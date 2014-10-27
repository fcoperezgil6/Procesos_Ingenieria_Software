//3-b utiliza una función auxiliar para traer obtener la colección de usuarios
		$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
      		options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
    	});

    	//función auxiliar que utiliza para crear usuario
    	$.fn.serializeObject = function() {
	      var o = {};
	      var a = this.serializeArray();
	      $.each(a, function() {
	          if (o[this.name] !== undefined) {
	              if (!o[this.name].push) {
	                  o[this.name] = [o[this.name]];
	              }
	              o[this.name].push(this.value || '');
	          } else {
	              o[this.name] = this.value || '';
	          }
	      });
	      return o;
	    };