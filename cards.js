
// Changes all card styles to look like the card that was clicked
// Card container background for select cards
function applyStyleToAll(cardIndex) {
	$("[id^='card-']").attr('class', 'card mb-4 ' + 'style' + cardIndex);
}

// Checks if element (jumbotron) is in the viewport 
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

$(document).ready(function() {
    // sets visibility of scroll button on page scroll event
    $(window).scroll(function() {
        // if jumbotron visible, hides scroll button
        if ($('.jumbotron').isInViewport() === true && $('.scroll-container').css('visibility') == "visible") {
            $('.scroll-container').css('visibility','hidden');
        }
        // if jumbotron not visible, unhides scroll button
        else if ($('.jumbotron').isInViewport() === false && $('.scroll-container').css('visibility') == "hidden") {  
            $('.scroll-container').css('visibility','visible');
        }
    });

    // When the user clicks on the button, scroll to the top of the document
    $('.scroll-container').click(function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Backgrounds for select cards
	var bg = $('body');
	$("[id^='card-']").click(function () {
    	bg.removeClass();
    	bg.addClass('style-bg');
    });
    $('#card-1').click(function () {
        bg.removeClass();
        bg.addClass('style1-bg');
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
    $('#card-59').click(function () {
        bg.removeClass();
        bg.addClass('style59-bg');
    });
});


// Reset button for card styles back to being all different
function reset() {
		for (var i = 1; i <= 100; i++) {
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
