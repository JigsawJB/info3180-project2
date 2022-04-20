<template>
    <section class="formcombo">
    <h2>Login to your account</h2>
        <form @submit.prevent="login" Mmethod="POST" id="loginForm">
            <div class="form-group">
                <label for="username">Username</label><br>
                <input type="text" class="form-control" id="username"  name="username" >
            </div>
            <div class="form-group">
                <label for="pasword">Password</label><br>
                <input type="password" class="form-control" id="password"  name="password" >
            </div>
            <button type="submit" class="btn btn-success mb-2">Login</button>
        </form>
    </section>
</template>
<script>
export default {
    data() {
        return {
            message: ''
        };
    },
    methods: {
        login(){
            let loginForm = document.getElementById('loginForm');
            let form_data = new FormData(loginForm);
            let self = this;
            fetch('/api/auth/login', {
                method: 'POST',
                body: form_data,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
              })
              .then((response)=>{
                  return response
              })
              .then((data)=>{
                  return data
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
form#loginForm div{
    margin-bottom: 1em;;
}
form#loginForm input{
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
}
form#loginForm button{
    width: 100%;
}
section.formcombo h2{
    text-align: center;
    margin-bottom: 1em;
    font-weight: bold;
}
section.formcombo{
    display: flex;
    flex-flow: column wrap;
    width: 28%;
    margin-top: 22vh;
    margin-left: 35vw;
}
form#loginForm{
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    padding: 2em 1em;
}
</style>
