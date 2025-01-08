const modal = document.querySelector('#main')
const list = document.querySelector('.list')
function addContent(){
    const SKILLS = ['HTML', 'CSS', 'C++', 'C#', '.NET']
    // let DOMItems = ''
    // for(const items of SKILLS){
    //     const html = `<div class="item">${items}</div>`
    //     DOMItems += html
    // }
    // list.innerHTML = DOMItems
    for(const item of SKILLS){
        const newItem = document.createElement('div')
        newItem.classList.add('item')
        newItem.style.color = 'white'
        newItem.textContent = item
        list.appendChild(newItem)
    }
}
function deleteContent(){
    // list.innerHTML = ''
    // add.removeEventListener('click', addContent)
    const items = document.querySelector('.item')
    // for(const item of items){
        items.remove()
    // }
}

const add = document.querySelector('.add')
add.addEventListener('click', addContent)
const Delete = document.querySelector('.delete')
Delete.addEventListener('click', deleteContent)