$(document).on("click", ".k-grid .k-pager-refresh", function (e) {
	$(e.target).closest('.k-grid').data("kendoGrid").dataSource.filter([]);
});
Number.prototype.toText = function () {
	function numberToText(num) {
		var txt = '';
		switch (num) {
			case '9':
				txt = 'sembilan ';
				break;
			case '8':
				txt = 'delapan ';
				break;
			case '7':
				txt = 'tujuh ';
				break;
			case '6':
				txt = 'enam ';
				break;
			case '5':
				txt = 'lima ';
				break;
			case '4':
				txt = 'empat ';
				break;
			case '3':
				txt = 'tiga ';
				break;
			case '2':
				txt = 'dua ';
				break;
			case '1':
				txt = 'satu ';
				break;
		}
		return txt;
	}

	function tensToText(num) {
		var txt = '';
		switch (num[1]) {
			case '0':
				txt += 'sepuluh ';
				break;
			case '1':
				txt += 'sebelas ';
				break;
			case '2':
				txt += 'dua belas ';
				break;
			case '3':
				txt += 'tiga belas ';
				break;
			case '4':
				txt += 'empat belas ';
				break;
			case '5':
				txt += 'lima belas ';
				break;
			case '6':
				txt += 'enam belas ';
				break;
			case '7':
				txt += 'tujuh belas ';
				break;
			case '8':
				txt += 'delapan belas ';
				break;
			case '9':
				txt += 'sembilan belas ';
				break;
		}
		return txt;
	}

	function hundredsToText(num) {
		var txt = '';
		// convert to zero-padded 3 character number
		num = ('000' + num);
		num = num.substr(num.length - 3);


		switch (num[0]) {
			case '0':
				break;
			case '1':
				txt += 'seratus ';
				break;
			default:
				txt += numberToText(num[0]) + 'ratus ';
				break;
		}

		switch (num[1]) {
			case '0':
				break;
			case '1':
				txt += tensToText(num[1] + num[2]);
				return txt;
				break;
			default:
				txt += numberToText(num[1]) + 'puluh ';
				break;
		}

		switch (num[2]) {
			case '0':
				break;
			default:
				txt += numberToText(num[2]);
				break;
		}

		return txt;
	}

	var txt = '';

	// 123 456 789 000
	// convert the money into a zero-padded 12 character number
	var money = '000000000000' + this.toString();

	money = money.substr(money.length - 12);

	var billions = Number(money.substr(0, 3));
	if (billions != 0) {
		txt += hundredsToText(billions) + 'miliar ';
	}

	var millions = Number(money.substr(3, 3));
	if (millions != 0) {
		txt += hundredsToText(millions) + 'juta ';
	}

	var thousands = Number(money.substr(6, 3));
	if (thousands != 0) {
		txt += hundredsToText(thousands) + 'ribu ';
	}

	var hundreds = Number(money.substr(money.length - 3));
	if (hundreds != 0) {
		txt += hundredsToText(hundreds);
	}

	// for ID only
	if (this >= 1000 && this <= 1999) {
		txt = txt.replace('satu ribu', 'seribu');
	}

	if (this === 0) {
		txt = 'nol';
	}
	return txt.trim();
};
Number.prototype.formatMoney = function(c, d, t){
	c = isNaN(c = Math.abs(c)) ? 2 : c;
	d = d == undefined ? "." : d;
	t = t == undefined ? "," : t;
	var n = this,
	    s = n < 0 ? "-" : "", 
	    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
	    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

function validateNumber(event) {
	var key = window.event ? event.keyCode : event.which;

	if (event.keyCode === 8 || event.keyCode === 46
		|| event.keyCode === 37 || event.keyCode === 39) {
		return true;
	}
	else if ( key < 48 || key > 57 ) {
		return false;
	}
	else return true;
}

