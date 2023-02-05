<script>
import axios from 'axios';
export default {
    name: 'Profile',
    data() {
        return {
            user: {},
            fetched: false
        }
    },
    async mounted() {
        try {
            const username = this.$route.params.username;
            const {
                data
            } = await axios.get(`https://api.github.com/users/${username}`);
            this.user = data;
            this.fetched = true;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<template>
<div class="profile-container">
    <div class="profile-card-container" v-if="fetched">
        <img :src="user.avatar_url" alt="user" class="profile-card-photo">
        <div class="profile-card-body">
            <h1 class="details">Username: {{ user.login }}</h1>
            <h1 class="details">ID: {{ user.id }}</h1>
            <h1 class="details">Repos: {{ user.public_repos }}</h1>
            <h1 class="details">Folllowers: {{ user.followers }}</h1>
            <h1 class="details">Following: {{ user.following }}</h1>
            <a :href="user.html_url" target="_blank" class="profile-card-link">View github</a>
        </div>
    </div>
    <h1 v-else>No data to show</h1>
</div>
</template>

<style>
* {
    margin: 0px;
    padding: 0px;
}

.profile-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-card-container {
    height: 200px;
    width: 350px;
    border: 2px solid rgb(48, 48, 48);
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4px;
}

.profile-card-photo {
    width: 30%;
    height: 100%;
}

.profile-card-body {
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    justify-content: space-evenly;
    align-items: center;
    color: aqua;
}

.profile-card-link {
    text-decoration: none;
    background-color: rgb(48, 48, 48);
    width: 80px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: aqua;
    border: 2px solid black;
}

.profile-card-link:hover {
    background-color: aqua;
    color: black;
    border: 2px solid black;
}
</style>
