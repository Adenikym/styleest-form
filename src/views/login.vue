<template>
  <div class="signup col-lg-12 px-0">
 
<div class="col-lg-10 offset-lg-1 d-sm-flex mt-4 shadow-sm form-box px-0">

   <!--sidebar-->

   <sidebar></sidebar>

 <!--sidebar ends-->

 <!--signup form-->
<div class="login col-lg-9 mt-4">



 <form action="" class="form-group col-lg-6 offset-lg-3 mt-4 ">
<p style="font-size:2rem;" class="text-center mt-4">Nice to have you back!</p>
   <input type="email" class="form-control mb-4" placeholder="Email-Address">
   <input type="password" class="form-control" placeholder="Password">
   <button style="background-color:#000000;color:white;" class="btn col-lg-10 offset-lg-1 mt-3" type="submit">LOGIN</button>

   <div class="or d-flex"><hr><span>or</span><hr></div>

   <button style="background-color:#fa8a85;color:white;" class="btn col-lg-10 offset-lg-1 mb-2" >Sign in With Google</button>
   <button style="background-color:#fe6150;color:white;" class="btn col-lg-10 offset-lg-1">Sign in with Facebook</button>

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
  }

  
</style>
