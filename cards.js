

// Changes all card styles to look like the card that was clicked

function applyStyleToAll(cardIndex) {
	$( "[id^='card-']").attr('class', 'card mb-4 '+'style'+cardIndex);
}

// Reset button for card styles back to being all different
function reset() {
		for (var i = 1; i <= 29; i++) {
		var temp = 'card-'+i; // TODO: take off the 00
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
