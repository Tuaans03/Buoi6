
var navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', function (e) {
    window.scrollY > 0
      ? navbar.classList.add('add-nav-bar')
      : navbar.classList.remove('add-nav-bar');
}
)

var images = document.querySelectorAll('.menu-img-size');
var left = document.querySelector('.prev')
var right = document.querySelector('.bx-chevron-right')
var close = document.querySelector('.bx-x')
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery')
var currentIndex=0;

function galleryShow(){
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');

    if(currentIndex==0){
        left.classList.add('hidden');
    }
    else{
        left.classList.remove('hidden');
    }

    
    if(currentIndex==images.length-1){
        right.classList.add('hidden');
    }
    else{
        right.classList.remove('hidden');
    }
}

images.forEach((item,index) => {
    item.addEventListener('click',function(){
        currentIndex=index;
        galleryShow();
    })
});

close.addEventListener('click',function(){
    gallery.classList.remove('show');
})

document.addEventListener('keydown',function(i){
   if(i.keyCode==27){gallery.classList.remove('show');}
})

right.addEventListener('click',function(){
    if(currentIndex<images.length-1){
        currentIndex++;
        galleryShow();
    }
})
left.addEventListener('click',function(){
    if(currentIndex>0){
        currentIndex--;
        galleryShow();
    }
})