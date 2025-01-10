const paragraph = ["Bulbasaur là Pokémon hệ Grass và Poison với hạt giống trên lưng. Nó hấp thụ ánh sáng mặt trời để phát triển và là một trong những Pokémon khởi đầu ở vùng Kanto.",
    "Ivysaur là Pokémon hệ Grass và Poison, tiến hóa từ Bulbasaur. Bông hoa trên lưng của nó bắt đầu nở, báo hiệu sự trưởng thành và sắp sửa tiến hóa tiếp.",
    "Venusaur là Pokémon hệ Grass và Poison, tiến hóa từ Ivysaur. Bông hoa trên lưng của nó phát triển lớn hơn và phát ra mùi hương đặc biệt.",
    "Charmander là Pokémon hệ Fire, nổi bật với ngọn lửa trên đuôi. Nó mạnh mẽ và kiên cường, phát triển thành Charmeleon và sau đó là Charizard khi đạt đủ cấp độ.",
    "Charmeleon là Pokémon hệ Fire, tiến hóa từ Charmander. Nó trở nên mạnh mẽ hơn với sức nóng dữ dội và khả năng kiểm soát lửa tốt hơn khi chiến đấu.",
    "Charizard là Pokémon hệ Fire và Flying, tiến hóa từ Charmeleon. Nó có khả năng bay và phun lửa từ miệng, là một trong những Pokémon mạnh nhất ở vùng Kanto.",
]
const pokeName = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard"]
const pokeElement = [["Grass", "Poison"], ["Grass", "Poison"], ["Grass", "Poison"], ["Fire"], ["Fire"], ["Fire", "Flying"]]
function render(){
    const container2 = document.querySelector('#container2');
    container2.innerHTML = ''
    for(let i = 0; i < pokeName.length; i++){
        const card = document.createElement('a')
        const span = document.createElement('span')
        const img = document.createElement('img')
        const description = document.createElement('div')
        const h3 = document.createElement('h3')
        const element = document.createElement('div')
        const p = document.createElement('p')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        
        description.classList.add('description')
        element.classList.add('element')
        p.classList.add('text')
        p1.classList.add(pokeElement[i][0])
        p2.classList.add(pokeElement[i][1])
        card.classList.add('card')

        card.href = '#'
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
        span.textContent = "#" + (i + 1)
        h3.textContent = pokeName[i]
        p.textContent = paragraph[i]
        p1.textContent = pokeElement[i][0]
        p2.textContent = pokeElement[i][1]
        p1.style.fontWeight = 'bold';
        p2.style.fontWeight = 'bold';

        description.appendChild(p)
        element.appendChild(p1)
        element.appendChild(p2)
        card.appendChild(span)
        card.appendChild(img)
        card.appendChild(description)
        card.appendChild(element)
        container2.appendChild(card);

        card.addEventListener('mouseenter', () => pokeDes(i));
    }   
}
function pokeDes(index) {
    const container2 = document.querySelector('#container2');
    const cards = container2.querySelectorAll('.card');
    const card = cards[index];

    const img = card.querySelector('img');
    const description = card.querySelector('.description');

    let check = description.querySelector('.text');
    if (check) {
        check.textContent = paragraph[index];
    }
    else
    {
        const p = document.createElement('p');
        p.classList.add('text');
        p.textContent = paragraph[index];
        description.appendChild(p);
    }

    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'flex';
        img.style.display = 'none';
    } else {
        description.style.display = 'none';
        img.style.display = 'block';
    }
}

document.getElementById('renderButton').addEventListener('click', render);
