const buttons = document.querySelectorAll('.arrows')
const left = buttons[0]
const right = buttons[1]

// let currentIndex = 1
// let sliderX = 0
// let totalWidth = 6 * 560

const sliderStyle = document.body.style

// left.onclick = function () {

//   sliderX = sliderX + 560

//   document.body.style.setProperty('--sliderX', sliderX + 'px')
  
//   currentIndex--
// }

// right.onclick = function () {

//   const currentWidth = currentIndex * 560
//   const currentSliderWidth = -totalWidth + (totalWidth - currentWidth)

//   sliderX = -totalWidth + (totalWidth - currentWidth)

//   document.body.style.setProperty('--sliderX', currentSliderWidth + 'px')

//     currentIndex++
// }

left.onclick = () => {
  let sliders = document.querySelectorAll('.sliderList')
  sliderBox.style.transition = "transform 0.5s cubic-bezier(0.83, 0, 0.17, 0)"
  sliderStyle.setProperty('--sliderWidth', '20vw')
  setTimeout( () => {
    sliders[sliders.length - 1].remove()
    sliderBox.prepend(sliders[sliders.length - 1])
    sliderBox.style.transition = "none"
    sliderStyle.setProperty('--sliderWidth', '0vw')
  },550)
}
right.onclick = () => {
  let sliders = document.querySelectorAll('.sliderList')
  sliderBox.style.transition = "transform 0.5s cubic-bezier(0.83, 0, 0.17, 0)"
  sliderStyle.setProperty('--sliderWidth', '-20vw')
  setTimeout( () => {
    sliders[0].remove()
    sliderBox.appendChild(sliders[0])
    sliderBox.style.transition = "none"
    sliderStyle.setProperty('--sliderWidth', '0vw')
  }, 550)
}