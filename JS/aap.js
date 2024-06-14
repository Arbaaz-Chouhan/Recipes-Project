const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw Error(
        `please  double ckeck class names,there is no ${selector}
       class`
    )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('clik', () => {
    links.classList.toggle('show-links')
})


