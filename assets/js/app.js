$(document).ready(function() {
	
	// Generator functionality
	$( "input[name='flavorType']" ).on( "click", function() {
	  $( "#txtBox" ).html( $( "input[name='flavorType']:checked" ).val());
	});
	
	$( "input[name='functionType']" ).on( "click", function() {
	  $( "#txtBox2" ).html( $( "input[name='functionType']:checked" ).val());
	});
	
	$( "input[name='level']" ).on( "click", function() {
	  $( "#txtBox3" ).html( $( "input[name='level']:checked" ).val());
	});
 
	function showValues() {
		var str = $( "form" ).serialize();
		var link = str + ".html";
		$( "a.blend" ).attr( "href", link );
 	}
  
	$( "input[type='radio']" ).on( "click", showValues );
		showValues();

});
