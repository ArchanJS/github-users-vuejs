<script>
import Card from './Card.vue';
import axios from 'axios';
export default {
    name: 'Home',
    components: {
        Card
    },
    data() {
        return {
            fetched: false,
            users: [],
            filtered: [],
            username: "",
            start: "Select start"
        }
    },
    watch: {
        username(currentValue) {
            this.filtered = this.users.filter((user) => user.login.includes(currentValue.toLowerCase()));
        },
        async start(currentValue) {
            try {
                console.log(currentValue);
                const {
                    data
                } = await axios.get(`https://api.github.com/users?since=${currentValue}`);
                this.users = data;
                this.filtered = data.filter((user) => user.login.includes(this.username.toLowerCase()));
            } catch (error) {
                console.log(error);
            }
        }
    },
    async mounted() {
        const {
            data
        } = await axios.get(`https://api.github.com/users?since=0`);
        console.log(data);
        this.fetched = true;
        this.users = data;
        this.filtered = data;
    }
}
</script>
<template>
<div class="page">
    <div class="search">
        <input type="text" name="username" id="username" placeholder="Search by username..." v-model="username">
        <select name="start" id="start" v-model="start">
            <option disabled value="Select start">Select a start</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
        </select>
    </div>
    <div class="container">
        <div class="card-div" v-if="fetched" v-for="user in filtered" :key="user.id">
            <Card :id="user.id" :username="user.login" :avatar="user.avatar_url" :url="user.html_url" />
        </div>
        <div class="conatiner" v-else>
            <h1>No data to show</h1>
        </div>
    </div>
</div>
</template>

<style>
* {
    overflow-x: hidden;
}

.page {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.search {
    width: 100vw;
    height: 15vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

#username {
    width: 300px;
    height: 25px;
    margin: 10px;
    padding: 5px;
}

#start {
    height: 30px;
    width: 150px;
}

.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
