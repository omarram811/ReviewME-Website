const getElement = (selector) => { //either nav-links or nav-element or whatever element to select
  
  const element = document.querySelector(selector);

  if (element) return element
  throw Error(`Please double check your class names, there is no ${selector} class`)
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
}) //listen to click events and show the corresponding links accordingly

const date = getElement('#date') //write the date element dynamically (not written hard-codedly)
const currentYear = new Date().getFullYear()
date.textContent = currentYear

