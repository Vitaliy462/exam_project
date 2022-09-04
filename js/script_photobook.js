document.querySelector(".photobook_form").onclick = function(e){
    if(e.target.className == "parameter_block_name"){
        console.log(e);
        if(document.getElementsByClassName(e.target.id)[0].classList.contains("selected")){
            document.getElementsByClassName(e.target.id)[0].classList.remove("selected")
        }else{
            document.getElementsByClassName(e.target.id)[0].classList.add("selected")
        }
        
    }
    if(e.target.classList.contains("photobook_value")){
        if(document.getElementsByClassName(e.target.parentNode.id)[0].classList.contains("selected")){
            document.getElementsByClassName(e.target.parentNode.id)[0].classList.remove("selected")
        }else{
            document.getElementsByClassName(e.target.parentNode.id)[0].classList.add("selected")
        }
    }
}

for (let i = 0; i < document.getElementsByName("photobook_size").length; i++) {
    document.getElementsByName("photobook_size")[i].addEventListener("change",function(){
        for (let j = 0; j < document.getElementsByClassName("photobook_size_label").length; j++) {
            if(document.getElementsByClassName("photobook_size_label")[j].classList.contains("selected")){
                document.getElementsByClassName("photobook_size_label")[j].classList.remove("selected")
            }
        }
        for (let j = 0; j < document.getElementsByName("photobook_size").length; j++) {
            if(document.getElementsByName("photobook_size")[j].checked){
                document.getElementById("photobook_size_value").innerText = document.querySelector('label[for='+""+document.getElementsByName("photobook_size")[j].id+""+']').innerText
                document.getElementsByClassName("photobook_size_label")[j].classList.add("selected")
                document.querySelector(".size_value").innerText = document.querySelectorAll(".parameter_size_name")[j].innerText
                
                document.getElementById("photobook_price_value").innerText = document.getElementsByName("photobook_size")[j].dataset.price
                //alert("1 " + document.getElementById("photobook_price_value").innerText);
                if(+document.getElementById("photobook_copies").value==1){
                    document.getElementById("photobook_price_value").innerText = 0
                }
                
                if(+document.getElementById("photobook_turns").value>=5){
                    if(parseInt(document.getElementById("photobook_turns").value) == 5){
                        document.getElementById("photobook_price_value").innerText =  +document.getElementsByName("photobook_size")[j].dataset.price ;
                    }else{
                        let photobookVal = +document.getElementsByName("photobook_size")[j].dataset.price
                        for (let i = 5; i < +document.getElementById("photobook_turns").value; i++) {
                            photobookVal += (+document.getElementById("photobook_turns").dataset.price)
                            document.getElementById("photobook_price_value").innerText =  photobookVal ;
                        }
                    }
                }
                //alert("2 " + document.getElementById("photobook_price_value").innerText);
                for (let k = 0; k < document.getElementsByName("photo_cover_type").length; k++) {
                    if(document.getElementsByName("photo_cover_type")[k].checked){
                        document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photo_cover_type")[k].dataset.price);
                        // if(parseInt(document.getElementById("photobook_copies").value)>=1){
                        //     document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photo_cover_type")[k].dataset.price) * +document.getElementById("photobook_copies").value;
                        // }
                    }
                }
                //alert("3 " + document.getElementById("photobook_price_value").innerText);
                for (let k = 0; k < document.getElementsByName("photobook_packaging").length; k++) {
                    if(document.getElementsByName("photobook_packaging")[k].checked){
                        document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[k].dataset.price);
                        // if(parseInt(document.getElementById("photobook_copies").value)>=1){
                        //     document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[k].dataset.price) * +document.getElementById("photobook_copies").value;
                        // }
                    }
                }
                //alert("4 " + document.getElementById("photobook_price_value").innerText);
                if(+document.getElementById("photobook_copies").value>1){{
                    document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) * (+document.getElementById("photobook_copies").value);
                }
                //alert("5 " + document.getElementById("photobook_price_value").innerText);
            }
            }
        }
    })
    
}

let photobookPriceValue = parseInt(document.getElementById("photobook_price_value").innerText)
console.log(photobookPriceValue);
let photobookMaterialSizeValue,photoCoverTypeValue,photoCoverImg = 0;


document.getElementById("photobook_turns_value").innerText = document.getElementById("photobook_turns").value
document.getElementById("photobook_copies_value").innerText = document.getElementById("photobook_copies").value

document.getElementById("photobook_turns").onchange = function(){
    if(parseInt(document.getElementById("photobook_turns").value)>=5 && isFinite(document.getElementById("photobook_turns").value)){
        document.getElementById("photobook_turns_value").innerText = document.getElementById("photobook_turns").value
        for (let j = 0; j < document.getElementsByName("photobook_size").length; j++) {
            if(document.getElementsByName("photobook_size")[j].checked){
                // if(+document.getElementById("photobook_copies").value==1){
                //     document.getElementById("photobook_price_value").innerText =0
                // }
                if(parseInt(document.getElementById("photobook_turns").value) == 5){
                    document.getElementById("photobook_price_value").innerText =  +document.getElementsByName("photobook_size")[j].dataset.price ;
                }else{
                    let photobookVal = +document.getElementsByName("photobook_size")[j].dataset.price
                    for (let i = 5; i < +document.getElementById("photobook_turns").value; i++) {
                        photobookVal += (+document.getElementById("photobook_turns").dataset.price)
                        document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementById("photobook_turns").dataset.price) ;
                    }
                }
                // for (let k = 0; k < document.getElementsByName("photo_cover_type").length; k++) {
                //     if(document.getElementsByName("photo_cover_type")[k].checked){
                //         document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photo_cover_type")[k].dataset.price);
                //     }
                // }
                // for (let k = 0; k < document.getElementsByName("photobook_packaging").length; k++) {
                //     if(document.getElementsByName("photobook_packaging")[k].checked){
                //         document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[k].dataset.price);
                //     }
                // }
                // if(+document.getElementById("photobook_copies").value>1){
                //     document.getElementById("photobook_price_value").innerText =document.getElementById("photobook_price_value").innerText *  (+document.getElementById("photobook_copies").value);                }
            }
        }
    }
}

document.getElementById("photobook_copies").onchange = function(){
    if(parseInt(document.getElementById("photobook_copies").value)>=1 && isFinite(document.getElementById("photobook_copies").value)){
        if(parseInt(document.getElementById("photobook_copies").value)==1){
            document.getElementById("photobook_price_value").innerText = 0
        }
        document.getElementById("photobook_copies_value").innerText = document.getElementById("photobook_copies").value
        for (let j = 0; j < document.getElementsByName("photobook_size").length; j++) {
            if(document.getElementsByName("photobook_size")[j].checked){
                    if(parseInt(document.getElementById("photobook_turns").value) <= 5){
                        document.getElementById("photobook_price_value").innerText =  +document.getElementsByName("photobook_size")[j].dataset.price ;
                    }else{
                        let photobookVal = +document.getElementsByName("photobook_size")[j].dataset.price
                        for (let i = 5; i < +document.getElementById("photobook_turns").value; i++) {
                            photobookVal += (+document.getElementById("photobook_turns").dataset.price)
                            document.getElementById("photobook_price_value").innerText =  photobookVal ;
                        }
                    }
                for (let k = 0; k < document.getElementsByName("photo_cover_type").length; k++) {
                    if(document.getElementsByName("photo_cover_type")[k].checked){
                        document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photo_cover_type")[k].dataset.price)
                        // if(parseInt(document.getElementById("photobook_copies").value)>=1){
                        //     document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photo_cover_type")[k].dataset.price) * +document.getElementById("photobook_copies").value;
                        // }
                    }
                }
                for (let k = 0; k < document.getElementsByName("photobook_packaging").length; k++) {
                    if(document.getElementsByName("photobook_packaging")[k].checked){
                        document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[k].dataset.price) 
                        // if(parseInt(document.getElementById("photobook_copies").value)>=1){
                        //     document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[k].dataset.price) * +document.getElementById("photobook_copies").value;
                        // }
                    }
                }
                document.getElementById("photobook_price_value").innerText = +document.getElementById("photobook_price_value").innerText  * +document.getElementById("photobook_copies").value
            }
        }
    }
}

for (let i = 0; i < document.getElementsByName("photo_cover_type").length; i++) {
    document.getElementsByName("photo_cover_type")[i].addEventListener("change",function(){
        for (let j = 0; j < document.getElementsByClassName("photobook_cover_label").length; j++) {
            if(document.getElementsByClassName("photobook_cover_label")[j].classList.contains("selected")){
                document.getElementsByClassName("photobook_cover_label")[j].classList.remove("selected")
            }
        }
        for (let j = 0; j < document.getElementsByName("photo_cover_type").length; j++) {
            if(document.getElementsByName("photo_cover_type")[j].checked){
                document.getElementById("photo_cover_type_value").innerText = document.querySelector('label[for='+""+document.getElementsByName("photo_cover_type")[j].id+""+']').innerText
                document.getElementsByClassName("photobook_cover_label")[j].classList.add("selected")
                document.querySelector(".cover_value").innerText = document.querySelectorAll(".parameter_cover_name")[j].innerText
                if(+document.getElementById("photobook_price_value").innerText==0){
                    //document.getElementById("photobook_price_value").innerText = +(document.getElementById("size_photobook").options[document.getElementById("size_photobook").selectedIndex].dataset.price) * +document.getElementsByName("photobook_material_size")[j].parentNode.dataset.price
                }else{
                    document.getElementById("photobook_price_value").innerText = document.getElementsByName("photobook_size")[j].dataset.price
                    //alert("1 " + document.getElementById("photobook_price_value").innerText);
                    if(+document.getElementById("photobook_copies").value==1){
                        document.getElementById("photobook_price_value").innerText = 0
                    }
                    
                    if(+document.getElementById("photobook_turns").value>=5){
                        if(parseInt(document.getElementById("photobook_turns").value) == 5){
                            document.getElementById("photobook_price_value").innerText =  +document.getElementsByName("photobook_size")[j].dataset.price ;
                        }else{
                            let photobookVal = +document.getElementsByName("photobook_size")[j].dataset.price
                            for (let i = 5; i < +document.getElementById("photobook_turns").value; i++) {
                                photobookVal += (+document.getElementById("photobook_turns").dataset.price)
                                document.getElementById("photobook_price_value").innerText =  photobookVal ;
                            }
                        }
                    }
                    //alert("3 " + document.getElementById("photobook_price_value").innerText);
                    for (let k = 0; k < document.getElementsByName("photobook_packaging").length; k++) {
                        if(document.getElementsByName("photobook_packaging")[k].checked){
                            document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[k].dataset.price);
                            // if(parseInt(document.getElementById("photobook_copies").value)>=1){
                            //     document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[k].dataset.price) * +document.getElementById("photobook_copies").value;
                            // }
                        }
                    }
                    //alert("4 " + document.getElementById("photobook_price_value").innerText);
                    if(+document.getElementById("photobook_copies").value>1){
                        document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) * (+document.getElementById("photobook_copies").value);
                    }

                    //document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photo_cover_type")[j].dataset.price)
                    if(parseInt(document.getElementById("photobook_copies").value)>=1){
                        document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photo_cover_type")[j].dataset.price)*+document.getElementById("photobook_copies").value;
                    }
                    
                }

            }
        }
    })
}


for (let i = 0; i < document.getElementsByName("photobook_packaging").length; i++) {
    document.getElementsByName("photobook_packaging")[i].addEventListener("change",function(){
        for (let j = 0; j < document.getElementsByClassName("photobook_packaging_label").length; j++) {
            if(document.getElementsByClassName("photobook_packaging_label")[j].classList.contains("selected")){
                document.getElementsByClassName("photobook_packaging_label")[j].classList.remove("selected")
            }
        }
        for (let j = 0; j < document.getElementsByName("photobook_packaging").length; j++) {
            if(document.getElementsByName("photobook_packaging")[j].checked){
                document.getElementById("photobook_packaging_value").innerText = document.querySelector('label[for='+""+document.getElementsByName("photobook_packaging")[j].id+""+']').innerText
                document.getElementsByClassName("photobook_packaging_label")[j].classList.add("selected")
                document.querySelector(".packaging_value").innerText = document.querySelectorAll(".parameter_packaging_name")[j].innerText
                if(+document.getElementById("photobook_price_value").innerText==0){
                    //document.getElementById("photobook_price_value").innerText = +(document.getElementById("size_photobook").options[document.getElementById("size_photobook").selectedIndex].dataset.price) * +document.getElementsByName("photobook_material_size")[j].parentNode.dataset.price
                }else{
                    //document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[j].dataset.price);
                    
                    document.getElementById("photobook_price_value").innerText = document.getElementsByName("photobook_size")[j].dataset.price
                    //alert("1 " + document.getElementById("photobook_price_value").innerText);
                    if(+document.getElementById("photobook_copies").value==1){
                        document.getElementById("photobook_price_value").innerText = 0
                    }
                    
                    if(+document.getElementById("photobook_turns").value>=5){
                        if(parseInt(document.getElementById("photobook_turns").value) == 5){
                            document.getElementById("photobook_price_value").innerText =  +document.getElementsByName("photobook_size")[j].dataset.price ;
                        }else{
                            let photobookVal = +document.getElementsByName("photobook_size")[j].dataset.price
                            for (let i = 5; i < +document.getElementById("photobook_turns").value; i++) {
                                photobookVal += (+document.getElementById("photobook_turns").dataset.price)
                                document.getElementById("photobook_price_value").innerText =  photobookVal ;
                            }
                        }
                    }
                    //alert("2 " + document.getElementById("photobook_price_value").innerText);
                    for (let k = 0; k < document.getElementsByName("photo_cover_type").length; k++) {
                        if(document.getElementsByName("photo_cover_type")[k].checked){
                            document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photo_cover_type")[k].dataset.price);
                            // if(parseInt(document.getElementById("photobook_copies").value)>=1){
                            //     document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photo_cover_type")[k].dataset.price) * +document.getElementById("photobook_copies").value;
                            // }
                        }
                    }
                    if(+document.getElementById("photobook_copies").value>1){
                        document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) * (+document.getElementById("photobook_copies").value);
                    }
                    //document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[j].dataset.price);
                    if(parseInt(document.getElementById("photobook_copies").value)>=1){
                        document.getElementById("photobook_price_value").innerText = (+document.getElementById("photobook_price_value").innerText) + (+document.getElementsByName("photobook_packaging")[j].dataset.price)*+document.getElementById("photobook_copies").value;
                    }
                }
            }
        }
    })
}

function openHeader(){
    var header = document.querySelector("header")
    if(header.classList.contains("selected")){
        header.classList.remove("selected")
    }else{
        header.classList.add("selected")
    }
}