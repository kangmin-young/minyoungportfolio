$(document).ready(function(){
  let currentIndex = 0;
  const slides = $('.slides');
  const slideCount = slides.children().length;

  function goToSlide(index) {
    const slideWidth = $('.slide').width();
    slides.css('transform', 'translateX(' + (-slideWidth * index) + 'px)');
    $('.dot').removeClass('actives');
    $('.dot').eq(index).addClass('actives');
  }

  $('#next').click(function(){
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  });

  $('#prev').click(function(){
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    goToSlide(currentIndex);
  });

  $('.dot').click(function(){
    currentIndex = $(this).index();
    goToSlide(currentIndex);
  });

      var modal = document.getElementById("myModal");
      var img = document.getElementById("immmImage");
      var span = document.getElementsByClassName("close")[0];
  
      img.onclick = function() {
        modal.style.display = "block";
      }
  
      span.onclick = function() {
        modal.style.display = "none";
      }
  
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
});
$(document).ready(function() {
  var modal = document.getElementById("myModal");
  var img = document.getElementById("immmImage");
  var span = document.getElementsByClassName("close")[0];
  
  img.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  document.querySelectorAll('.cards a').forEach(anchor => {
    anchor.onclick = function(e) {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).style.display = 'block';
    }
});

document.querySelectorAll('.modal .close').forEach(span => {
    span.onclick = function() {
        span.closest('.modal').style.display = 'none';
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
  });
