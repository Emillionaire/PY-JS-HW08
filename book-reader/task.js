const bookControlls = Array.from(document.getElementsByClassName('book__control_font-size')[0].children)

// console.log(bookControlls)

// Start size button handler
bookControlls.forEach(element => {
    element.addEventListener('click', clickButtonSizeHandler);
})

function clickButtonSizeHandler (ev) {
    // console.log(ev.target)

    // Remove all active button
    bookControlls.forEach(el => el.classList.remove('font-size_active'))

    // Add active button
    ev.target.classList.add('font-size_active')

    // Change font size
    bookElement = document.getElementById('book')
    if (ev.target.classList.contains('font-size_small')) {
        bookElement.className = 'book book_fs-small'
    } else if (ev.target.classList.contains('font-size_big')) {
        bookElement.className = 'book book_fs-big'
    } else {
        bookElement.className = 'book'
    }

    // Disable link
    ev.preventDefault();
}