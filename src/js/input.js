confirmBtn.addEventListener("click",(event)=>{
    event.preventDefault();

    dialog.close();
});

dialog.addEventListener("close", (event) => {
    const bookObj = JSON.parse(dialog.returnValue);
    
    // Convert plain object to a Book instance
    const book = new Book(bookObj.title, bookObj.author, bookObj.pages, bookObj.readStatus);
    
    addBookToLibrary(book);
    loopLibrary();
});
