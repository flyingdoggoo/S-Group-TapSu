(async () => {
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
})()