var slideIndex = 1
showSlides(slideIndex)
function plusSlides(n) {
  showSlides((slideIndex += n))
}
function currentSlide(n) {
  showSlides((slideIndex = n))
}
function showSlides(n) {
  var i
  var slides = document.getElementsByClassName('mgi_top-slides')
  var dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'flex'
  dots[slideIndex - 1].className += ' active'
}
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction()
}

// Header Sticky
var header = document.getElementById('mgi_Header')
var sticky = header.offsetTop
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
}
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $('.logo-dark').fadeIn()
  } else {
    $('.logo-dark').fadeOut()
  }
})
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $('.logo-light').fadeOut()
  } else {
    $('.logo-light').fadeIn()
  }
})
// End Header

// Product slider
const body = document.querySelector('.mgi_product')
const sliders = document.querySelector('.mgi_product__slider')
const slickslider = document.querySelectorAll('.mgi_product__slider-item')
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
  }, 3000)
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
// Testimonials Slider
const commentContainer = document.querySelector('.mgi_testimonials')
const commentSliders = document.querySelector('.mgi_testimonials__slider')
const commentSlideItem = document.querySelectorAll('.mgi_testimonials__slider-item')

document.addEventListener('DOMContentLoaded', function () {
  console.log(window.innerWidth)
  window.addEventListener('resize', function () {
    clearInterval(autoplay2)
    countcomment = 0
    if (window.innerWidth >= 992) {
      make_slide2(3)
    } else if (window.innerWidth >= 768) {
      make_slide2(2)
    } else {
      make_slide2(1)
    }
  })

  const media = [window.matchMedia('(min-width:992px)'), window.matchMedia('(min-width:768px)')]
  if (media[0].matches) {
    make_slide2(3)
  } else if (media[1].matches) {
    make_slide2(2)
  } else {
    make_slide2(1)
  }
})

function make_slide2(amountSlideAppear) {
  const widthCommentItemAndMargin = commentContainer.offsetWidth / amountSlideAppear

  let widthCommentAllBox = widthCommentItemAndMargin * commentSlideItem.length
  commentSliders.style.width = `${widthCommentAllBox}px`
  commentSlideItem.forEach((element) => {
    element.style.width = `${widthCommentItemAndMargin}px`
  })
  let countcomment = 0
  let spacingcomment = widthCommentAllBox - widthCommentItemAndMargin * amountSlideAppear

  autoplay2 = setInterval(() => {
    countcomment += widthCommentItemAndMargin
    if (countcomment > spacingcomment) {
      countcomment = 0
    }
    commentSliders.style.transform = `translateX(${-countcomment}px)`
    commentSliders.style.transition = '1s'
  }, 3000)
}

// News slider
const lastedContainer = document.querySelector('.mgi_news__container')
const lastedSliders = document.querySelector('.mgi_news__slider')
const lastedSlideItem = document.querySelectorAll('.mgi_news__slider-item')

document.addEventListener('DOMContentLoaded', function () {
  console.log(window.innerWidth)
  window.addEventListener('resize', function () {
    clearInterval(autoplay3)
    countlasted = 0
    if (window.innerWidth >= 992) {
      make_slide3(3)
    } else if (window.innerWidth >= 768) {
      make_slide3(2)
    } else {
      make_slide3(1)
    }
  })

  const media = [window.matchMedia('(min-width:992px)'), window.matchMedia('(min-width:768px)')]
  if (media[0].matches) {
    make_slide3(3)
  } else if (media[1].matches) {
    make_slide3(2)
  } else {
    make_slide3(1)
  }
})

function make_slide3(amountSlideAppear) {
  const widthLastedItemAndMargin = lastedContainer.offsetWidth / amountSlideAppear
  let widthLastedAllBox = widthLastedItemAndMargin * lastedSlideItem.length
  lastedSliders.style.width = `${widthLastedAllBox}px`
  lastedSlideItem.forEach((element) => {
    element.style = 'padding:0 10px'
    element.style.width = `${widthLastedItemAndMargin}px`
  })
  let countlasted = 0
  let spacinglasted = widthLastedAllBox - widthLastedItemAndMargin * amountSlideAppear

  autoplay3 = setInterval(() => {
    countlasted += widthLastedItemAndMargin
    if (countlasted > spacinglasted) {
      countlasted = 0
    }
    lastedSliders.style.transform = `translateX(${-countlasted}px)`
    lastedSliders.style.transition = '1s'
  }, 5000)
}

// Resize
var x = document.getElementsByClassName('mgi__main')
function bodyoverflow() {
  if (x.className === 'overflow-hidden') {
    x.className = 'no-overflow'
  } else {
    x.className = 'overflow-hidden'
  }
}
function removeoverflow() {
  x.className = 'no-overflow'
}
function resizeTablet() {
  window.open(
    'https://p7huan.github.io/Epoint/',
    '_blank',
    'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=993,height=987',
  )
}
function resizeTabletxs() {
  window.open(
    'https://p7huan.github.io/Epoint/',
    '_blank',
    'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=768,height=987',
  )
}
function resizeMobile() {
  window.open(
    'https://p7huan.github.io/Epoint/',
    '_blank',
    'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=450,height=987',
  )
}
