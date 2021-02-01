window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    var h= document.querySelector(".header-wrap");
    var h1= document.querySelector(".header-nav");
    var q=document.querySelector('.bdr-btm')
    // if (window.innerWidth > 992) {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            h.classList.add("small-header");
            q.style.opacity=1;
        } 
        else {
            h.classList.remove("small-header");
            q.style.opacity=0
        }
    // }else{
    //     if (!(document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)) {
    //          h.style.backgroundColor="#af3ce4";
    //     }else{
    //         h.style.backgroundColor="#ffe34a";
    //     }
    // }
}
  

var x=document.querySelector('.menu-container').onclick=function(){
    var body = document.body;
    body.classList.toggle('responsive');
    this.classList.toggle('change');
};