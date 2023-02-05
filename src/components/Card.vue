<script>
export default{
    name:'Card',
    props:{
        id:Number,
        username:String,
        avatar:String,
        url:String,
    }
}
</script>

<template>
    <div class="card-container">
            <img :src="avatar" alt="user"  class="card-photo">
        <div class="card-body">
            <h1 class="details">Username: {{ username }}</h1>
            <h1 class="details">ID: {{ id }}</h1>
            <router-link :to="{name:'Profile',params:{username:username}}" class="card-link">Check profile</router-link>
        </div>
    </div>
</template>

<style>
*{
    margin: 0px;
    padding: 0px;
}
.card-container{
    height: 120px;
    width: 350px;
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4px;
}
.card-photo{
    width: 30%;
    height: 100%;
}
.card-body{
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    justify-content: space-evenly;
    align-items: center;
}
.card-link{
    text-decoration: none;
    background-color: black;
    width: 80px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: aqua;
    border: 2px solid black;
}
.card-link:hover{
    background-color: aqua;
    color: black;
    border: 2px solid black;
}
</style>