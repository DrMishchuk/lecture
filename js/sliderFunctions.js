var showPrev = document.getElementById('show-prew');
var showNext = document.getElementById('show-next');
var slideImage = document.getElementById('slide-image');



showPrev.addEventListener('click', onShowPrewClick);
showNext.addEventListener('click', onShowNextClick);

var imagesUrl = [];
imagesUrl.push("http://tse2.mm.bing.net/th?id=OIP.2k-qJVID-oh4D936ZON68wHaLH&w=187&h=281&c=7&o=5&pid=1.7");
imagesUrl.push("http://tse4.mm.bing.net/th?id=OIP.HaN5oLoK9uTcLf3Xxh37UQHaKH&w=187&h=256&c=7&o=5&pid=1.7");
imagesUrl.push("http://tse3.mm.bing.net/th?id=OIP.the6E8DLorLvZ0jMT9iJSAHaLI&w=187&h=281&c=7&o=5&pid=1.7");

var currentImageIndex = 0;

slideImage.src = imagesUrl[currentImageIndex];
showPrev.disabled = true;


function onShowPrewClick() {
    currentImageIndex--;
    showNext.disabled = false;
    slideImage.src = imagesUrl[currentImageIndex];
    if (currentImageIndex === 0){
      showPrev.disabled = true;
    }
}

function onShowNextClick() {
    currentImageIndex++;
    showPrev.disabled = false;
    if (currentImageIndex === (imagesUrl.length-1)){
      showNext.disabled = true;
    }
    slideImage.src = imagesUrl[currentImageIndex];
}
