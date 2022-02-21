const app = document.querySelectorAll('.app')
const lists = document.querySelectorAll('.list')
const button = document.querySelector('.plusBoard')

function addTask() {
    const btn = document.querySelector('.add_btn')
    const addBtn = document.querySelector('.add_item-btn')
    const cancelBtn = document.querySelector('.cancel_item-btn')
    const textarea = document.querySelector('.textarea')
    const form = document.querySelector('.form')

    let value




    btn.addEventListener('click', () => {
        form.style.display = 'block'
        btn.style.display = 'none'
        addBtn.style.display = 'none'

        textarea.addEventListener('input', e => {
            value = e.target.value

            if (value) {
                addBtn.style.display = 'block'
            }
            else {
                addBtn.style.display = 'none'
            }
        })
    })


    cancelBtn.addEventListener('click', () => {
        textarea.value = ''
        value = ''
        form.style.display = 'none'
        btn.style.display = 'block'
    })
    addBtn.addEventListener('click', () => {
        const newItem = document.createElement('div')
        newItem.classList.add('list_item')
        newItem.draggable = true
        newItem.textContent = value
        lists[0].append(newItem)


        textarea.value = ''
        value = ''
        form.style.display = 'none'
        btn.style.display = 'block'

        dageNdrop()


    })
}

addTask()

function addBoard() {
    const boards = document.querySelector('.boards')
    const board = document.createElement('div')
    board.classList.add('boards-item')
    board.innerHTML = `
    <span contenteditable="true" class="title">Введіть назву</span>
    <div class="list"><div class="add_btn"><span>+</span>Додати картку</div></div>
        `
    boards.append(board)
    changeTitle()

    addTask()
}

button.addEventListener('click', addBoard)

function changeTitle() {
    const titles = document.querySelector('title')
    titles.addEventListener('click', e => { e.target.textContent = '' })
    // titles.forEach(title => {
    //     title.addEventListener('click', e => { e.target.textContent = '' })

    // });

}
changeTitle()





let dragetItem = null
function dageNdrop() {
    const listItems = document.querySelectorAll('.list_item')
    const lists = document.querySelectorAll('.list')

    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i]
        item.addEventListener('dragstart', () => {
            setTimeout(() => {
                item.style.display = 'none'
            }, 0)
        })
        item.addEventListener('dragend', () => {
            setTimeout(() => {
                item.style.display = 'block'
                dragetItem = null
            }, 0)
        })
        item.addEventListener('dblclick', () => {
            item.remove()
        }, 0)

        for (let j = 0; j < listItems.length; j++) {
            const list = listItems[j]
            list.addEventListener('dragover', e => e.preventDefault())
            list.addEventListener('dragenter', function (e) {
                e.preventDefault()
                this.style.backgroundColor = 'rgba(0,0,0, .3)'

            })
            list.addEventListener('dragleave', function (e) {

                this.style.backgroundColor = 'rgba(0,0,0, .0)'

            })
            list.addEventListener('drop', function (e) {

                this.style.backgroundColor = 'rgba(0,0,0, .0)'
                this.append(dragetItem)

            })

        }



    }

}
dageNdrop()