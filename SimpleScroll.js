/*!
 * @ullfindsmit
 * SimpleScroll.js | v0.0.1
 * Copyright (c) 2016 Smit Shah (@ullfindsmit)
 * Licensed under the MIT license.
 */

var SimpleScrollStep = 20;
var InScrollEvent = false;

//capture scroll any percentage
$(window).scroll(function () {
    if (InScrollEvent) {
        return;
    }
    InScrollEvent = true;

    var wintop = $(window).scrollTop();
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrollpercent = (wintop / (docheight - winheight)) * 100;

    var scrollpercentint = parseInt(scrollpercent);
    if (scrollpercentint > 0 && (scrollpercentint % SimpleScrollStep) == 0) {
        console.log('scrollpercent=' + scrollpercent);

        ga('send', {
            'hitType': 'event',          // Required.
            'eventCategory': document.title,   // Required.
            'eventAction': '' + scrollpercentint,      // Required.
            'eventLabel': window.location.pathname
        });
    }

    InScrollEvent = false;
});