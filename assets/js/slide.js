window.onload = function(){
  var mainSlider = new Slider({
    images: '.mainslider img',
    next: '.mainbtn .next',
    prev: '.mainbtn .prev',
    interval: '3000'
  });
  var calcSlider = new Slider({
    images: '.calcslider img',
    next: '.calcbtn .next',
    prev: '.calcbtn .prev',
    interval: '3000'
  });
  function Slider(images) {

    this.images = document.querySelectorAll(images.images);
    this.btnPrev = document.querySelector(images.prev); 
    this.btnNext = document.querySelector(images.next); 
    this.interval = images.interval;
    this.images[0].style.opacity = '1'

    var i = 0;
    var timeInterval = setInterval(this.next, this.interval);

    this.prev = function() {
      this.images[i].style.opacity = '0';
       i--;
       if( i < 0){
         i = this.images.length - 1;
       }
       this.images[i].style.opacity = '1';
       clearInterval(timeInterval);
       timeInterval = setInterval(this.next.bind(this), this.interval);
      },

    this.next = function() {
      this.images[i].style.opacity = '0';
      i++;
      if( i >= this.images.length){
        i = 0;
      }
      this.images[i].style.opacity = '1';
      clearInterval(timeInterval);
      timeInterval = setInterval(this.next.bind(this), this.interval);
    },

    this.btnPrev.addEventListener('click', this.prev.bind(this));
    this.btnNext.addEventListener('click', this.next.bind(this));
    this.next();
   };
};
