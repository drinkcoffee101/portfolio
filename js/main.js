





$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        licenseKey: '6168582C-C9094DA3-8FEDBE29-4A7E6284',
        autoScrolling: true,
        scrollHorizontally: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        menu: '#myMenu',
        slidesNavigation: true,
        controlArrows: false,
        responsiveSlides: true,
        loopHorizontal: false
       
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);



});