// alert();
// var begin = function() {
//     var container = $("#container");
//     container.shuffleLetters();
// };
var scrolling = false;
var options = {
    animateThreshold: 50,
    // scrollPollInterval: 10
};
// var container = $("#container");
// container.shuffleLetters();
var begin = function() {
    $("[name='ocultarDinamico']").collapse('hide');
    // container.shuffleLetters();
    // console.log(container);
};
$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    // Do something
    // console.log(scroll);
    if (scroll > 104) {
        if (!$("#cntNavBar").hasClass("personal-navbar-scroll")) {
            $("#cntLogo").hide();
            $("#cntNavBar").addClass("personal-navbar-scroll");
            $("#cntNavBar").css({
                'top': 0
            });
            $("#cntNavBar").AniView(options);
        }
        $("[name='ocultarDinamico']").collapse('show');
    } else if (scroll == 0) {
        if ($("#cntNavBar").hasClass("personal-navbar-scroll")) {
            $("#cntLogo").show();
            $("#cntLogo").AniView(options);
            $("#cntNavBar").removeClass("personal-navbar-scroll");
        }
        $("[name='ocultarDinamico']").collapse('hide');
        // $("#cntNavBar").css({
        //     'top': none
        // }, 200, function() {
        //     //end of animation.. if you want to add some code here
        //     $("#cntLogo").AniView(options);
        // });
    }
});
// animateThreshold: 100,
//     scrollPollInterval: 12
// }
// var begin = function() {
//     $("#cntNavBar").AniView(options);
// };
// var options = {