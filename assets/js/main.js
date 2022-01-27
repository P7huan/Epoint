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
