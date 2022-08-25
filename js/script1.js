window.onload = function(){
    document.getElementById("photo_size").value = ""
}

document.getElementById("photo_size").onchange = function(){
    document.getElementById("price_one_val").innerText = document.getElementById("photo_size").value
    //console.log(document.getElementById("price_one_val").innerText);
    document.getElementById("final_price_val").innerText = +document.getElementById("price_one_val").innerText * +document.getElementById("price_nums_val").innerText
    //alert(document.getElementById("photo_size").value +" "+ document.getElementById("photo_size").selectedIndex)
}



document.getElementById("number_photos").onchange = function(){
    document.getElementById("price_nums_val").innerText = document.getElementById("number_photos").value
    //console.log(document.getElementById("price_nums_val").value);
    document.getElementById("final_price_val").innerText = +document.getElementById("price_one_val").innerText * +document.getElementById("price_nums_val").innerText
    //alert(document.getElementById("number_photos").value)
}