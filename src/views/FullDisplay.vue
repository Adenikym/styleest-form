<template>
  <div class="col-lg-12 " style="font-family: 'Roboto', sans-serif;">
      <div class="display-card col-lg-10 offset-lg-1 shadow d-flex px-0">


<div class="description col-lg-6">

    <div class="inner col-lg-10 offset-lg-1">
    <img src="../assets/rating.svg" style="width:10%;margin-left:2%;margin-top:80px;" alt="">
  <h2 class="h3">Girl's Red and White Set</h2>
  <p>Comfy Casual Wear</p>

 <p style="font-size:1rem;"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, aliquam rerum doloremque distinctio natus .</p>
<hr style="color:grey;border:1px solid grey;">

<ul class="points d-flex px-0 ml-3" style="font-size:0.8rem;font-weight:bold;">
    <li>UK made</li>
    <li class="ml-4">100% Cotton</li>
    <li class="ml-4">Organic dye</li>
</ul>

<div class="cart-section  px-0 d-flex" >
<div class="amount py-0 col-lg-3" style="border:1px solid black;display:flex;justify-content:center;font-size:1rem;height:40px;">
    <p class="mt-2"><span >-</span>  <span class="ml-3">0</span> <span class="ml-3">+</span></p>
</div>

<div class="price py-0 col-lg-6 offset-lg-1" style="border:1px solid black;display:flex;justify-content:center;font-size:1rem;height:40px;background-color:#efe0fe;">
    <p class="mt-2"><span style="border-right:1px solid black;padding-right:8px;" >Add to Cart</span>   <span class="ml-3">$30.00</span></p>
</div>
</div>

<form action="" class="size d-flex form-group mt-3 ">
<label for="">Size:</label>
<p class="ml-1">6</p>
<input class="ml-1 mt-1" type="radio" name="size" id="" value="6">
<p class="ml-1 ">8</p>
<input class="ml-1 mt-1" type="radio" name="size" id="" value="8">
<p class="ml-1">10</p>
<input class="ml-1 mt-1" type="radio" name="size" id="" value="10">
</form>
</div>
</div>

<div class="pic col-lg-6 px-0">
   


     
  
  <section class="slide-wrapper">
    <div class="container">
<div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/product.jpg" width="100%" height="100%" alt="">
                </div>
                <div class="carousel-item">
                  <img src="../assets/product.jpg" width="100%" height="100%" alt="">
                </div>
                <div class="carousel-item">
                   <img src="../assets/product.jpg" width="100%" height="100%" alt="">
                </div>
 <div class="carousel-item ">
                 <h3 class="mt-4" style="font-weight:900;" >Customer Reviews</h3>

                 <p class="score" style="font-size:3rem;font-weight:800;">4.7</p>
<div class="rate-bars px-2">
       <div class="progress mb-4 ">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>

   <div class="progress mb-4 ">
  <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

 <div class="progress mb-4">
  <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-4">
  <div class="progress-bar " role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:15%;"></div>
</div>

<div class="progress mb-4">
  <div class="progress-bar " role="progressbar" aria-valuenow="50" aria-valuemin="0" style="width:9%" aria-valuemax="100"></div>
</div>
<button class="btn" style="border:1px solid pink;">VIEW ALL</button>
</div>
           
                </div>
            </div>
        </div>
    </div>
</section>

    
</div>
      </div>
  </div>

</template>

<script>

import $ from 'jquery'


export default {
mounted(){
    $('.carousel').carousel({
  interval: 3000
})
}
}
</script>

<style scoped>
.display-card{
    height:80vh;
    margin-top:10vh;
}

.carousel-inner,.carousel,.carousel-item,.container,.fill {
    height:100%;
    min-height:400px;
    width:100%;
    background-position:center center;
    background-size:cover;
}
.slide-wrapper{display:inline;}
.slide-wrapper .container{padding:0;}


/*------------------------------ vertical bootstrap slider----------------------------*/

.carousel-inner> .carousel-item.carousel-item-next ,
.carousel-inner > .carousel-item.active.carousel-item-right{ 
    transform: translate3d(0, 100%, 0); -webkit-transform: translate3d(0, 100%, 0); -ms-transform: translate3d(0, 100%, 0); -moz-transform: translate3d(0, 100%, 0); -o-transform: translate3d(0, 100%, 0);  top: 0;
    
}
.carousel-inner > .carousel-item.carousel-item-prev ,
.carousel-inner > .carousel-item.active.carousel-item-left{ 
    transform: translate3d(0,-100%, 0); -webkit-transform: translate3d(0,-100%, 0);  -moz-transform: translate3d(0,-100%, 0);-ms-transform: translate3d(0,-100%, 0); -o-transform: translate3d(0,-100%, 0); top: 0;
    
}
.carousel-inner > .carousel-item.next.carousel-item-left ,
.carousel-inner > .carousel-item.carousel-item-prev.carousel-item-right ,
.carousel-inner > .carousel-item.active{
    transform:translate3d(0,0,0); -webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);; -moz-transform:translate3d(0,0,0); -o-transform:translate3d(0,0,0); top:0;
}

/*------------------------------- vertical carousel indicators ------------------------------*/
.carousel-indicators{
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    height:20px;
    right:10px; left:auto;
    width:auto;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
}
.carousel-indicators li{
    display:block; margin-bottom:5px; border:1px solid #00a199; 
    
}
.carousel-indicators li.active{
    margin-bottom:5px; background:#00a199;
    
}

.rate-bars{
    height:60px;
    background-color: white;
    
}

.progress{
    height:28px;

}

</style>