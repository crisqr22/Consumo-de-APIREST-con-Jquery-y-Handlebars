$(document).on("ready", init);

function init() {
	var raw_template 	= $('#simple-template').html();
	var template 		= Handlebars.compile(raw_template);	
	var perfil 			= "cquin22";	
	var api 			= 'https://api.github.com/users/'+perfil;
	console.log(perfil)

	$.getJSON(api, {
		format: "json"
	}).done (function(json){
				mostrarPerfil(json);
	});

	function mostrarPerfil(data) {		
		var html = template(data);
		$(".render").append(html);
			    
	}
}