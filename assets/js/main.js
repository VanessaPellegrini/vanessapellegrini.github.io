console.log("funciona main.js");
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

/*cambia saludo al hacer hover*/
$(document).ready(function(){
/*nav - cambio de opacidad*/
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll > 200){
			$("#estiloNav").css({"background-color": "#f7f7f7"});
		}else{
			$("#estiloNav").css({"background-color": "transparent",
				"border-color":"transparent"});
		}
	});
	/*HOME*/	
	/*welcome*/
	$('#welcome').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Bienvenid@', $this.text());
	        $this.text("Welcome");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Bienvenid@'));
	    }
	);
	/*iAm*/
	$('#iAm').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Soy Vanessa', $this.text());
	        $this.text("I am Vann");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Soy Vanessa'));
	    }
	);
	/*Diseño*/
	$('#designer').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Diseñadora y', $this.text());
	        $this.text("Designer &");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Diseñadora y'));
	    }
	);
	/*web dev*/
	$('#webDev').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Desarrolladora front-end', $this.text());
	        $this.text("Front-end developer");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Desarrolladora front-end'));
	    }
	);
	/*Animals*/
	$('#loveAnimals').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Amante de los animales', $this.text());
	        $this.text("I love animals");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Amante de los animales'));
	    }
	);
		/*movies*/
	$('#loveMovies').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Los videojuegos y ver películas.', $this.text());
	        $this.text("Video Games and go to the cinema :)");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Los videojuegos y ver películas.'));
	    }
	);
	//en caso de que la persona utilice landscape deberá aparecer un mensaje indicando que solo debe usarse portrait
/*if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
}*/
});