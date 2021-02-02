<template>
  <div class="signup col-lg-12 px-0 mt-2" style="font-family: 'Roboto', sans-serif;">

  
 
<div class="col-lg-10 offset-lg-1 col-12 offset-0 d-sm-flex shadow form-box px-0">

   <!--sidebar-->

   <sidebar></sidebar>

 <!--sidebar ends-->

 <!--signup form-->
<div class="login col-lg-6 col-md-6 mt-4" >

  <h1 style="color:#fe6150;font-size:1.8rem;" class="text-center" >Login</h1>  

 

 <form action="" class="form-group col-lg-10 offset-lg-1 col-12 mt-4 ">

 <p class="text-center"  style="color:grey">Login with credentials</p>

 <div  class="form-control mb-4 d-flex py-0 col-lg-12 ">
   <div class="icon px-1  col-md-1 col-sm-2 col-2 " style="border-right:1px solid lightgrey;">
     <img src="../assets/mail.svg" style="width:20px;"  class="mt-2 mr-3" alt="">
   </div>
   <input style="border:none;" class="ml-2" type="email"  placeholder="Email-Address">
 </div>
   
  <div  class="form-control mb-4 d-flex py-0 col-lg-12">
   <div class="icon px-1 col-md-1 col-sm-2 col-2 " style="border-right:1px solid lightgrey;">
     <img src="../assets/padlock.svg" style="width:20px;"  class="mt-2 mr-3" alt="">
   </div>
   <input style="border:none;" class="ml-2" type="password"  placeholder="Password">
 </div>

   <div class="extras d-flex ">

<div class="form-check mt-2 d-sm-block d-none  ">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Remember Me
  </label>
</div>

 <a href="#" class="offset-lg-4 "><p class="forget mt-2 ">Forgot password?</p></a>
   </div>
  
   <button style="background-color:#000000;color:white;" class="btn col-lg-12 mt-1" type="submit">LOGIN</button>

   <div class="or d-flex"><hr><span>or</span><hr></div>

   <p class="text-center" style="color:grey">Login with socials</p>

<div class="l-options d-flex col-lg-12 ">
   <button style="background-color:#ffffff;color:white;border:2px solid black;" class="btn col-lg-5 ml-4 " >
     <img src="../assets/google.svg" style="width:20px;height:20px;" alt="">
   </button>
   <button style="background-color:#ffffff;color:white;border:2px solid black;" class="btn col-lg-5 ml-4 ">
     <img src="../assets/facebook.svg" style="width:20px;height:20px;" alt="">
   </button>
   </div>

   <p class="text-center mt-3">Not a member yet? <a href="/register"> <span>Sign up</span></a> </p>
 </form>
 </div>

 
  </div>

  

   </div>
</template>

<script>

import sidebar from '../components/sidebar'

export default {
  name: 'login',
  components: {
   sidebar
   
  }
}
</script>

<style scoped>
  
  .form-box{
    height:550px;
     margin-top:35px;
  }

   @media only screen and (max-width:570px){
.form-box{
  margin-top:100px;
}

  }

  
</style>
