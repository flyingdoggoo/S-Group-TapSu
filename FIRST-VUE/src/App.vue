<script setup>
import { onMounted, reactive, ref } from 'vue';
onMounted(async () => {
    const head = document.querySelector('#header');
    const container1 = document.querySelector('#container1');
    const container2 = document.querySelector('#container2');
    const loading = document.createElement('div');

    head.style.display = 'none'
    container1.style.display = 'none'
    container2.style.display = 'none'
    loading.textContent = 'Getting data from PokéDex...';
    loading.style.fontSize = '24px';
    loading.style.textAlign = 'center';
    loading.style.color = 'gray'
    loading.style.position = 'fixed';
    loading.style.top = '50%';
    loading.style.left = '50%';
    loading.style.transform = 'translate(-50%, -50%)'
    document.body.appendChild(loading);


    const raw = await fetch('https://pokeapi.co/api/v2/pokemon')
    console.log(raw)
    const data = await raw.json()

    await new Promise(resolve => setTimeout(resolve, 1000));

    head.style.display = 'block'
    container1.style.display = 'flex'
    container2.style.display = 'grid'
    loading.style.display = 'none'

    let pokes = data.results

    async function RenderFilteredData(data){
        container2.innerHTML = ''
        for (let i = 0; i < data.length; i++) {
            
            const item = data[i];
            NAME = item.name
            URL = item.url
            const raw = await fetch(URL)
            const detail = await raw.json()
            IMG = detail.sprites.other.home.front_default
            types = detail.types.map((type) => type.type.name)
            console.log(NAME, URL, IMG, types)

            const card = document.createElement('a')
            const span = document.createElement('span')
            const img = document.createElement('img')
            const h3 = document.createElement('h3')
            const element = document.createElement('div')
            const p = document.createElement('p')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')

            element.classList.add('element')
            p.classList.add('text')
            p1.classList.add(types[0])
            p2.classList.add(types[1])
            card.classList.add('card')

            card.href = '#'
            img.src = IMG
            span.textContent = "#" + (i + 1)
            NAME = NAME[0].toUpperCase() + NAME.substr(1, NAME.length);
            h3.textContent = NAME
            p1.textContent = types[0]
            p2.textContent = types[1]
            p1.style.fontWeight = 'bold';
            p2.style.fontWeight = 'bold';
            card.setAttribute('data-name', NAME.toLowerCase());

            element.appendChild(p1)
            element.appendChild(p2)
            card.appendChild(span)
            card.appendChild(img)
            card.appendChild(h3)
            card.appendChild(element)
            container2.appendChild(card);
        }
    }
    RenderFilteredData(pokes)
    const search = document.querySelector('#search')
    search.addEventListener('input', () => {
        const searchTerm = search.value.toLowerCase();
        document.querySelectorAll('.card').forEach(card => {
            const name = card.getAttribute('data-name');
            if (name.includes(searchTerm)) {
                card.style.display = 'flex';
            }
            else if(searchTerm == '') {
                RenderFilteredData(pokes)
            }
            else {
                card.style.display = 'none';
            }
        });
    });
})
</script>

<template>
<body>
  <div id="header">Pokemon API</div>
    <div id="container1">
        <input type="text" id="search" placeholder="Search some Pokemon...">
    </div>
    <div id="container2">        
    </div>
</body>
</template>

<style>
body{
    margin: 0 100px;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(46, 44, 107);
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
#container2 .card:nth-child(n+5) {
    display: none;
}
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
</style>
