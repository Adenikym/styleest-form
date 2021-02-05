<template>
  <div class="col-lg-12" style="font-family: 'Roboto', sans-serif;">
      <div class="col-lg-10 offset-lg-1">
<div class="top-bar d-flex col-lg-12"><h1  class="text-center h3 mt-4 col-lg-2">Products</h1>
<div class="form-group mt-3 offset-lg-4 col-lg-5 d-none">
    <input  type="text" class="form-control " style="color:pink;" placeholder="Search">
    <div class="search-icon"></div>
</div>
</div> 

<div class="wrap-product col-lg-3" style="margin-top:60px;">
<div class="single col-lg-12 shadow mt-4" style="height:300px;font-weight:700;">

<img src="../assets/product.jpg"  alt="">
    
<div class="more">
<button @click="displayProduct()" >VIEW PRODUCT</button>
</div>

</div>
<p class="mt-2 text-left" style="font-size:1.3rem;font-weight:bold;line-height:0.8rem;">Girl's Casual Set</p>
<p class="price text-left py-0" style="font-size:1.3rem;font-weight:bold;color:grey;line-height:0.8rem;">$30.00</p>
</div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
displayProduct(){
    this.$router.push({path:'/product'})
}
    }
}
}
</script>

<style scoped>
.single{
    
    border-radius: 15px;
	padding: 1.5rem;
	background: white;
	position: relative;
	display: flex;
	align-items: flex-end;
	transition: 0.4s ease-out;
   
	
}

.single img{
    width: 100%;
    height:100%;
    object-fit:cover;
    position:absolute;
    top: 0;
	left: 0;
	border-radius: 10px
}

.single:hover{
transform: translateY(20px);
opacity:1
}


.single:before{
   opacity: 1 
}

.more{
    opacity:0;
    width:100%;
height:100%;
position:absolute;
top:0;
left:0;
}

.more button{
    margin-left:24% ;
    margin-top:140px;
    background:none;
    color:white;
    border:1px solid white;
}

.more:hover{background-color:rgba(0,0,0,0.7);
opacity: 1;


animation-name: myoverlay;
}


.describe{
    background-color: black;
    color:white;
    
}


</style>