import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";





const Signup = () => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {

    const {name,email, password, reEnterPass} = data;

    console.log(email, password, reEnterPass)
    if(password === reEnterPass){
      if(password.length >= 6){
        
      }else{
      
      }
    }else{
     
    }


  };
  
    return (

    
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div class="card card0 border-0">
          <div class="row d-flex">
              <div class="col-lg-6">
          <div class="card1 pb-5">
              <div class="row"> <img  src="https://i.ibb.co/FHDXktM/kisspng-health-care-public-health-medicine-hospital-cupped-hands-5b5bed5c876c37-10582344153275119655.png" class="logo"/> </div>
              <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" class="image"/> </div>
          </div>
      </div>
      <div class="col-lg-6">
          <div class="card2 card border-0 px-4 py-5">
             
             
              <div class="row px-3"> <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>

                  </label> <input  class="mb-4" type="text" {...register("email")} required name="email" placeholder="Enter a valid email address"/> </div>
              <div class="row px-3"> <label class="mb-1">

                      <h6 class="mb-0 text-sm ">Password</h6>
                  </label> <input class="mb-5" type="password" {...register("password")} required name="password" placeholder="Enter password"/> </div>
             
              <div class="row mb-3 px-3"> <button type="submit" class="card-button text-center ">Sign Up</button> </div>
              <div class="row px-3 mb-4">
                  <div class="line"></div> <small class="or text-center">Or</small>
                  <div class="line"></div>
              </div>
              <button   class=" card-button mb-2 me-2">Sign In With Google</button>
              <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account?<Link to="/login"><a class="text-danger ">Login</a></Link> </small> </div>
          </div>
      </div>
  </div>
  
</div>
</div>
</form>
  </div>


        
    );
};

export default Signup;