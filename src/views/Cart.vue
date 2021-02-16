<template>
    <div class="col-lg-12 px-0">
<div class="header col-lg-12  mt-4">
    <h1 class="text-left ml-4">Your Cart</h1>
</div>

<div class="cart-body col-lg-12">
    <div class="selected-products col-lg-6 mt-4">
        <div class="cats py-0">
            <ul  class="cat-list d-flex">
                <li>Products</li>
                <li class="option">Description</li>
                <li class="option"> Quantity</li>
                <li class="option" >Price</li>
                <li  class="option">Delete</li>
            </ul>
        </div>

        <div class="product col-lg-12 d-flex mt-4">
<div class="product-image col-lg-3 ">
    <img src="../assets/product.jpg" width="80%;"  alt="">

</div>
<p class="name col-lg-3">Girls Casual Set</p>
<p class="quantity  col-lg-2"><span>-</span> <span>1</span> <span>+</span></p>
<p class="price col-lg-2">$32</p>
<button class="remove col-lg-2">X</button>
        </div>
    </div>
</div>
    </div>
</template>


<style scoped>
.cats{
   border-bottom:1px solid black;
   margin-top:60px;
}

.cat-list{
    list-style: none;
    
}

.cat-list > *{
 font-size:1.3rem;
    line-height: 0.8rem;
}
.cat-list .option{
    margin-left:7% ;
   
}

</style>