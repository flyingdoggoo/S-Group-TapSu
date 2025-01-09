const cards = document.querySelectorAll('.card');
const paragraph = ["Bulbasaur là Pokémon hệ Grass và Poison với hạt giống trên lưng. Nó hấp thụ ánh sáng mặt trời để phát triển và là một trong những Pokémon khởi đầu ở vùng Kanto.",
    "Ivysaur là Pokémon hệ Grass và Poison, tiến hóa từ Bulbasaur. Bông hoa trên lưng của nó bắt đầu nở, báo hiệu sự trưởng thành và sắp sửa tiến hóa tiếp.",
    "Venusaur là Pokémon hệ Grass và Poison, tiến hóa từ Ivysaur. Bông hoa trên lưng của nó phát triển lớn hơn và phát ra mùi hương đặc biệt.",
    "Charmander là Pokémon hệ Fire, nổi bật với ngọn lửa trên đuôi. Nó mạnh mẽ và kiên cường, phát triển thành Charmeleon và sau đó là Charizard khi đạt đủ cấp độ.",
    "Charmeleon là Pokémon hệ Fire, tiến hóa từ Charmander. Nó trở nên mạnh mẽ hơn với sức nóng dữ dội và khả năng kiểm soát lửa tốt hơn khi chiến đấu.",
    "Charizard là Pokémon hệ Fire và Flying, tiến hóa từ Charmeleon. Nó có khả năng bay và phun lửa từ miệng, là một trong những Pokémon mạnh nhất ở vùng Kanto.",
]
function pokeDes(index){
    const card = cards[index]
    const img = card.querySelector('img')
    const description = card.querySelector('.description')
    let check = description.querySelector('.text')
    if(check){
        check.textContent = paragraph[index]
    }
    else
    {
        const p = document.createElement('p')
        p.classList.add('text')
        p.textContent = paragraph[index]
        description.appendChild(p)
    }

    if(description.style.display === 'none'){
        description.style.display = 'flex'
        img.style.display = 'none'
    }

    else
    {
        description.style.display = 'none'
        img.style.display = 'block'
    }
}

cards.forEach((card, index) => {
    card.addEventListener('click', () => pokeDes(index));
});