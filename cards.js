

// Changes all card styles to look like the card that was clicked
// Card container background for select cards
function applyStyleToAll(cardIndex) {
	$("[id^='card-']").attr('class', 'card mb-4 ' + 'style' + cardIndex);
}

// Backgrounds for select cards
$(document).ready(function() {
	var bg = $('body');
	$("[id^='card-']").click(function () {
    	bg.removeClass();
    	bg.addClass('style-bg');
    });
    $('#card-11').click(function () {
    	bg.removeClass();
    	bg.addClass('style11-bg');
    });
    $('#card-12').click(function () {
    	bg.removeClass();
    	bg.addClass('style12-bg');
    });
    $('#card-30').click(function () {
    	bg.removeClass();
    	bg.addClass('style30-bg');
    });
    $('#card-37').click(function () {
    	bg.removeClass();
    	bg.addClass('style37-bg');
    });
        $('#card-46').click(function () {
    	bg.removeClass();
    	bg.addClass('style46-bg');
    });
    $('#card-51').click(function () {
    	bg.removeClass();
    	bg.addClass('style51-bg');
    });
    $('#card-52').click(function () {
    	bg.removeClass();
    	bg.addClass('style52-bg');
    });
    $('#card-53').click(function () {
        bg.removeClass();
        bg.addClass('style53-bg');
    });
});


// Reset button for card styles back to being all different
function reset() {
		for (var i = 1; i <= 55; i++) {
		var temp = 'card-'+i;
		$( "[id="+temp+"]" ).attr('class', 'card mb-4 '+'style'+i);
	}
}


/*
// Attribute Starts With Selector [name^=”value”]
// Selects elements that have the specified attribute with a value beginning exactly with a given string.
// This function will select all ids that start with 'card-''
*/

//$( "[id^='card-']" ).css( "border", "3px dotted green" );

/*
// :contains() Selector
// Select all elements that contain the specified text.
// This function selects all card that contain a word 'dog'
*/


//$( "div:contains('dog')" ).css( "text-decoration", "underline" );
