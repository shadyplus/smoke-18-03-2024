

function getUrlVars(key) {
    var p = window.location.search;
    p = p.match(new RegExp('[?&]{1}(?:' + key + '=([^&$#]+))'));
    return p ? p[1] : '';
}

function buildQueryString(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p) && obj[p]) {
            str.push(p + "=" + obj[p]);
        }
    return str.join("&");
}

function mapFormDataToObject(form) {
    const data = $(form).serializeArray();
    const result = {};

    $.map(data, function (n, i) {
        result[n['name']] = n['value'];
    });

    return result;
}

function setOrderCookie() {
    let expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1)
    document.cookie = "ptc=strue; expires=" + expiryDate.toGMTString();
}



$(function () {
    $("a[href^='#']").click(function () {
        let _href = $(this).attr("href");
        let rul = document.getElementById(_href.slice(1));
        if (!rul) {
            _href = "#order_form";
        }

        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });
    $(".fadepopup input").click(function () {
        $('.eeee, .fadepopup').css('display', 'none');
    });
});

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('#boxes').slideUp();
            $('.order_block').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();

    let el = $('#roulette');
    if (!el) {
        el = $('#order_form')
    }
    let top = el.offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});

var time = 1800;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    mins = mins >= 10 ? mins : "0" + secs;
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html(mins);
    $("#sec").html(secs);
}
start_timer()
