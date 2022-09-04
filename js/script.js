function ready(){
    var sliderBlocks = document.getElementById("slider_blocks");
    for(let i = 0;i<sliderBlocks.childNodes.length;i++){
        if(sliderBlocks.childNodes[i].nodeName==="#text"){
            console.log("removed");
            sliderBlocks.removeChild(sliderBlocks.childNodes[i])
        }
    }

    for(let i = 0;i<document.querySelectorAll(".slider_button").length;i++){
        document.querySelectorAll(".slider_button")[i].dataset.img = i
    }
    
  

    var portfolioGalleries = document.querySelector('.portfolio_galleries');
    for (let i = 0; i < portfolioGalleries.childNodes.length; i++) {
        if(portfolioGalleries.childNodes[i].nodeName==="#text"){
            portfolioGalleries.removeChild(portfolioGalleries.childNodes[i])
        }
    }
    
    var photoOptions = document.querySelector('.photo_options');
    for (let i = 0; i < photoOptions.childNodes.length; i++) {
        if(photoOptions.childNodes[i].nodeName==="#text"){
            photoOptions.removeChild(photoOptions.childNodes[i])
        }
    }

    for (let i = 0; i <photoOptions.childNodes.length; i++) {
        if(!photoOptions.childNodes[i].classList.contains("selected")){
            for (let j = 0; j < document.getElementById(photoOptions.childNodes[i].dataset.gallery).querySelectorAll("a").length; j++) {
                document.getElementById(photoOptions.childNodes[i].dataset.gallery).querySelectorAll("a")[j].classList.remove("elem")
            }
        }
    }

    var lastWorkSlider = document.querySelector('.last_work_slider_blocks');
    for (let i = 0; i < lastWorkSlider.childNodes.length; i++) {
        if(lastWorkSlider.childNodes[i].nodeName==="#text"){
            lastWorkSlider.removeChild(lastWorkSlider.childNodes[i])
        }
    }
    for(let i = 0;i<sliderBlocks.childNodes.length-1;i++){
        if(sliderBlocks.childNodes[i].dataset.number == i){
            console.log(sliderBlocks.childNodes[i]);
            sliderBlocks.childNodes[i].style.left += ((i)*1000) + 'px';
        }
    }

    for(let i = 1;i<portfolioGalleries.childNodes.length;i++){
        console.log(portfolioGalleries.childNodes[i]);
        if(portfolioGalleries.childNodes[i].classList.contains("photo_gallery")){
            portfolioGalleries.childNodes[i].style.display = 'none';   
        }
    }
   const phoneInputField = document.getElementById("user_phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });
}

document.addEventListener("DOMContentLoaded", ready);


let countLeft = 0;
let countRight = 0;
document.getElementById("slider1").onclick = function(event){
    var sliderBlocks = document.getElementById("slider_blocks");
    let sliderImg;
    for(let i = 0;i<sliderBlocks.childNodes.length;i++){
        if(sliderBlocks.childNodes[i].classList.contains("selected")){
            sliderImg = +sliderBlocks.childNodes[i].dataset.number;
        }
    }
    console.log(event.target);
    if(event.target.id == "right"){
        if(sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].style.left == ""){sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].style.left = (sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].dataset.number)*1000+'px'}
        countRight+=1;
            for (let i = 0; i < sliderBlocks.childNodes.length; i++) {
                if(sliderImg == sliderBlocks.childNodes.length-1){
                    sliderBlocks.childNodes[sliderImg].classList.remove("selected")
                    sliderBlocks.childNodes[0].classList.add("selected")
                }else{
                    sliderBlocks.childNodes[sliderImg].classList.remove("selected")
                    sliderBlocks.childNodes[sliderImg+1].classList.add("selected")
                }
                
                sliderBlocks.childNodes[i].style.left = (parseInt(sliderBlocks.childNodes[i].style.left)-1000) + 'px';
                 if(parseInt(sliderBlocks.childNodes[i].style.left)<=-parseInt(sliderBlocks.childNodes.length-1)*1000){
                     returnPhotos(sliderBlocks.childNodes[i])
                 }
                 
             }
    }
    console.log(sliderImg);
    if(event.target.id == "left"){
        let slidesAll =  sliderBlocks.childNodes.length
        for (let i = 1; i <slidesAll-1; i++) {
            if(sliderBlocks.childNodes[slidesAll-1].style.left == ""){
                sliderBlocks.childNodes[i].style.left = (-(slidesAll-sliderBlocks.childNodes[i].dataset.number)*1000)+'px'
            }
        }
        let getSelected;
        for (let i = 0; i < sliderBlocks.childNodes.length; i++) {
            if(sliderBlocks.childNodes[i].classList.contains("selected")){
                getSelected = sliderBlocks.childNodes[i]
            }
        }
        countLeft+=1;

        for (let i = 0; i < sliderBlocks.childNodes.length; i++) {
            if(sliderImg == 0){
                returnPhotosLeft(sliderBlocks.childNodes[sliderBlocks.childNodes.length-1])
                sliderBlocks.childNodes[0].classList.remove("selected")
                sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].classList.add("selected")
            }else{
                sliderBlocks.childNodes[sliderImg].classList.remove("selected")
                sliderBlocks.childNodes[sliderImg-1].classList.add("selected")
            }
            
             sliderBlocks.childNodes[i].style.left = (parseInt(sliderBlocks.childNodes[i].style.left)+1000) + 'px';
             if(parseInt(sliderBlocks.childNodes[i].style.left)>=parseInt(sliderBlocks.childNodes.length-1)*1000){
                 returnPhotosLeft(sliderBlocks.childNodes[i])
             }
             
         }
    }
}

function returnPhotos(slide){
        slide.style.left = slide.dataset.number*(1000) + 'px'
}

function returnPhotosLeft(slide){
    slide.style.left = slide.dataset.number*-1000 + 'px'
}


document.getElementById("slider2").onclick = function(event){
    var sliderBlocks = document.querySelector(".last_work_slider_blocks");
    let sliderImg;
    let sliderImgAll = 0;
    for(let i = 0;i<sliderBlocks.childNodes.length;i++){
        if(sliderBlocks.childNodes[i].classList.contains("last_work")){
            sliderImgAll+=1;
        }
        if(sliderBlocks.childNodes[i].classList.contains("selected")){
            sliderImg = +sliderBlocks.childNodes[i].dataset.number;
        }
    }
    
    if(event.target.className == "slider_button"){
        for(let i = 0;i<document.querySelectorAll(".slider_button").length;i++){
            if(document.querySelectorAll(".slider_button")[i].classList.contains("selected")){
                document.querySelectorAll(".slider_button")[i].classList.remove("selected")
                document.querySelector(".last_work_slider_blocks").childNodes[document.querySelectorAll(".slider_button")[i].dataset.img].classList.remove("selected")
            }
        }
        event.target.classList.add("selected")
        document.querySelector(".last_work_slider_blocks").childNodes[+event.target.dataset.img].classList.add("selected")
    }
   if(event.target.className == "left"){
        for(let i = 0;i<document.querySelectorAll(".slider_button").length;i++){
            if(document.querySelectorAll(".slider_button")[i].classList.contains("selected")){
                document.querySelectorAll(".slider_button")[i].classList.remove("selected")
            }
        }
        sliderBlocks.childNodes[sliderImg].classList.remove("selected")
        if(sliderImg==0){
            sliderBlocks.childNodes[sliderImgAll-1].classList.add("selected")
            document.querySelectorAll(".slider_button")[sliderImgAll-1].classList.add("selected")
        }else{
            sliderBlocks.childNodes[sliderImg-1].classList.add("selected")
            document.querySelectorAll(".slider_button")[sliderImg-1].classList.add("selected")
        }
   }
   if(event.target.className == "right"){
        for(let i = 0;i<document.querySelectorAll(".slider_button").length;i++){
            if(document.querySelectorAll(".slider_button")[i].classList.contains("selected")){
                document.querySelectorAll(".slider_button")[i].classList.remove("selected")
            }
        }
        sliderBlocks.childNodes[sliderImg].classList.remove("selected")
        if(sliderImg==2){
            sliderBlocks.childNodes[0].classList.add("selected")
            document.querySelectorAll(".slider_button")[0].classList.add("selected")
        }else{
            sliderBlocks.childNodes[sliderImg+1].classList.add("selected")
            document.querySelectorAll(".slider_button")[sliderImg+1].classList.add("selected")
        }
    }



}

function returnPhotos(slide){
    slide.style.left = (1000) + 'px'
}

function returnPhotosLeft(slide){
    slide.style.left = (-1000) + 'px'
}


document.querySelector(".photo_options").onclick = (e)=>{
    if(e.target.className == "photo_option"){
        let portfolio_galleries = document.querySelector('.portfolio_galleries')
        for (let i = 0; i <portfolio_galleries.childNodes.length; i++) {
            console.log("---" + window.getComputedStyle(portfolio_galleries.childNodes[i]).getPropertyValue("display"));
            if(window.getComputedStyle(portfolio_galleries.childNodes[i]).getPropertyValue("display") == "grid"){
                portfolio_galleries.childNodes[i].style.display = 'none'
                for (let j = 0; j < portfolio_galleries.childNodes[i].querySelectorAll("a").length; j++) {
                    if(portfolio_galleries.childNodes[i].querySelectorAll("a")[j].classList.contains("elem")){
                        portfolio_galleries.childNodes[i].querySelectorAll("a")[j].classList.remove("elem")
                    }
                }
            }   
        }
        for(let i = 0;i<document.querySelector(".photo_options").childNodes.length;i++){
            console.log(document.querySelector(".photo_options").childNodes[i]);
            if(document.querySelector(".photo_options").childNodes[i].classList.contains("selected")){
                document.querySelector(".photo_options").childNodes[i].classList.remove("selected")
            }
        }
        e.target.classList.add("selected")
        document.getElementById(e.target.dataset.gallery).style.display = 'grid'
        for (let j = 0; j < document.getElementById(e.target.dataset.gallery).querySelectorAll("a").length; j++) {
            if(!document.getElementById(e.target.dataset.gallery).querySelectorAll("a")[j].classList.contains("elem")){
                document.getElementById(e.target.dataset.gallery).querySelectorAll("a")[j].classList.add("elem")
            }
        }
    }
}

$(function()
  {
    $(".question_block").click(function(){
      $(".answer" + this.dataset.class).slideToggle("slow")
      $(".answer_button" + this.dataset.class).children().toggleClass("selected")
    })
  });
  

$(function()
  {
    $(".last_work_slider_blocks").mouseenter(function(){
      $(".last_work_info").slideDown("fast")
    })
    $(".last_work_slider_blocks").mouseleave(function(){
        $(".last_work_info").slideUp("fast")
      })
  });


function openHeader(){
    var header = document.querySelector("header")
    if(header.classList.contains("selected")){
        header.classList.remove("selected")
    }else{
        header.classList.add("selected")
    }
}

function sendInfo(){
    let userName = document.getElementById("user_name").value
    let userPhone = document.getElementById("user_phone").value
    let userPlace = document.getElementById("user_place").value
    let userDate = document.getElementById("datepicker").value
    
    let checkName = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig
    let checkPhoneNum = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
    let checkPlace = /\w/

    for (let i = 0; i < document.querySelectorAll('.error').length; i++) {
        document.querySelectorAll('.error')[i].style.opacity = 0
    }

    if(!checkName.test(userName)){
        document.querySelector('.error.name').style.opacity = 1;
    }

    if(!checkPhoneNum.test(userPhone) || userPhone.length == 0){
        document.querySelector('.error.phone').style.opacity = 1;
    }

    if(userPlace.length == 0){
        document.querySelector('.error.place').style.opacity = 1;
    }

    if(userDate.length == 0 ){
        document.querySelector('.error.date').style.opacity = 1
    }

}
$(function() 
{
    $("#datepicker").datepicker();
});