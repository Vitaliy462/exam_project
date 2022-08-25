// window.onload = function(){
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

    var lastWorkSlider = document.querySelector('.last_work_slider_blocks');
    for (let i = 0; i < lastWorkSlider.childNodes.length; i++) {
        if(lastWorkSlider.childNodes[i].nodeName==="#text"){
            lastWorkSlider.removeChild(lastWorkSlider.childNodes[i])
        }
    }
    for(let i = 0;i<sliderBlocks.childNodes.length-1;i++){
    //for(let i = 0;i<sliderBlocks.childNodes.length;i++){
        if(sliderBlocks.childNodes[i].dataset.number == i){
            console.log(sliderBlocks.childNodes[i]);
            sliderBlocks.childNodes[i].style.left += ((i)*1000) + 'px';
        }
    }

    // for(let i = 0;i<sliderBlocks.childNodes.length-1;i++){
    //     if(i==0){
    //         sliderBlocks.childNodes[0].style.left = 0 + 'px'
    //     }if(i==1){
    //         sliderBlocks.childNodes[1].style.left = -1000 + 'px'
    //     }
    //     else{
            
    //         sliderBlocks.childNodes[i].style.left += (1000) + 'px';
    //     }
    // }
    // for(let i = 0;i<sliderBlocks.childNodes.length;i++){
    //     sliderBlocks.childNodes[i].style.left += ((sliderBlocks.childNodes[i].dataset.number)*1000) + 'px';
    // }

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
//    document.getElementById("user_date").value = ''
}

document.addEventListener("DOMContentLoaded", ready);

// document.getElementById("contacts").onmouseover = function(event)
// {
//     if(event.target.className == "icon")
//     {
//         event.target.parentNode.style.width = 35 + 'px'
//         event.target.parentNode.style.height = 35 + 'px'
//     }
// }

// document.getElementById("contacts").onmouseout = function(event)
// {
//     if(event.target.className == "icon")
//     {
//         event.target.parentNode.style.width = 25 + 'px'
//         event.target.parentNode.style.height = 25 + 'px'
//     }
// }

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
        //sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].style.left = (sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].dataset.number)*1000+'px'
        if(sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].style.left == ""){sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].style.left = (sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].dataset.number)*1000+'px'}
        countRight+=1;
        // for(let i = 0;i<sliderBlocks.childNodes.length;i++){
        //     if(sliderBlocks.childNodes[i].dataset.number == i){
        //         console.log(sliderBlocks.childNodes[i]);
        //         sliderBlocks.childNodes[i].style.left += ((i)*1000) + 'px';
        //     }
        // }
        // if(sliderImg<2){
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
                //  if(parseInt(sliderBlocks.childNodes[i].style.left)<-sliderBlocks.childNodes[i].dataset.number*1000){
                //     returnPhotos(sliderBlocks.childNodes[i])
                // }
                 
             }
        //}
        // else{
        //     sliderBlocks.childNodes[sliderImg-1].hidden = true
        //     sliderImg=+sliderBlocks.firstElementChild.dataset.number;
        //     sliderBlocks.childNodes[sliderImg-1].hidden = false
        // }
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
            // if(parseInt(sliderBlocks.childNodes[i].style.left)==0){
            //     sliderBlocks.childNodes[i].style.left = (-(sliderBlocks.childNodes[i].dataset.number-getSelected.dataset.number)*1000)+'px'
            // }
        }
        countLeft+=1;
        // for (let i = 0; i < sliderBlocks.childNodes.length; i++) {
        //     sliderBlocks.childNodes[i].style.left = (parseInt(sliderBlocks.childNodes[i].style.left)+1000) + 'px';
        //     if(parseInt(sliderBlocks.childNodes[i].style.left)>2000){
        //         returnPhotos(sliderBlocks.childNodes[i])
        //     }
        // }

        // for(let i = sliderBlocks.childNodes.length-1;i>0;i--){
        //     if(sliderBlocks.childNodes[i].dataset.number == i){
        //         console.log(sliderBlocks.childNodes[i]);
        //         sliderBlocks.childNodes[i].style.left = (-(sliderBlocks.childNodes.length-i)*1000) + 'px';
        //     }
        // }

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
    //}
    }
}

function returnPhotos(slide){
    //slide.style.opacity = 0
        slide.style.left = slide.dataset.number*(1000) + 'px'
}

function returnPhotosLeft(slide){
    //slide.style.opacity = 0
    slide.style.left = slide.dataset.number*-1000 + 'px'
        //slide.style.left = -(document.getElementById("slider_blocks").childNodes.length-slide.dataset.number)*1000 + 'px'
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
    // for(let i = 0;i<document.querySelectorAll(".slider_button").length;i++){
    //     if(document.querySelectorAll(".slider_button")[i].classList.contains("selected")){
    //         document.querySelectorAll(".slider_button")[i].classList.remove("selected")
    //         document.querySelector(".last_work_slider_blocks").childNodes[document.querySelectorAll(".slider_button")[i].dataset.img].classList.remove("selected")
    //     }
    // }
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
                //document.querySelector(".last_work_slider_blocks").childNodes[document.querySelectorAll(".slider_button")[i].dataset.img].classList.remove("selected")
            }
        }
        sliderBlocks.childNodes[sliderImg].classList.remove("selected")
        // document.querySelectorAll(".slider_button")[sliderImg].classList.remove("selected")
        if(sliderImg==0){
            // sliderBlocks.childNodes[sliderBlocks.childNodes.length-1].classList.add("selected")
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
                //document.querySelector(".last_work_slider_blocks").childNodes[document.querySelectorAll(".slider_button")[i].dataset.img].classList.remove("selected")
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
    //slide.style.opacity = 0
        slide.style.left = (1000) + 'px'
}

function returnPhotosLeft(slide){
    //slide.style.opacity = 0
        slide.style.left = (-1000) + 'px'
}

// function returnPhotosLeft(slide){
//         slide.style.left = (0) + 'px'
// }

document.querySelector(".photo_options").onclick = (e)=>{
    if(e.target.className == "photo_option"){
        let portfolio_galleries = document.querySelector('.portfolio_galleries')
        for (let i = 0; i <portfolio_galleries.childNodes.length; i++) {
            console.log("---" + window.getComputedStyle(portfolio_galleries.childNodes[i]).getPropertyValue("display"));
            if(window.getComputedStyle(portfolio_galleries.childNodes[i]).getPropertyValue("display") == "grid"){
                portfolio_galleries.childNodes[i].style.display = 'none'
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
    }
}


// document.querySelector(".question_blocks").onclick = function(e){
//     console.log(e.target.className);
//     if(e.target.className == "question"){
//         console.log(parseInt(window.getComputedStyle(e.target.parentNode.querySelector(".answer"),null).getPropertyValue("height")));
//         if(parseInt(window.getComputedStyle(e.target.parentNode.querySelector(".answer"),null).getPropertyValue("height")) > 0){
//             //alert("YEsr")
//             e.target.parentNode.querySelector(".answer").style.height = 0 + 'px'
//             e.target.parentNode.querySelector(".answer").querySelector(".answer_text").style.opacity = 0    
//         }else{
//             e.target.parentNode.querySelector(".answer").style.height = 50 + 'px'
//             e.target.parentNode.querySelector(".answer").querySelector(".answer_text").style.opacity = 1
//         }
        
//     }
//     if(e.target.className == "question_text" || e.target.className == "answer_button"){
//         // e.target.parentNode.parentNode.querySelector(".answer").style.height = 50 + 'px'
//         // e.target.parentNode.parentNode.querySelector(".answer").querySelector(".answer_text").style.opacity = 1   
//         if(parseInt(window.getComputedStyle(e.target.parentNode.parentNode.querySelector(".answer"),null).getPropertyValue("height")) > 0){
//             //alert("YEsr")
//             e.target.parentNode.parentNode.querySelector(".answer").style.height = 0 + 'px'
//             e.target.parentNode.parentNode.querySelector(".answer").querySelector(".answer_text").style.opacity = 0    
//         }else{
//             e.target.parentNode.parentNode.querySelector(".answer").style.height = 50 + 'px'
//             e.target.parentNode.parentNode.querySelector(".answer").querySelector(".answer_text").style.opacity = 1
//         }
//     }
// }

$(function()
  {
    $(".question_block").click(function(){
        //console.log(this.dataset.class);
      $(".answer" + this.dataset.class).slideToggle("slow")
      $(".answer_button" + this.dataset.class).children().toggleClass("selected")
    //   $(".answer").slideToggle("slow")
    //   $(".answer_button").children().toggleClass("selected")
    })
  });
  

document.querySelector(".portfolio_galleries").onclick = (e)=>{
    console.log(e.target.classList.contains("photo"));
    if(e.target.classList.contains("photo")){
        document.querySelector(".container_slider").classList.add("selected")
    }
}

// document.getElementById("#close_slider").onclick = function(){
// }

function closeSlider(){
    document.querySelector(".container_slider").classList.remove("selected")
}

// document.querySelector(".photo").onclick = ()

// document.querySelector(".last_work_block").onmousemove = function(e){
//     console.log(e);
//     if(e.target.className == "photo" || e.target.className=="last_work_layer"){
//         e.target.parentNode.childNodes[0].style.width = (e.clientX-415) + 'px'
//     }
// }



// document.querySelector(".last_work_slider_blocks").onmouseover = function(e){
//     if(e.target.className == "photo"){
//         console.log(e.target.parentNode.parentNode.childNodes[document.getElementById("last_work").childNodes.length-2]);
//         e.target.parentNode.parentNode.childNodes[document.querySelector(".last_work").childNodes.length-2].style.opacity = 1
//     }
// }

$(function()
  {
    $(".last_work_slider_blocks").mouseenter(function(){
      $(".last_work_info").slideDown("fast")
    })
    $(".last_work_slider_blocks").mouseleave(function(){
        $(".last_work_info").slideUp("fast")
      })
  });

// document.querySelector(".last_work_slider_blocks").onmouseout = function(e){
//     for (let i = 0; i < document.querySelectorAll(".last_work_info").length; i++) {
//         document.querySelectorAll(".last_work_info")[i].style.opacity = 0
//     }    
// }


function sendInfo(){
    let userName = document.getElementById("user_name").value
    let userPhone = document.getElementById("user_phone").value
    let userPlace = document.getElementById("user_place").value
    let userDate = document.getElementById("datepicker").value
    
    let checkName = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig
    let checkPhoneNum = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
    let checkPlace = /\w/
    var checkDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

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

    if(!checkDate.test(userDate)){
        document.querySelector('.error.date').style.opacity = 1
    }
    //let userName = document.getElementById("user_name")

}
$(function() 
{
    $("#datepicker").datepicker();
});