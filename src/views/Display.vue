<template>
  <div class="col-lg-12">
      <div class="col-lg-10 offset-lg-1">
<h1 class="text-center h3 mt-4">Products</h1>

<div class="wrap-product col-lg-3 mt-4">
<div class="single col-lg-12 shadow mt-4" style="height:300px;font-weight:700;">

<img src="../assets/product.jpg"  alt="">
    
<div class="more">
<button>VIEW PRODUCT</button>
</div>

</div>
<p class="mt-1 text-center">Girl's Casual Set</p>
</div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{

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
    margin-left:22% ;
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