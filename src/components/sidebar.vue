<template>

<div class="col-lg-3 sidebar text-center d-sm-block d-none">
 <p class="picture-text" >
   Join in to upgrade your style
 </p>
 <p>Join the fun at no cost!</p>

 <button style="background-color:#fe6150;color:white;" class="px-1 py-1 start btn">Get Started</button>
</div>  

</template>

<script>
export default {
name:'sidebar'
}
</script>

<style>
.sidebar{
background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/fashion.jpg");
    background-size: cover;
    color:white;
  }

  .picture-text{
    margin-top:170px;
  }
</style>

