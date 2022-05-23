//store the products array in localstorage as "products"
document.querySelector("#show_products").addEventListener("click",()=>{
    window.location.href="inventory.html";
});

  
  let product= JSON.parse(localStorage.getItem("products")) || [];
  
  function myProducts(type,desc,price,image) {
      this.type = type;
      this.desc = desc;
      this.price = price;
      this.image = image;
  };
  
  function storeProduct() {
      event.preventDefault();
      let form = document.getElementById("products");
  
      let type = form.type.value;
      let desc = form.desc.value;
      let price = form.price.value;
      let image = form.image.value;
  
      let t = new myProducts(type,desc,price,image);
      
  
      product.push(t);
      console.log(product);
      localStorage.setItem("products",JSON.stringify(product));
  
      form.type.value = "";
      form.desc.value = "";
      form.price.value = "";
      form.image.value = "";
  }