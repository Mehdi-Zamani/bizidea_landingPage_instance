jQuery(document).ready(function ($) {
  /* $('.web-counter-number').counterUp({
    delay: 10,
    time: 2000,
    triggerOnce:true
  }); */
  //==header li add active classname by click ==============
  var headerList = document.querySelector("#mainMenu ul.navbar-nav");
  headerList.addEventListener("click", function (e) {
    [...headerList.children].forEach((li) => {
      if (li.classList.contains("active")) {
        li.classList.remove("active");
      }
    });
    e.target.parentElement.classList.add("active");
  });
  //=======================================
  var menu = $(".web-header-section");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0 && menu.hasClass("web-header-section")) {
      menu.addClass("web-header-section-fixed");
    } else if (
      $(this).scrollTop() <= 0 &&
      menu.hasClass("web-header-section")
    ) {
      menu.removeClass("web-header-section-fixed");
    }
  });

  $(window).scroll(function () {
    $(".web-counter-number").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 1500,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  });
});
