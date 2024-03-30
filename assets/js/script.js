$(function () {
  $("#inputCheckIn").datepicker();
  $("#inputCheckOut").datepicker();

  $(".level-slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  });

  function videoToggle() {
    video = $(".level-video").get(0);
    if (video.paused) {
      video.play();
      $(".video-control-play").hide();
      $(".video-control-pause").show();
    } else {
      video.pause();
      $(".video-control-pause").hide();
      $(".video-control-play").show();
    }
  }

  $(".video-control-play").click(function () {
    videoToggle();
  });
});
