

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
	
});

/*function applyStyleToAll(cardIndex) {
	if (cardIndex === 1) {
	    $("[class='style1']").add('body').css('background-color', '#000000');
    } else if (cardIndex === 11) {
        $("[class='style11']").add('body').css('background-image', 'url(https://svgshare.com/i/2x3.svg)');
    	$("[class='style11']").add('body').css('background-size', 'cover');
    } else {
	    $("[class^='style']").add('body').css('background-color', '#ffffff');
    }
}*/


// Reset button for card styles back to being all different
function reset() {
	for (var i = 1; i <= 54; i++) {
		var temp = 'card-'+i;
		$( "[id="+temp+"]" ).attr('class', 'card mb-4 '+'style'+i);
	}
	$('body').removeClass(); 
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
