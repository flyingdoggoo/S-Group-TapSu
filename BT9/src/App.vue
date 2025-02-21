<script setup>
import {ref, onMounted} from 'vue'
    const isVisibleContainer = ref(false)
    const isVisibleLoading = ref(true)
    const pokeList = ref([])
    const searchTerm = ref('')
    const fetchData = (async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await response.json()
        const pokeDetail = []
        await new Promise(resolve => setTimeout(resolve, 1000))
        for(let i = 0; i < data.results.length; i++){
            const item = data.results[i]
            const detailResponse = await fetch(item.url)
            const detailData = await detailResponse.json()
            pokeDetail.push(
                {
                    id: i + 1,
                    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
                    url: item.url,
                    img: detailData.sprites.front_default,
                    types: detailData.types.map(type => type.type.name)
                }
            );
        }
        pokeList.value = pokeDetail
        console.log(pokeList.value)
        isVisibleContainer.value = true
        isVisibleLoading.value = false
    })()
    onMounted(fetchData)
    const filteredPokemon = () => {
    return pokeList.value.filter(poke => poke.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    };
    console.log(filteredPokemon())
</script>

<template>
  
<body>
    <div v-if="isVisibleLoading" class="loading">Getting data from Pokédex...</div>
    <div v-if="isVisibleContainer" class="container">
        <div id="header">Pokemon API</div>
        <div id="container1">
            <input type="text" v-model="searchTerm" id="search" placeholder="Search some Pokemon...">
        </div>
        <div id="container2">
            <div v-for="poke in filteredPokemon()" :key="poke" class="card">
                <span>#{{ poke.id }}</span>
                <img :src="poke.img" alt="">
                <h3>{{ poke.name }}</h3>
                <div class="element">
                    <p v-for="type in poke.types" :key="type" :class="type">{{ type }}</p>
                </div>
            </div>
        </div>
    </div>
</body>
</template>

<style>
body{
    /* width: 90%; */
    margin: 0 100px;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(46, 44, 107);
}
.loading {
    font-size: 24px;
    text-align: center;
    color: gray;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#header{
    font-size: 50px;
    margin: 40px 0;
    text-align: center;
}
#container1{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 40px 0;
    gap: 20px;
}
input, button{
    padding: 25px;
    width: 40%;
    border: 2px solid #ddd;
    border-radius: 40px;
    margin-top: 40px;
    font-size: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
button{
    width: 10%;
    padding: 10px;
    border-radius: 20px;
    background-color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}


#container2{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    gap: 30px;
}
#container2 .card {
    background-color: white;
    padding: 10px;
    margin: 9px;
    height: 350px;
    width: 200px;
    font-size: 20px;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
/* #container2 .card:nth-child(n+5) {
    display: none;
} */
#container2 .card img{
    width: 100%;
}
#container2 .card p{
    display: inline-block;
    border-radius: 10px;
    padding: 8px 7px;
    font-size: 15px;
    margin: 0;
}
#container2 .card h3{
    /* margin-top: 40px; */
    margin: 0 5px;
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    text-decoration: none;
    color: rgb(41, 36, 36);
}
.card .element{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    gap: 10px;
}
.card .description {
    width: 180.8px;
    height: 180.8px;
    display: none;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border: solid 1px #5c565665;
    pointer-events: auto;
}
.grass{
    background-color: rgb(33, 218, 33);
}
.poison{
    background-color: rgb(168, 10, 168);
}
.fire{
    background-color: rgb(246, 66, 66);
}
.flying{
    background-color: rgba(146, 13, 169, 0.679);
}
.water{
    background-color: rgba(7, 7, 235, 0.525);
}
.bug{
    background-color: rgba(14, 228, 82, 0.616);
}
.normal{
    background-color: rgba(145, 145, 145, 0.616);
}
.rock{
    background-color: rgba(145, 145, 145, 0.616);
}
.electric{
    background-color: rgba(255, 255, 0, 0.616);
}
.dragon{
    background-color: rgba(0, 0, 0, 0.616);
}
.psychic{
    background-color: rgba(255, 0, 0, 0.616);
}
</style>
