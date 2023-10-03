import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import user from "./user.js"

async function loadUsers() {
    let response = await fetch('https://randomuser.me/api/?results=5')
    console.log("response",response);
    let users = await response.json()
    console.log("users",users);
    return users
    let {title,first,last} = users.results[0].name
    elemNome.innerText = title + " " + first + " " + last
    let elemFotinho = document.getElementById('fotinho')
    console.log('elemFotinho',elemFotinho);
    elemFotinho.src = users.results[0].picture.large
}

//loadUsers()

createApp({
    components: { user },
    data() {
        return {
            users: []
        }
    },
    async mounted() {
        console.log('mounted');
        let users = await loadUsers()
        this.users = users.results
    },
    template: `
        <div v-for="(user,index) in users">
            <div>
                <img :src="user.picture.large" />
            </div>
            <span>Nome:</span>
            <span>{{ user.name.first}}</span>
        <div>
    `
}).mount('#app')

