<template>
    <div class="width">
        <h3>Register New User</h3>
      <div class="text-left card_">
        <span id="msg" class=" form-control alert hide" ></span>
        <form @submit.prevent="registerForm" method="POST" id="registerForm" enctype = "multipart/form-data">
            <div class="d-inline-flex w_full ">
                <div class="mb-3  space_between w_full">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control w_full" name="username" id="username" >
                </div>
                <div class="mb-3 w_full">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control w_full"  name="password" id="password">
                </div>
            </div>

            <div class="d-inline-flex w_full">
                <div class="mb-3 space_between w_full">
                    <label for="Fullname" class="form-label">Fullname</label>
                    <input type="text" class="form-control w_full"  name="fullname" id="fullname" >
                </div>

                <div class="mb-3 w_full">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control w_full"  name="email" id="email" >
                </div>
            </div>

               <div class="mb-3 w_full">
                    <label for="location" class="form-label">Location</label>
                    <input type="text" class="form-control"  name="location" id="location" >
                </div>
            <div class="mb-3 w_full">
                    <label for="Biography" class="form-label">Biography</label>
                    <textarea  class="form-control"  name="biography" id="Biography" ></textarea>
            </div>
            <div class="form-group">
                <label for="photo" class="form-label">Upload Photo</label> <br>
                <input type="file" class="btn btn-light" id="photo"  name="photo" > <br/>
            </div>
            <button type="submit" class="btn_ btn-success" >Register</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        };
    },
    methods: {
        registerForm(){
            let registerForm = document.getElementById('registerForm');
            let form_data = new FormData(registerForm);
            let self = this;
            let alertcontainer =  document.querySelector('span#msg');
            fetch('/api/register', {
                method: 'POST',
                body: form_data,
                headers: {
                    "Accept": "application/json",
                    'X-CSRFToken': this.csrf_token
                }
              })
              .then((response)=>{
                  return response.json();
              })
              .then((data)=>{
                  
                console.log(data);
                alertcontainer.classList.add('alert-success');
                alertcontainer.classList.remove('alert-danger');
                alertcontainer.innerHTML= "User Registered Successfully";
                alertcontainer.classList.add('show');
              })
        },
         getCsrfToken() {
                let self = this;
                fetch('/api/csrf-token')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    self.csrf_token = data.csrf_token;
                })
            
        },
    
    },
    created() {
        this.getCsrfToken();
    },
};
</script>

<style>
.hide{
    display:none;
}
.show{
    display: block;
}
.width{
  width: 36rem;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}
.space_between{
    margin-right: 10px;
}
.w_full{
    width:100%;
}
.btn_{
    margin-top: 1em;
    padding:4px 24px;
    border: none;
    border-radius: 4px;
}
.card_{
    margin-top:2em;
    padding:1em;
    border-radius: 6px;
    box-shadow: 2px 2px 10px 4px  rgba(0,0,0,.1);
    border: 2px solid transparent;
}
h3{
    font-weight: bold;
}
@media screen and (max-width:800px){
  .width{
    width: 100%;
  }
  
}
</style>
