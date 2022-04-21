<template>
   <div id="rowcontentimg">
    <section class="content">

      <section id="contentgrouping">
          <h1>Buy And Sell Cars Online</h1>
          <p>United Auto Sales provides the fastest, easiest and most user friendly way to buy or sell cars onine. Find a 
          Great Price on the Vehicle You Want</p>
          <section class="btngrp">
              <button  class="btn btn-primary" > <RouterLink to="/register" class="nav-link ">Register</RouterLink> </button>
              <button  class="btn btn-success" > <RouterLink to="/login" class="nav-link ">Login</RouterLink></button>
          </section>
      </section>
    
    </section>
  


    <section class="image">
          <img src="../assets/car.jpg"/>
    </section>
   </div>
</template>



<script>
export default {
    data() {
        return {
            message: "Hello World! This is Group 19 final project"
        };
    },
    methods : {
    }
}
</script>


<style>
/* Add any component specific styles here */
div#rowcontentimg {
  display: flex;
  flex-flow: row wrap;
  width:100%;
  height:50%;
  margin:0;
}
section.image{
  width: 50%;
  height: 50%;
}
section.image img{
  width: 100%;
  height: 75vh;
  object-fit: cover;
}
section#contentgrouping{
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 50%;
}
section#contentgrouping p{
  color: #949599;
}
section#contentgrouping h1{
  font-weight: bold;
}
section.content{
  display: flex;
  flex-flow: column wrap;
  width:50%;
  justify-content: center;
  align-items: center;
}
section.btngrp button{
  width: 35%;
  margin-right: 5%;
  padding:0;
  border-radius: .5em .5em;
}
section.btngrp button a{
  color: #fff !important;
}
</style>
