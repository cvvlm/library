const submit = document.querySelector('#submit')
const tablica = document.querySelector('.tablica')
ar = []
function addBook(b, a, s) {
    function BookObject(book, author, selection) {
        this.book = book
        this.author = author
        this.selection = selection
    }
    return new BookObject(b, a, s)
    
}
function addToArr() {
    submit.addEventListener('click', () => {
        ar.push(addBook(document.querySelector('#book').value, document.querySelector('#author').value, document.querySelector('#select').value))
           
        tablica.innerHTML += `
            <tr>
                <td>${ar[ar.length - 1].book}</td>
                <td>${ar[ar.length - 1].author}</td>
                <td>${ar[ar.length - 1].selection}</td>
            </tr>
        `
    })
}
addToArr()
