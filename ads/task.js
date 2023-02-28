const rotator1 = document.getElementsByClassName('rotator')[0]

function rotationHandler (rotator) {
    let rotatorElementList = Array.from(rotator.children)
    let lengthElementList = rotatorElementList.length - 1
    let activeElementIndex = rotatorElementList.findIndex(el => el.classList.contains('rotator__case_active'))
    let nextElementIndex = activeElementIndex == lengthElementList ? 0 : activeElementIndex + 1

    // Set next element active
    rotatorElementList[nextElementIndex].classList.toggle('rotator__case_active')

    // Set next element color
    color = rotatorElementList[nextElementIndex].getAttribute('data-color')
    rotatorElementList[nextElementIndex].style.color = color

    // Set next element change speed
    speed = rotatorElementList[nextElementIndex].getAttribute('data-speed')

    // Set current active element - disable
    rotatorElementList[activeElementIndex].classList.toggle('rotator__case_active')

    // Next interation start
    setTimeout(rotationHandler, speed, rotator1)
}

rotationHandler(rotator1)