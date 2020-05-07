$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    onLeave: function (origin, destination, direction) {
      if (destination.index === 1) {
        $(".web_d .bar").css({ animation: "bar1 2s linear" });
        $(".android_d .bar").css({ animation: "bar2 2s linear" });
        $(".machine_le .bar").css({ animation: "bar3 2s linear" });
        $(".parallel .bar").css({ animation: "bar4 2s linear" });
      }
      if (destination.index != 1) {
        $(".bar").css({ animation: "" });
      }
    },
  });

  //methods
});

// (function ($, win) {
//   $.fn.inViewport = function (cb) {
//     return this.each(function (i, el) {
//       function visPx() {
//         var elH = $(el).outerHeight(),
//           H = $(win).height(),
//           r = el.getBoundingClientRect(),
//           t = r.top,
//           b = r.bottom;
//         return cb.call(
//           el,
//           Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H))
//         );
//       }
//       visPx();
//       $(win).on("resize scroll", visPx);
//     });
//   };
// })(jQuery, window);

// $(".bar").inViewport(function (px) {
//   if (px) $(this).addClass("load");
// });
// // var i = 0;
// // var txt=["Student","Competitive Coder" , "Web Developer" ,"Android Developer",
// //     "Machine Learning Enthusiast"]
// // var speed = 50; /* The speed/duration of the effect in milliseconds */

// // function typeWriter() {
// //     for
// //   if (i < txt.length) {
// //     document.querySelector(".descr").innerHTML += txt.charAt(i);
// //     i++;
// //     setTimeout(typeWriter, speed);
// //   }
// // }

// // typeWriter();
