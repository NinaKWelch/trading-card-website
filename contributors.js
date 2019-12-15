/* Javascript for Contibutors Page */

// Show contributors in a selected country when clicking on the country flag
function selectCountry(countryIndex) {
	const country = $("[class|='in']");
	country.hide();

	switch (countryIndex) {
		case 1:
			country.filter('.in-bg').toggle();
		  	break;
		case 2:
			country.filter('.in-hr').toggle();
			 break;
		case 3:
			country.filter('.in-eg').toggle();
			break;
		case 4:
			country.filter('.in-fi').toggle();
			break;
		case 5:
			country.filter('.in-de').toggle();
			break;
		case 6:
			country.filter('.in-gr').toggle();
			break;
		case 7:
			country.filter('.in-hu').toggle();
			break;
		case 8:
			country.filter('.in-il').toggle();
			break;
		case 9:
			country.filter('.in-it').toggle();
			break;
		case 10:
			country.filter('.in-pl').toggle();
			break;
		case 11:
			country.filter('.in-pt').toggle();
			break;
		case 12:
			country.filter('.in-ro').toggle();
			break;
		case 13:
			country.filter('.in-sk').toggle();
			break;
		case 14:
			country.filter('.in-es').toggle();
			break;
		case 15:
			country.filter('.in-tr').toggle();
			break;
		case 16:
			country.filter('.in-gb').toggle();
			break;
		default:
		    country.show();
	}
}


// Show contributors in a selected country, when chosen in the options menu
$('#inputGroupCountries').on('change', function() {
    const index = Number(this.value)
	selectCountry(index)
});


