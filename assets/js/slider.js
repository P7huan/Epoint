const body = document.querySelector('.mgi__project__body')
const sliders = document.querySelector('.mgi__project__slider')
const slickslider = document.querySelectorAll('.mgi__project__slider-item')
const slicknextBtn = document.querySelector('.slick-next')
const slickprevBtn = document.querySelector('.slick-prev')
document.addEventListener('DOMContentLoaded', function () {
  //reponsive
  window.addEventListener('resize', function () {
    clearInterval(autoplay)
    count = 0
    if (window.innerWidth >= 992) {
      make_slide(4)
    } else if (window.innerWidth >= 768) {
      make_slide(2)
    } else {
      make_slide(1)
    }
  })

  const media = [window.matchMedia('(min-width:992px)'), window.matchMedia('(min-width:768px)')]
  if (media[0].matches) {
    make_slide(4)
  } else if (media[1].matches) {
    make_slide(2)
  } else {
    make_slide(1)
  }
})
function make_slide(amountSlideAppear) {
  const widthItemAndMargin = body.offsetWidth / amountSlideAppear

  let widthAllBox = widthItemAndMargin * slickslider.length
  sliders.style.width = `${widthAllBox}px`
  slickslider.forEach((element) => {
    element.style = 'padding:0 10px'
    element.style.width = `${widthItemAndMargin}px`
  })
  //handle slide btn
  let count = 0
  let spacing = widthAllBox - widthItemAndMargin * amountSlideAppear

  autoplay = setInterval(() => {
    count += widthItemAndMargin
    if (count > spacing) {
      count = 0
    }
    sliders.style.transform = `translateX(${-count}px)`
    sliders.style.transition = '1s'
  }, 5000)
  slicknextBtn.addEventListener('click', function () {
    count += widthItemAndMargin
    if (count > spacing) {
      count = 0
    }
    sliders.style.transform = `translateX(${-count}px)`
    sliders.style.transition = '1s'
  })
  slickprevBtn.addEventListener('click', function () {
    count -= widthItemAndMargin
    if (count < 0) {
      count = spacing
    }
    sliders.style.transform = `translateX(${-count}px)`
    sliders.style.transition = '1s'
  })
}
