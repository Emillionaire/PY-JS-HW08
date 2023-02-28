const reveals = Array.from(document.getElementsByClassName('reveal'))

window.addEventListener('scroll', () => {
    reveals.forEach(element => {
        const { top, bottom } = element.getBoundingClientRect()
        if (bottom > 0 && top < window.innerHeight) {
            console.log('ACTIVE block: ' + reveals.findIndex(el => element == el))
            element.classList.add('reveal_active')
        } else {
            console.log('DISABLE block: ' + reveals.findIndex(el => element == el))
            element.classList.remove('reveal_active')
        }
    })
})

// window.addEventListener('scroll', isVisible)

// function isVisible () {
//     reveals.forEach(element => {
//         const { top, bottom } = element.getBoundingClientRect()
//         if (bottom > 0 && top < window.innerHeight) {
//             console.log('ACTIVE block: ' + reveals.findIndex(el => element == el))
//             element.classList.add('reveal_active')
//         } else {
//             console.log('DISABLE block: ' + reveals.findIndex(el => element == el))
//             element.classList.remove('reveal_active')
//         }
//     }) 
// }

