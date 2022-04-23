<template>
 <div class="parentcard">
    <section class="photo"> 
        <img v-bind:src=car.photo v-bind:alt=car.car_type >
    </section>
    <section class="content"> 
        <h3> {{car.year}} {{car.make}}</h3>
        <span>{{car.model}}</span>
        <p>{{car.description}}</p>
        <section class="inforow">
            <div><label>Color</label> <span>{{car.colour}}</span></div>
            <div><label>Body Type</label> <span>{{car.car_type}}</span></div>
        </section>
        <section class="inforow">
            <div><label>Price</label> <span>{{car.price}}</span></div>
            <div><label>Transmission</label> <span>{{car.transmission}}</span></div>
        </section>

        <section class="inforow">
        <button type="submit" class="btn_ btn-success" >Email Owner</button>
        <button type="submit" v-on:click="addfave" class="btn_ btn-success" >Like</button>
        </section>
        
    </section>
 </div>
</template>
<script>
export default {
    data() {
        return {
            car: {}
        };
    },
    methods: {
        addfave(){
            let self = this;
            fetch(`/api/cars/${this.$route.params.car_id}`,
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
                self.car = data
            });
          
            fetch(`/api/cars/${this.$route.params.car_id}/favourite`,
            {
                method: 'POST',
                body: JSON.stringify({
                    "car_id": self.car.id,
                    "user_id": self.car.user_id
                }),
                headers: {
                    'Accept': 'application/json',
                    'X-CSRFToken': this.csrf_token,
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            });
        },
        getCsrfToken() {
                let self = this;
                fetch('/api/csrf-token')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    self.csrf_token = data.csrf_token;
                })
            
        }
    },
    created() {
        this.getCsrfToken();
        let self = this;
        fetch(`/api/cars/${this.$route.params.car_id}`,
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
            self.car = data;
        });
        
    },
};
</script>

<style>
div.parentcard{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
    margin: 4em auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
section.content{
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: start;
    justify-content: start;
    padding: 1.5em;
}
section.content p{
    margin-top: 1em;
}
div.parentcard section.photo img{
   height:100%;
   width: 100%;
   object-fit:inherit;
}
h3{
    font-weight: bold;
    margin-bottom: 0;
}
section.inforow{
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
   width: 90%;
}
section.inforow img#like{
    fill: red;
}
section.inforow div label{
    margin-right: 2em;
}
div.parentcard button{
    align-self: end;
}
.btn_{
    margin-top: 1em;
    padding:4px 24px;
    border: none;
    border-radius: 4px;
    width: 35%;
}
</style>
