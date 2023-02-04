<script>
    import Card from './Card.vue';
    import axios from 'axios';
    export default{
        name:'Home',
        components:{
            Card
        },
        data(){
            return {
                fetched:false,
                users:[]
            }
        },
        async mounted(){
            const {data}=await axios.get(`https://api.github.com/users?since=2019`);
            console.log(data);
            this.fetched=true;
            this.users=data;
        }
    }
</script>
<template>
    <div class="container" >
        <div class="card-div" v-if="fetched" v-for="user in users" :key="user.id">
            <Card :id="user.id" :username="user.login" :avatar="user.avatar_url" :url="user.html_url" />
        </div>
        <div class="conatiner" v-else>
            <h1>No data to show</h1>
        </div>
    </div>
</template>

<style>
*{
    overflow-x: hidden;
}
.container{
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>