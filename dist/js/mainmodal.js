function GreatMainModal (objModal) {
	windowModal = document.querySelector(objModal.modal);
	windowModal.style.display = 'none';
	
	var backDropModal = document.createElement('div');
	backDropModal.style.display = 'none';
	backDropModal.className = 'backdrop';
	document.body.appendChild(backDropModal);

	this.btnOpen = document.querySelectorAll(objModal.btnModal);
	this.btnClose = document.querySelector(objModal.modal + ' button');

	this.modalClose = function () {
		windowModal.style.display = 'none';
		backDropModal.style.display = 'none';
		document.querySelector('body').style.overflow = '';
	},
	this.modalOpen = function () {
		windowModal.style.display = 'block';
		backDropModal.style.display = 'block';
		document.querySelector('body').style.overflow = 'hidden';
	},
	this.allBtnOpen = function(){
		for (var i = 0; i < this.btnOpen.length; i++) {
			this.btnOpen[i].addEventListener('click', this.modalOpen);
		}
	},
	this.allBtnOpen();
	this.btnClose.addEventListener('click', this.modalClose);
	backDropModal.addEventListener('click', this.modalClose);
};
var mainModal = GreatMainModal({
	modal: '.main-modal',
	btnModal: '.btn-modal'
});
