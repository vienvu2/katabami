setTimeout(() => {
  $(document).ready(function () {
    console.log("ready!");
    $(".tabs .tab").click(function () {
      $(this).parent().find(".tab").removeClass("active");
      $(this).addClass("active");
    });

    $(".service-detail-item").click(function () {
      $(".service-detail-item").removeClass("active");
      $(this).addClass("active");
    });

    $(".custom-form .input input").focusin(function () {
      $(this).parent().find("label").addClass("active");
    });

    $(".custom-form .input input").focusout(function () {
      if ($(this).val().length <= 0) {
        $(this).parent().find("label").removeClass("active");
      } else {
        $(this).parent().find("label").addClass("active");
      }
    });

    $(".menu-mobile").click(function () {
      $(".menu-sider").toggle();
    });

    $(".menu-sider").click(function (e) {
      if (e.target !== this) return;

      $(".menu-sider").toggle();
    });

    if ($(".product-items")) {
      $(".product-items").slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      });

      $(".product-items-next").click(function () {
        $(".product-items").slick("slickNext");
      });

      $(".product-items-prev").click(function () {
        $(".product-items").slick("slickPrev");
      });
    }
    console.log($(".slick-slider"));

    if ($(".sliders")) {
      $(".sliders").slick({
        speed: 300,
        slidesToShow: 3.5,
        slidesToScroll: 4,
        infinite: false,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
  });
}, 2000);
