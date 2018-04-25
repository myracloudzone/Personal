var HeaderCtrl = GMApp.controller('HeaderCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
$scope.init = function() {
    setTimeout(function() {
        $('.navigation').removeClass('darkHeader');
    });
}
$(window).on("load",function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

setTimeout(function() {
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
}, 1000)

/* ========================================================================= */
/*	On scroll fade/bounce effect
/* ========================================================================= */
var scroll = new SmoothScroll('a[href*="#"]');

/* ========================================================================= */
/*	Header Scroll Background Change
/* ========================================================================= */	

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".navigation").addClass("sticky-header");
        } else {
            $(".navigation").removeClass("sticky-header");
        }
    });
$scope.init();                 
}]);
