<template>
    <div class="col-lg-12 px-0 py-0 " style="font-family: 'Lato', sans-serif;">


<div class="cart-body col-lg-12 d-flex px-0 py-0">
    <div class="selected-products col-lg-12 ">
        <div class="header col-lg-12  mt-4 d-md-flex d-none">
    <h1 class="text-left offset-lg-1">Your Cart</h1>
    <img src="../assets/shopping-cart.svg" width="60px" height="50px"  alt="">
</div>
<!-- smaller screens-->

 <div class=" col-sm-12  mt-4 d-md-none d-flex">
    <h1 class="text-left ">Your Cart</h1>
    <img src="../assets/shopping-cart.svg" width="40px" height="30px" class="mt-2" alt="">
</div>
        <div class="cats col-lg-10 offset-lg-1 d-md-block d-none py-0 ">
            <ul  class="cat-list d-flex">
                <li class="col-lg-4 ml-4">Products</li>
             
                <li class="option col-lg-2 ml-3">  Quantity</li>
                
                <li  class="option col-lg-2">Unit Price</li>
                   <li  class="option col-lg-2">Subtotal</li>
            </ul>
        </div>

<!-- product display for larger sreens-->

        <div class="product col-lg-10 offset-lg-1 d-md-block d-none mt-4 shadow" >
            <div class="inner col-lg-12 d-flex">
            <div class="product-details col-lg-5 ">


<div class="product-image d-flex ">
    <img src="../assets/casual.jpg" width="20%;" height="50px" class="mt-1"  alt="">
<p class="name col-lg-6 ">Girls Casual Set</p>
</div>

</div>

<div class="quantity col-lg-2 mt-3 ml-1 ml-md-3" >
<input   list="quantities" name="browser" id="browser" placeholder="1">

<datalist width="22px"  id="quantities">
  <option  value="1"></option>
  <option value="2"></option>
  <option value="3"></option>
  <option value="4"></option>
  <option value="5"></option>
</datalist>
</div>

<p class="price col-lg-2 ml-1">$32</p>

<p class="price col-lg-2">$32</p>

        </div>
        <div class="more-options  col-md-10  d-flex">

<div class="trash  d-flex">
    <img  src="../assets/heart.svg" width="20px" height="25px" alt="" class="mt-3">
    <p class="ml-3" >Move to wishlist</p>
</div>

<div class="trash d-flex ml-3">
    <img   src="../assets/trash-bin.svg" width="20px" height="25px" alt="" class="mt-3">
    <p class="ml-3">Remove</p>
</div>
</div>
    </div>

  </div>
  
</div>

<!-- <div class="more-options  col-md-10  d-flex">

<div class="trash  d-flex">
    <img  src="../assets/heart.svg" width="25px" alt="">
    <p class="ml-3" >Move to wishlist</p>
</div>

<div class="trash d-flex ml-3">
    <img   src="../assets/trash-bin.svg" width="25px" alt="">
    <p class="ml-3">Remove</p>
</div>
</div> -->
<!-- product display for larger sreens ends-->


<!-- product display for smaller sreens-->


<div class="s-products col-sm-12 d-md-none d-block mt-4 mb-4">
<div class="s-product d-flex col-sm-10 offset-sm-1 shadow p-2 ">
<div class="description col-sm-7 text-center;">
    <p style="font-weight:bold;font-size:1.2rem;">Girls Casual Set</p>
    <p>Chic.co</p>
<div class="amount d-flex">
    <p class="price" style="border-right:1px solid grey;padding-right:6%;">$ <span>10.00</span></p>
    <p class="number ml-2">2</p>
</div>
</div>
<div class="s-pic col-sm-4" style="height:100px;margin-top:10px;background-color:white;">
 <img src="../assets/casual.jpg" width="90%;"  class="mt-2"  alt="">
</div>
</div>

</div>



<!-- product display for smaller sreens ends-->
<div class="breakdown col-lg-4 offset-lg-8 mt-4 "> 
    <div class="total-selected d-flex mt-2 ">
<p class="col-lg-4" >Items Cost:</p>
<p class="">$<span>10.00</span></p>
    </div>

  <div class="shipping d-flex">
<p class="col-lg-4">Shipping:</p>
<p class="">$<span>5.00</span></p>
    </div>  

    
  <div class="bill d-flex text-danger">
<p class="col-lg-4">Total:</p>
<p class="">$<span>15.00</span></p>
    </div>  
</div>

  <div class="total-order col-lg-12 d-flex mt-4">
       


<button class="total col-lg-3 offset-lg-5 mt-3 text-center shadow">

Continue Shopping

</button>

<button class="checkout col-lg-3 ml-4 mt-3 text-center shadow">
Checkout Items
</button>
    </div>
    </div>
</template>


<style scoped>
.cats{
   border-bottom:1px solid black;
   margin-top:60px;
   color: #2C3E50;
}

.cat-list{
    list-style: none;
    
}

.cat-list > *{
 font-size:1.3rem;
    line-height: 0.8rem;
}


.selected-products{
   
   
}



.product p{
    margin-top:15px;
    background-color: white;
}




.header2 h2{
    font-size:1.7rem;
   
   
     color: #2C3E50;
}

.total-order{
   
    padding-bottom:10px;
}

.total{
    background-color: #ffffff;
    color:black;
    font-size:1.3rem;
    border:none;
    padding-top: 3px;
    padding-bottom:3px;
    
    
}

.checkout{
    background-color:black;
    color:white;
    border:none;
    font-size:1.3rem;
}

.more-options{
    margin-left:12%;
    
}

.s-product{
    border-radius:15px;
    background-color:#fafafa;
}

.quantity input{
    width:40px;
    height: 25px;
    border-radius: 10px;
    outline:none;
}

.quantity #quantities{
    width:22px;
   
    
}

</style>