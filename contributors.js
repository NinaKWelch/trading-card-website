/* Javascript for Contibutors Page */


// Show contributors in a selected country when clicking on the country flag
function selectCountry(countryIndex) {
	var country = $('[id^=in-]');
	country.hide();

	if (countryIndex === 0) {
		country.show();
	} else if (countryIndex === 1) {
		country.filter('#in-bg').toggle();
    } else if (countryIndex === 2) {
    	country.filter('#in-hr').toggle();
    } else if (countryIndex === 3) {
    	country.filter('#in-eg').toggle();
    } else if (countryIndex === 4) {
    	country.filter('#in-fi').toggle();
    } else if (countryIndex === 5) {
    	country.filter('#in-de').toggle();
    } else if (countryIndex === 6) {
    	country.filter('#in-gr').toggle();
    } else if (countryIndex === 7) {
    	country.filter('#in-hu').toggle();
    } else if (countryIndex === 8) {
    	country.filter('#in-il').toggle();
    } else if (countryIndex === 9) {
    	country.filter('#in-it').toggle();
    } else if (countryIndex === 10) {
    	country.filter('#in-pl').toggle();
    } else if (countryIndex === 11) {
    	country.filter('#in-pt').toggle();
    } else if (countryIndex === 12) {
    	country.filter('#in-ro').toggle();
    } else if (countryIndex === 13) {
    	country.filter('#in-sk').toggle();
    } else if (countryIndex === 14) {
    	country.filter('#in-es').toggle();
    } else if (countryIndex === 15) {
    	country.filter('#in-tr').toggle();
    } else if (countryIndex === 16) {
    	country.filter('#in-gb').toggle();
    } else {
    	country.show();
    }
}


// Show contributors in a selected country, when chosen in the options menu
$('#inputGroupCountries').on('change', function() {
	var country = $('[id^=in-]');
	country.hide();

	if (this.value == "0") {
		country.show();
	} else if (this.value == "1") {
	    country.filter('#in-bg').toggle();
	} else if (this.value == "2") {
        country.filter('#in-hr').toggle();
	} else if (this.value == "3") {
       country.filter('#in-eg').toggle();
	} else if (this.value == "4") {
		country.filter('#in-fi').toggle();
	} else if (this.value == "5") {
		country.filter('#in-de').toggle();
	} else if (this.value == "6") {
		country.filter('#in-gr').toggle();
	} else if (this.value == "7") {
		country.filter('#in-hu').toggle();
	} else if (this.value == "8") {
		country.filter('#in-il').toggle();
	} else if (this.value == "9") {
		country.filter('#in-it').toggle();
	} else if (this.value == "10") {
		country.filter('#in-pl').toggle();
	} else if (this.value == "11") {
		country.filter('#in-pt').toggle();
	} else if (this.value == "12") {
		country.filter('#in-ro').toggle();
	} else if (this.value == "13") {
		country.filter('#in-sk').toggle();
	} else if (this.value == "14") {
		country.filter('#in-es').toggle();
	} else if (this.value == "15") {
		country.filter('#in-tr').toggle();
	} else if (this.value == "16") {
		country.filter('#in-gb').toggle();
	} else {
		country.show();
	}
});


