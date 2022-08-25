window.onload = ()=>{
    var allPrices = document.getElementById("all_prices")
    for(let i = 0;i<allPrices.childNodes.length;i++){
        if(allPrices.childNodes[i].nodeName == "#text"){
            allPrices.removeChild(allPrices.childNodes[i])
        }
    }

    var schoolTypes = document.getElementById("school_types")
    for(let i = 0;i<schoolTypes.childNodes.length;i++){
        if(schoolTypes.childNodes[i].nodeName == "#text"){
            schoolTypes.removeChild(schoolTypes.childNodes[i])
        }
    }

    var typePrices = document.querySelector(".photo_type_prices")
    for(let i = 0;i<typePrices.childNodes.length;i++){
        if(typePrices.childNodes[i].nodeName == "#text"){
            typePrices.removeChild(typePrices.childNodes[i])
        }
    }
}

document.getElementById("school_opt").onmouseover = function(){
        // alert("sd")
    document.getElementById("popup").style.display = 'block'
}

document.getElementById("school_opt").onmouseleave = function(){
    document.getElementById("popup").style.display = 'none'
}



function selectPrice(event){
    if(event.target.dataset.price){
        var allPrices = document.getElementById("all_prices")
        for(let i = 0;i<allPrices.childNodes.length;i++){
            if(allPrices.childNodes[i].classList.contains("selected")){
                allPrices.childNodes[i].classList.remove("selected")
            }
        }
        var schoolTypes = document.getElementById("school_types")
        for(let i = 0;i<schoolTypes.childNodes.length;i++){
            if(schoolTypes.childNodes[i].classList.contains("selected")){
                schoolTypes.childNodes[i].classList.remove("selected")
            }
        }
        var typePrices = document.querySelector(".photo_type_prices")
        for(let i = 0;i<typePrices.childNodes.length;i++){
            if(typePrices.childNodes[i].classList.contains("selected")){
                typePrices.childNodes[i].classList.remove("selected")
            }
        }
        // if(event.target.dataset.price == "school"){
        //     alert(event.target)
        // }
        event.target.classList.add("selected")
        document.getElementById(event.target.dataset.price).classList.add("selected")
    }
    if(event.target.dataset.schooltype){
        var allPrices = document.getElementById("all_prices")
        for(let i = 0;i<allPrices.childNodes.length;i++){
            if(allPrices.childNodes[i].classList.contains("selected")){
                allPrices.childNodes[i].classList.remove("selected")
            }
        }
        var schoolTypes = document.getElementById("school_types")
        for(let i = 0;i<schoolTypes.childNodes.length;i++){
            if(schoolTypes.childNodes[i].classList.contains("selected")){
                schoolTypes.childNodes[i].classList.remove("selected")
            }
        }
        document.getElementById(event.target.dataset.schooltype).classList.add("selected")
    }
}

// function selectSchoolType(event){
//     //alert(event.target.dataset.schooltype)
//     if(event.target.dataset.schooltype){
//         var allPrices = document.getElementById("all_prices")
//         for(let i = 0;i<allPrices.childNodes.length;i++){
//             if(allPrices.childNodes[i].classList.contains("selected")){
//                 allPrices.childNodes[i].classList.remove("selected")
//             }
//         }
//         var schoolTypes = document.getElementById("school_types")
//         for(let i = 0;i<schoolTypes.childNodes.length;i++){
//             if(schoolTypes.childNodes[i].classList.contains("selected")){
//                 schoolTypes.childNodes[i].classList.remove("selected")
//             }
//         }
//         document.getElementById(event.target.dataset.schooltype).classList.add("selected")
//     }
// }