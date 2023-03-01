// Found all controllers marked as 'book__control'
const controllersList = document.getElementsByClassName('book__control')
// Set all used class
const classArray = [['book_fs-small', , 'book_fs-big'], ['book_color-black', 'book_color-gray', 'book_color-whitesmoke'], ['book_bg-black', 'book_bg-gray', 'book_bg-white']]
// Main manipulated object
const book = document.getElementById('book')

// Start click handler for all element of all controllers
function addListener (controller) {
    c = controller.getElementsByTagName('a')
    // console.log(c)
    Array.from(c).forEach(el => el.addEventListener('click', clickHandler))
}

// Universal click handler
function clickHandler (ev) {
    // Find controller which one
    currentController = ev.target.parentElement

    // Find element of controller
    currentControllerElementList = Array.from(ev.target.parentElement.getElementsByTagName('a'))

    // Find index clicked button in controller
    currentElementIndex = currentControllerElementList.findIndex(el => el == ev.target)

    // Find index controller click button among all controllers
    currentControllerIndex = Array.from(controllersList).findIndex(el => el == currentController)


    // Active button switcher
    mainPartActiveClass = currentControllerElementList[currentElementIndex].className.split(' ')[0]
    fullActiveClass = mainPartActiveClass + '_active'
    currentControllerElementList.forEach(el => el.classList.remove(fullActiveClass)) // Disable all active button
    currentControllerElementList[currentElementIndex].classList.add(fullActiveClass) // Activate current button
    
    // Class cleaner
    classArray[currentControllerIndex].forEach(el => book.classList.remove(el))

    // Class giver
    book.classList.add(classArray[currentControllerIndex][currentElementIndex])

    // Disable link
    ev.preventDefault();
}

// Script activator
Array.from(controllersList).forEach(el => addListener(el))







// const bookControlls = Array.from(document.getElementsByClassName('book__control_font-size')[0].children)

// // console.log(bookControlls)

// // Start size button handler
// bookControlls.forEach(element => {
//     element.addEventListener('click', clickButtonSizeHandler);
// })

// function clickButtonSizeHandler (ev) {
//     // console.log(ev.target)

//     // Remove all active button
//     bookControlls.forEach(el => el.classList.remove('font-size_active'))

//     // Add active button
//     ev.target.classList.add('font-size_active')

//     // Change font size
//     bookElement = document.getElementById('book')
//     if (ev.target.classList.contains('font-size_small')) {
//         bookElement.className = 'book book_fs-small'
//     } else if (ev.target.classList.contains('font-size_big')) {
//         bookElement.className = 'book book_fs-big'
//     } else {
//         bookElement.className = 'book'
//     }

//     // Disable link
//     ev.preventDefault();
// }