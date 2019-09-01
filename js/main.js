





$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        licenseKey: '6168582C-C9094DA3-8FEDBE29-4A7E6284',
        autoScrolling: true,
        scrollHorizontally: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        menu: '#myMenu'
        // afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        //     var loadedSlide = $(this);

        //     // //первый слайд второго раздела
        //     // if (anchorLink == 'secondPage' && slideIndex == 1) {
        //     //     alert("Первый слайд загружен");
        //     // }

        //     // //второй слайд второго раздела (supposing #secondSlide is the
        //     // //привязка для второго раздела
        //     // if (index == 2 && slideIndex == 'secondSlide') {
        //     //     alert("Второй слайд загружен");
        //     // }
        // }
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);



});