window.onload = function(){

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

    for(let i = 1;i<portfolioGalleries.childNodes.length;i++){
        console.log(portfolioGalleries.childNodes[i]);
        if(portfolioGalleries.childNodes[i].classList.contains("photo_gallery")){
            portfolioGalleries.childNodes[i].style.display = 'none';   
        }
    }
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

function openHeader(){
    var header = document.querySelector("header")
    if(header.classList.contains("selected")){
        header.classList.remove("selected")
    }else{
        header.classList.add("selected")
    }
}