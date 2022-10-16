const btn = document.querySelector('#btn')
let library = []

const addBook = (ev) => {
    ev.preventDefault()
    let Book = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        select: document.querySelector('#select').value,
    }
    const dbtn = document.createElement('button')
    const change = document.createElement('button')
    dbtn.type = 'button'
    change.type = 'button'
    dbtn.className = 'delete'
    change.className = 'change'
    dbtn.textContent = "Delete"
    change.textContent = "Change to Read!"
    library.push(Book)

    let msg = document.querySelector('#msg')
    let pre = document.createElement('pre')
    let title = library[library.length-1].title
    let author = library[library.length-1].author
    let select = library[library.length-1].select
    if (title.length == 0 || author.length == 0) {
        alert("Please fill all forms")
    }else {
        pre.textContent += '\n' + `${title} ${author} ${select}`
        pre.appendChild(dbtn)
        pre.appendChild(change)
        msg.appendChild(pre)
        dbtn.addEventListener('click', () => {
            dbtn.parentElement.remove()
        })
        change.addEventListener('click', () => {
            if (select === "Not read") {
                select = "Read"
                pre.textContent = '\n' + `${title} ${author} ${select}`
                pre.appendChild(dbtn)
                pre.appendChild(change)
            }else if (select === "Read") {
                select = "Not read"
                pre.textContent = '\n' + `${title} ${author} ${select}`
                pre.appendChild(dbtn)
                pre.appendChild(change)
            }
        })
        document.querySelector('form').reset()
    }
}

btn.addEventListener('click', addBook)