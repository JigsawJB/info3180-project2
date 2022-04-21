<template>

<div id="carsparent">
    <div v-for= "car in cars" class="card" style="width: 18rem;">
        <img class="card-img-top" v-bind:src= car.photo v-bind:alt=car.car_type>
        <div class="card-body">
            <h5 class="card-title">{{ car.id }}</h5>
            <p class="card-text">{{car.description}}</p>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            cars: [],
            searchTerm: ''
        };
    },
    methods: {
        searchCar(){
            let registerForm = document.getElementById('registerForm');
            let form_data = new FormData(registerForm);
            let self = this;
            let alertcontainer =  document.querySelector('span#msg');
            fetch('/api/register', {
                method: 'GET',
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
        let self = this;
        fetch('/api/cars',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            self.cars = data;
        });
    },
};
</script>

<style>
div#carsparent{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2em;
    width: 100%;
    margin-top: 2em;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
}
</style>
