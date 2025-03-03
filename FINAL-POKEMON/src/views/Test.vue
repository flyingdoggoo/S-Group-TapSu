<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
const route = useRoute()
const pokemonId = route.params.id
const pokemonDetail = ref(null)
const evolutionChain = ref([])
const statColors = {
    hp: "#df2140",
    attack: "#ff994d",
    defense: "#eecd3d",
    "special-attack": "#85ddff",
    "special-defense": "#96da83",
    speed: "#fb94a8"
}
const statNames = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SPA",
    "special-defense": "SPD",
    speed: "SPE"
}
console.log(pokemonId)
async function fetchPokemonDetail() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        const data = await response.json()
        pokemonDetail.value = {
            id: data.id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            img: data.sprites.front_default,
            types: data.types.map(type => type.type.name),
            height: data.height,
            weight: data.weight,
            abilities: data.abilities.map(ability => ability.ability.name),
            stats: data.stats.map(stat => ({
                name: stat.stat.name,
                base_stat: stat.base_stat
            }))
        }
        fetchEvolutionChain(data.species.url)
        console.log(pokemonDetail.value.types)
    } catch (error) {
        console.error('Error fetching Pokémon details:', error)
    }
}
async function fetchEvolutionChain(speciesUrl) {
    try {
        // Lấy thông tin species để tìm evolution chain
        const speciesResponse = await fetch(speciesUrl)
        const speciesData = await speciesResponse.json()
        const evolutionUrl = speciesData.evolution_chain.url

        // Fetch dữ liệu evolution chain
        const evolutionResponse = await fetch(evolutionUrl)
        const evolutionData = await evolutionResponse.json()

        // Parse evolution chain
        evolutionChain.value = parseEvolutionChain(evolutionData.chain)
    } catch (error) {
        console.error('Error fetching evolution chain:', error)
    }
}

function parseEvolutionChain(chain) {
    let evolutionList = []
    let current = chain

    while (current) {
        evolutionList.push({
            name: current.species.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonId(current.species.url)}.png`
        })
        current = current.evolves_to.length > 0 ? current.evolves_to[0] : null
    }

    return evolutionList
}

function extractPokemonId(url) {
    return url.split("/")[url.split("/").length - 2]
}
onMounted(async () => {
    fetchPokemonDetail()
})
</script>

<template>
    <!-- <body> -->
        <button class="back" @click="$router.go(-1)">
            < Back
        </button>
        <div class="container">
            <div class="wrapper" v-if="pokemonDetail">
                <div class="imgDiv">
                    <img :src="pokemonDetail.img" alt="">
                </div>
                <div class="element">
                    <p v-for="type in pokemonDetail.types" :key="type" :class="type">{{ type }}</p>
                </div>
                <h2 class="header">Ivysaur</h2>
                <p class="describe">When the bulb on its back grows large, it appearsto lose the ability to stand on its hind legs.</p>
                <div class="heightWeight">
                    <div class="height">
                        <h3>Height</h3>
                        <p>{{ pokemonDetail.height }}</p>
                    </div>
                    <div class="weight">
                        <h3>Weight</h3>
                        <p>{{ pokemonDetail.weight }}</p>
                    </div>
                </div>
                <h3>Abilities</h3>
                <div class="abilities">
                    <p v-for="ability in pokemonDetail.abilities" :key="ability">{{ ability }}</p>
                </div>
                <h3>Stats</h3>
                <div class="stats">
                    <div class="stat" v-for="stat in pokemonDetail.stats"  :key="stat.name">
                        <div class="attribute" :style="{ backgroundColor: statColors[stat.name]}">
                            {{ statNames[stat.name] }}
                        </div>
                        <div>
                            {{ stat.base_stat }}
                        </div>
                    </div>
                </div>
                <!-- <h3>Evolution</h3>
                <div class="evolution-wrap">
                    <div class="img-wrap">
                        <p>Bulbasaur</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="">
                    </div>
                    <div class="divider">></div>
                    <div class="img-wrap">
                        <p>Ivysaur</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="">
                    </div>
                    <div class="divider">></div>
                    <div class="img-wrap">
                        <p>Venusaur</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="">
                    </div>
                </div> -->
                <h3>Evolution</h3>
                <div class="evolution-wrap">
                    <div v-for="evolution in evolutionChain" :key="evolution.name" class="img-wrap">
                        <p>{{ evolution.name }}</p>
                        <img :src="evolution.image" :alt="evolution.name">
                        <div v-if="evolution !== evolutionChain[evolutionChain.length - 1]" class="divider">></div>
                    </div>
                </div>
            </div>
        </div>
    <!-- </body> -->
</template>

<style scoped>
        body{
        /* width: 90%; */
            margin: 0 100px;
            font-family: Arial, Helvetica, sans-serif;
            color: rgb(46, 44, 107);
        }
        img{
            width: 200px;
            height: 200px;
            /* height: 100%; */
            /* object-fit: cover; */
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
        .fairy{
            background-color: rgba(189, 5, 147, 0.616);
        }
        .ground{
            background-color: rgba(62, 8, 8, 0.616);
        }
        .element{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }
        .element p
        {
            font-size: 12px;
            padding: 7px 5px;    
            border-radius: 3px;
            font-weight: bold;
        }
        .container{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .wrapper
        {
            width: 35%;
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .header{
            margin: 0;
        }
        .describe{
            margin: 5px 0;
        }
        .heightWeight{
            display: flex;
            justify-content: space-around;
        }
        .heightWeight div{
            display: flex;
            flex-direction: column;
        }
        .imgDiv{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .heightWeight div h3{
            margin: 5px 0;
        }
        .heightWeight div p{
            padding: 3px 50px;
            background-color: #f6f8fc;
            border-radius: 10px;
        }
        .abilities{
            display: flex;
            justify-content: space-around;
        }
        .abilities p{
            padding: 3px 30px;
            background-color: #f6f8fc;
            border-radius: 10px;
        }
        .stats{
            display: flex;
            justify-content: space-evenly;
        }
        .stat{
            display: flex;
            flex-direction: column;
            margin: 5px;
            padding: 5px;
            background-color: #f6f8fc;
            border-radius: 30px;
            box-shadow: #63636333 0 2px 8px;
        }
        .stat div{
            margin: 3px 0;
        }
        .attribute{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            font-size: 10px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-weight: bolder;
            color: white;
        }
        .evolution-wrap{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .img-wrap{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .divider{
            align-items: center;
            margin-right: 10px;
        }
        .img-wrap img{
            width: 95px;
            height: 95px;
        }
        .back{
            margin-top: 50px;
            padding: 8px 15px;
            border-radius: 15px;
            background-color: #f6f8fc;
            cursor: pointer;
        }
</style>