// import "./images/bootstrap.css";
import "./images/style.css";
import "font-awesome/css/font-awesome.css";
// import "./images/font-awesome.min.css";
import "./images/animate.min.css";
import "wowjs/css/libs/animate.css";

// import Chart from "chart.js";
import { WOW } from "wowjs";
import "./images/libs.min.js";
import "./images/jquery.paroller.min.js";
import "./images/jquery.spincrement.min.js";
// import "./images/jquery.waypoints.min.js";
import "bootstrap";

new WOW().init();

$(document).ready(function () {
  $(".un1").paroller({
    factor: "-0.1",
    type: "background",
  });
  $(".dos1").paroller({
    factor: "-0.1",
    type: "background",
  });
  if (window.matchMedia("(max-width: 769px)").matches) {
    $(".dos1").removeClass("dos1");
    $(".un1").removeClass("un1");
  }
  var show1 = true;
  var countbox1 = ".map1";
  $(window).on("scroll load resize", function () {
    if (!show1) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top1 = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top1 = $(countbox1).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height1 = $(window).height(); // Высота окна браузера
    var d_height1 = $(document).height(); // Высота всего документа
    var e_height1 = $(countbox1).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top1 + 250 >= e_top1 ||
      w_height1 + w_top1 == d_height1 ||
      e_height1 + e_top1 < w_height1
    ) {
      $(".num").css("opacity", "1");
      $(".num").spincrement({
        thousandSeparator: "",
        duration: 5000,
      });

      show1 = false;
    }
  });
  /////////////////////////////////////////////////////////
  var show4 = true;
  var countbox4 = ".map2";
  $(window).on("scroll load resize", function () {
    if (!show4) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top4 = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top4 = $(countbox4).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height4 = $(window).height(); // Высота окна браузера
    var d_height4 = $(document).height(); // Высота всего документа
    var e_height4 = $(countbox4).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top4 + 250 >= e_top4 ||
      w_height4 + w_top4 == d_height4 ||
      e_height4 + e_top4 < w_height4
    ) {
      $(".num1").css("opacity", "1");
      $(".num1").spincrement({
        thousandSeparator: "",
        duration: 5000,
      });

      show4 = false;
    }
  });
  /////////////////////////////////////////////////////////

  //       var show = true;
  // var countbox = ".yyy";
  // $(window).on("scroll load resize", function () {
  //     if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
  //     var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
  //     var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
  //     var w_height = $(window).height(); // Высота окна браузера
  //     var d_height = $(document).height(); // Высота всего документа
  //     var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
  //     if (w_top  >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
  //         $('.benefits__number').css('opacity', '1');
  //         $('.benefits__number').spincrement({
  //             thousandSeparator: "",
  //             duration: 2000
  //         });
  //         show = false;
  //     }
  // });
  //////////////////////////////////////////////////////
  const ms = window.matchMedia("(max-width: 450px)");
  var target = $(".chart1");
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
      //сработает когда пользователь доскроллит к элементу с классом .elem
      $(".ch2").css("bottom", "12px");
      if (ms.matches) {
        $(".ch2").css("bottom", "6px");
      }
    }
  });
  //////////////////////////////////////////////////////////////////
  var show5 = true;
  var target5 = $(".info1_item1");
  var targetPos5 = target5.offset().top;
  var winHeight5 = $(window).height();
  var scrollToElem5 = targetPos5 - winHeight5;
  $(window).scroll(function () {
    var winScrollTop5 = $(this).scrollTop();
    if (winScrollTop5 > scrollToElem5) {
      if (!show5) return false;
      //сработает когда пользователь доскроллит к элементу с классом .elem
      $(".benefits__number").css("opacity", "1");
      $(".benefits__number").spincrement({
        thousandSeparator: "",
        duration: 2000,
      });
      show5 = false;
    }
  });
  var show6 = true;
  var target6 = $(".info1_item2");
  var targetPos6 = target6.offset().top;
  var winHeight6 = $(window).height();
  var scrollToElem6 = targetPos6 - winHeight6;
  $(window).scroll(function () {
    var winScrollTop6 = $(this).scrollTop();
    if (winScrollTop6 > scrollToElem6) {
      if (!show6) return false;
      //сработает когда пользователь доскроллит к элементу с классом .elem
      $(".benefits__number1").css("opacity", "1");
      $(".benefits__number1").spincrement({
        thousandSeparator: "",
        duration: 2000,
      });
      show6 = false;
    }
  });
  //////////////////////////////////////////////////////////////////

  var target2 = $(".b2");
  var targetPos2 = target2.offset().top;
  var winHeight2 = $(window).height();
  var scrollToElem2 = targetPos2 - winHeight2;
  $(window).scroll(function () {
    var winScrollTop2 = $(this).scrollTop();
    if (winScrollTop2 + 300 > scrollToElem2) {
      //сработает когда пользователь доскроллит к элементу с классом .elem
      $(".b2").css("bottom", "8px");
      if (ms.matches) {
        $(".b2").css("bottom", "4px");
      }
    }
  });

  ////////////////////////////////////////////////////////////
  var target3 = $(".b3_1");
  var targetPos3 = target3.offset().top;
  var winHeight3 = $(window).height();
  var scrollToElem3 = targetPos3 - winHeight3;
  $(window).scroll(function () {
    var winScrollTop3 = $(this).scrollTop();
    if (winScrollTop3 + 300 > scrollToElem3) {
      //сработает когда пользователь доскроллит к элементу с классом .elem
      $(".b3_2").css("bottom", "6px");
      if (ms.matches) {
        $(".b3_2").css("bottom", "3px");
      }
    }
  });
  //////////////////////////////////
  const mq = window.matchMedia("(max-width: 769px)");
  var target4 = $(".b4_2");
  var targetPos4 = target4.offset().top;
  var winHeight4 = $(window).height();
  var scrollToElem4 = targetPos4 - winHeight4;
  $(window).scroll(function () {
    var winScrollTop4 = $(this).scrollTop();
    if (winScrollTop4 + 300 > scrollToElem4) {
      //сработает когда пользователь доскроллит к элементу с классом .elem

      const mf = window.matchMedia("(max-width: 450px)");
      $(".b4_2").css("bottom", "11px");

      if (mq.matches && !mf.matches) {
        $(".b4_2").css("bottom", "41px");
      }
      if (window.matchMedia("(max-width: 450px)").matches) {
        $(".b4_2").css("bottom", "4px");
      }
      $(".b4_1 span").css("opacity", "1");
      $(".nam").css("opacity", "1");
    }
  });
  ///////////////////////////////////////////////////////
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });
}); // end ready
