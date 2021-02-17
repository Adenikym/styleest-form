<template>
    <div class="col-lg-12 px-0 py-1 wrap" style="font-family: 'Lato', sans-serif;">
<div class="cart-box col-lg-4 offset-lg-4 p-1">
<div class="cart   rounded-circle p-1 ml-4">
<img src="../assets/shopping-cart.svg" width=40%; class="ml-4 "  alt="">
</div>
</div>

<p class=" text-center mt-3 mr-3">Your cart is empty!</p>

<button class="shop p-2 shadow col-lg-4 offset-lg-4 mt-2">Shop Now</button>
    </div>
</template>


<script>
export default {
    
}
</script>




<style scoped>
.wrap{
    background-color: #FCEEE5;
    height:100vh;
}

.wrap p{
    font-size:2rem;
}

.cart{
    width:300px;
    height: 300px;
 
 
    background-color: white;
 
}

.cart img{
    position:absolute;
    top:60px;
    left:50px;
}

.cart-box{
   margin-top: 20vh;
}

.shop{
    color:white;
    background-color: #E28086;
    border:none;
}
</style>