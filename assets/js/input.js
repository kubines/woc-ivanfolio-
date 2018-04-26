function InputValueText(obj) {
	var input = document.querySelectorAll(obj.idForm);
	for (var i = 0; i < input.length; i++) {
		input[i].value = obj.textInput[i];
	};
};

var formValueText = InputValueText({
	idForm: '.form input',
	textInput: [' Как к вам обращаться?', 
	            ' Номер вашего телефона']
});

function InputChekValue(obj) {
	var input = document.querySelectorAll(obj.idForm);
	for (var i = 0; i < input.length; i++) {
		
		(function inputFocus(i) {
			input[i].onfocus = function() {
				if (input[i].value == obj.textInput[i]) input[i].value = ' ';
			};
		})(i);
		
		(function blurInput(i) {
			input[i].onblur = function() {
				if (!input[i].value.trim()) input[i].value = obj.textInput[i];
			};
		})(i);
	};
};
var formChek = InputChekValue({
	idForm: '.form input',
	textInput: [' Как к вам обращаться?', 
	            ' Номер вашего телефона']
});