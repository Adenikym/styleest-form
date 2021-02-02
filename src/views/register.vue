<template>
  <div class="signup col-lg-12 px-0" style="font-family: 'Roboto', sans-serif;">
   

<div class="col-lg-10 offset-lg-1 col-12 offset-0 d-sm-flex  shadow  form-box px-0">

   <!--sidebar-->
<sidebar></sidebar>
 <!--sidebar ends-->

 <!--signup form-->
<div class="login col-lg-6 mt-4">

<h1 style="color:#fe6150;font-size:1.8rem;" class="text-center " >Create your account</h1>  

 <form action="" class="form-group col-lg-10 offset-lg-1 mt-4 ">

<div class="form-group d-flex">
  <input type="text" class="form-control mb-4" placeholder="First Name">
   <input type="text" class="form-control ml-2" placeholder="Last Name"></div>


  <div  class="form-control mb-4 d-flex py-0 col-lg-12">
   <div class="icon px-1 col-md-1 col-sm-2 col-2  " style="border-right:1px solid lightgrey;">
     <img src="../assets/mail.svg" style="width:20px;"  class="mt-2 mr-3" alt="">
   </div>
   <input style="border:none;" class="ml-2 " type="email"  placeholder="Email-Address">
 </div>
   
  <div  class="form-control mb-4 d-flex py-0 col-lg-12">
   <div class="icon px-1 col-md-1 col-sm-2 col-2 " style="border-right:1px solid lightgrey;">
     <img src="../assets/padlock.svg" style="width:20px;"  class="mt-2 mr-3" alt="">
   </div>
   <input style="border:none;" class="ml-2" type="password"  placeholder="Password">
 </div>

  
   
   <button style="background-color:#000000;color:white;" class="btn col-lg-12  mt-3" type="submit">Sign Up</button>

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

<p class="mt-sm-2 mt-4 text-center ">By clicking on sign up, you agree with our <a href="#"> terms of use</a> and <a href="#"> privacy policy</a>.</p>

   <p class="text-center mt-1">Already a member? <a href="/"> <span>Login</span></a> </p>
 </form>
 </div>
  </div>

  

   </div>
</template>

<script>
import sidebar from '../components/sidebar'
export default {
  components:{
    sidebar
  }
}
</script>


<style scoped>
 

  .form-box{
    height:550px;
    margin-top:35px ;
  }

  @media only screen and (max-width:570px){
.form-box{
  margin-top:100px;
  height: 100vh;
}

  }

  
</style>
