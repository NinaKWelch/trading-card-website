

// Changes all card styles to look like the card that was clicked
// Card container background for select cards
function applyStyleToAll(cardIndex) {
	$("[id^='card-']").attr('class', 'card mb-4 ' + 'style' + cardIndex);
}

// Reset button for card styles back to being all different
function reset() {
        for (var i = 1; i <= 100; i++) {
        var temp = 'card-'+i;
        $( "[id="+temp+"]" ).attr('class', 'card mb-4 '+'style'+i);
    }
    $('body').removeClass();
}


// Backgrounds for select cards
$(document).ready(function() {
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








