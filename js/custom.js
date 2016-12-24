// Closes the sidebar menu
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Map scrolling behaviour
$(document).ready(function() {
  $('#map_iframe').addClass('scrolloff');
  $('#map').on('click', function () {
    $('#map_iframe').removeClass('scrolloff');
  });

  $('#map_iframe').mouseleave(function  () {
    $('#map_iframe').addClass('scrolloff');
  });

  // Initialize WOW.js Scrolling Animations
  new WOW().init();

  $("form").submit(function(e) {
      var self = $(this),
          button = self.find("button"),
          xhr = new XMLHttpRequest();
      button.html(self.data("sending"));
      xhr.open('POST', '//formspree.io/' + self.data("email"), true);
      xhr.setRequestHeader("Accept", "application/json")
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      xhr.send(self.serialize());
      xhr.onloadend = function(res) {
          if (res.target.status === 200) {
              button.html(self.data("sent"));
              button.prop('disabled', true);
              console.log(xhr.status);
          } else {
              button.html(self.data("error"));
              button.toggleClass("btn-warning btn-primary");
              setTimeout(function() {
                  button.html(self.data("submit"));
                  button.toggleClass("btn-warning btn-primary");
              }, 3000)

          }
      };

      e.preventDefault();
  })

});
