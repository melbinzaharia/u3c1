document.querySelector("#add_more_product").addEventListener("click",()=>{
    window.location.href="index.html";
});

let myProd = JSON.parse(localStorage.getItem("products")) || [];

myProd.map(function(elem,index){
    let box = document.createElement("div") = "";

    let img = document.createElement("img");
    img.src = elem.image;
    img.setAttribute("height","140px");
    img.setAttribute("width","140px");
    img.setAttribute("margin-top","40px");

    let type = document.createElement("h4");
    type.innerHTML = elem.type;

    let desc = document.createElement("h4");
    desc.innerHTML = elem.desc;

    let price = document.createElement("h4");
    price.innerHTML = elem.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id","remove_product");
    btn.onclick = function removeProduct() {
        
        myProd.splice(index,1);
        localStorage.setItem("products",JSON.stringify(myProd));
        location.reload(true);
    }

    box.append(img,type,desc,price,btn);
    document.getElementById("all_products").append(box);
});