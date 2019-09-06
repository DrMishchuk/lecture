function createNewSlider() {
  var slider = {
    showPrev: null,
    showNext: null,
    slideImage: null,
    imagesUrl: [],
    currentImageIndex: 0,

    init: function(elId) {
      var that = this;

      var el = document.querySelector('#' + elId);

      this.showPrev = el.querySelector('#show-prew'),
      this.showNext = el.querySelector('#show-next'),
      this.slideImage = el.querySelector('#slide-image'),
      this.showPrev.addEventListener('click', function(e){that.onShowPrewClick(e)});
      this.showNext.addEventListener('click', function(e){that.onShowNextClick(e)});

      this.imagesUrl.push("http://tse2.mm.bing.net/th?id=OIP.2k-qJVID-oh4D936ZON68wHaLH&w=187&h=281&c=7&o=5&pid=1.7");
      this.imagesUrl.push("http://tse4.mm.bing.net/th?id=OIP.HaN5oLoK9uTcLf3Xxh37UQHaKH&w=187&h=256&c=7&o=5&pid=1.7");
      this.imagesUrl.push("http://tse3.mm.bing.net/th?id=OIP.the6E8DLorLvZ0jMT9iJSAHaLI&w=187&h=281&c=7&o=5&pid=1.7");
      this.slideImage.src = this.imagesUrl[this.currentImageIndex];
      this.showPrev.disabled = true;
    },

    onShowPrewClick: function (e) {
        this.currentImageIndex--;
        this.showNext.disabled = false;
        this.slideImage.src = this.imagesUrl[this.currentImageIndex];
        if (this.currentImageIndex === 0){
          this.showPrev.disabled = true;
        }
    },
    onShowNextClick: function (e) {
        this.currentImageIndex++;
        this.showPrev.disabled = false;
        this.slideImage.src = this.imagesUrl[this.currentImageIndex];
        if (this.currentImageIndex === (this.imagesUrl.length-1)){
          this.showNext.disabled = true;
        }
    }
  };
  return slider;
}


var slider1 = createNewSlider();
var slider2 = createNewSlider();

slider1.init('slider1');
slider2.init('slider2');
