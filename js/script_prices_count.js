window.onload = function(){
    document.getElementById("photo_size").value = ""
}

document.getElementById("photo_size").onchange = function(){
    document.getElementById("price_one_val").innerText = document.getElementById("photo_size").value
    document.getElementById("final_price_val").innerText = +document.getElementById("price_one_val").innerText * +document.getElementById("price_nums_val").innerText
}



document.getElementById("number_photos").onchange = function(){
    document.getElementById("price_nums_val").innerText = document.getElementById("number_photos").value
    document.getElementById("final_price_val").innerText = +document.getElementById("price_one_val").innerText * +document.getElementById("price_nums_val").innerText
}

function openHeader(){
    var header = document.querySelector("header")
    if(header.classList.contains("selected")){
        header.classList.remove("selected")
    }else{
        header.classList.add("selected")
    }
}