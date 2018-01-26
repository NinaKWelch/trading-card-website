




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


/*
//
//
//
*/
//$( "[id^='card-']" ).attr('class', 'newClass');

/*
//
//
//
*/

// processClicks(1);

function processClicks(cardIndex) {
//  var cardIndex = 1;
  $( "[id^='card-']" ).attr('class', 'style'+cardIndex);
  $( "[class^='card-title']" ).attr('class', 'card-title'+cardIndex);
//  $( "[class^='card-img']" ).attr('class', 'card-img'+1);
//  $( "[class^='card-body']" ).attr('class', 'card-body'+cardIndex);
}

function reset() {
	for (var i = 1; i <= 2; i++) {
		var temp = 'card-00'+i; // TODO: take off the 00
		$( "[id="+temp+"]" ).attr('class', 'style'+i);
		$( "[id="+temp+"]" ).find( "[class^='card-title']" ).attr( "class", "card-title"+i );
//		$( "[id="+temp+"][class^="card-title"]" ).attr('class', 'card-title'+i);
	}
}


