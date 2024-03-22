let bookName = document.getElementById("title")
let bookAuthor = document.getElementById("author")
let bookYear = document.getElementById("year")
let table = document.getElementById("table")
let btn = document.getElementById("btn")
let arr = []

btn.addEventListener("click", addBook)
window.addEventListener("load", getLocalStorage)
window.addEventListener("keypress", addBookWithEnter)
function addBook() {
    let bookNameValue = bookName.value
    let bookAuthorValue = bookAuthor.value
    let bookYearValue = bookYear.value
    if (bookNameValue.trim() == "" || bookYearValue.trim() == "" || bookAuthorValue.trim() == "") {
        alert("please valid data!")
    } else {
        let bookInfo = {
            name: bookNameValue,
            author: bookAuthorValue,
            year: bookYearValue
        }
        arr.push(bookInfo)
        setLocalStorage(arr)
        addToLibrary(bookInfo.name, bookInfo.author, bookInfo.year)
        clear()
    }
}
function setLocalStorage(item) {
    localStorage.setItem("information", JSON.stringify(item))
}
function getLocalStorage() {

    let allInfo = JSON.parse(localStorage.getItem("information"))
    console.log(allInfo);
    allInfo.forEach(item => {
        addToLibrary(item.name, item.author, item.year)
        arr.push(item)
    });
}
function addToLibrary(n, a, y) {
    table.insertAdjacentHTML("beforeend", `<tr>
    <th>${n}</th>
    <th>${a}</th>
    <th>${y}</th>
    </tr>`)

}
function clear() {
    bookName.value = ""
    bookYear.value = ""
    bookAuthor.value = ""
}
function addBookWithEnter(e) {
    if (e.key == "Enter") {

        addBook()

    }
}