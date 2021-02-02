<template>
  <div class="signup col-lg-12 px-0">
 
<div class="col-lg-10 offset-lg-1 d-sm-flex mt-4 shadow-sm form-box px-0">

   <!--sidebar-->
<sidebar></sidebar>
 <!--sidebar ends-->

 <!--signup form-->
<div class="login col-lg-9 mt-4">



 <form action="" class="form-group col-lg-6 offset-lg-3 mt-4 ">
<p style="font-size:2rem;" class="text-center mt-4">Welcome to the home of style!</p>
<div class="forn-group d-flex">
  <input type="text" class="form-control mb-4" placeholder="First Name">
   <input type="text" class="form-control ml-2" placeholder="Last Name"></div>


   <input type="email" class="form-control mb-4" placeholder="Email-Address">
   <input type="password" class="form-control" placeholder="Create Password">
  
   
   <button style="background-color:#000000;color:white;" class="btn col-lg-10 offset-lg-1 mt-3" type="submit">Create your account</button>

   <div class="or d-flex"><hr><span>or</span><hr></div>

   <button style="background-color:#fa8a85;color:white;" class="btn col-lg-10 offset-lg-1 mb-2" >Sign up With Google</button>
   <button style="background-color:#fe6150;color:white;" class="btn col-lg-10 offset-lg-1">Sign up with Facebook</button>

   <p class="text-center mt-3">Already a member? <a href="/"> <span>Login</span></a> </p>
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
  }

  
</style>
