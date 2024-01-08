let images =['images/desktop-image-hero-1.jpg','images/desktop-image-hero-2.jpg','images/desktop-image-hero-3.jpg'];
let image1 = document.querySelector('.image1');
var i=1
document.querySelector('.kl1').onclick=function (){
    if(i>=images.length){
        i=0
    }
    image1.src = images[i]
    i++;
    console.log(i)
    return i
}
document.querySelector('.kl').onclick=function (){
    i-=2;
    if(0>i){
        i=0
    }
    image1.src = images[i]
    console.log(i)
}
