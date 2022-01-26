var slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName('mySlides')
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

// Get the header
var header = document.getElementById('myHeader')

// Get the offset position of the navbar
var sticky = header.offsetTop

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
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
