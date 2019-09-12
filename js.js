// Menu section
const Menu = document.querySelector(".Menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

Menu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

// POP UP Window 1 section
(function() {
    var $content = $('.modal_info').detach();

    $('.Riyadh-pin').on('click', function(e) {
        modal.open({
            content: $content,
            width: 900,
            height: 500,
        });
        $content.addClass('modal_content');
        $('.modal, .modal_overlay').addClass('display');
        $('.Riyadh-pin').addClass('load');
    });
}());

var modal = (function() {

    var $close = $('<button role="button" class="modal_close" title="Close"><span></span></button>');
    var $content = $('<div class="modal_content"/>');
    var $modal = $('<div class="modal"/>');
    var $window = $(window);

    $modal.append($content, $close);

    $close.on('click', function(e) {
        $('.modal, .modal_overlay').addClass('conceal');
        $('.modal, .modal_overlay').removeClass('display');
        $('.Riyadh-pin').removeClass('load');
        e.preventDefault();
        modal.close();
    });

    return {
        center: function() {
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft(),
            });
        },
        open: function(settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.center();
            $(window).on('resize', modal.center);
        },
        close: function() {
            $content.empty();
            $modal.detach();
            $(window).off('resize', modal.center);
        }
    };
}());
// pop up window 2 section
(function() {
    var $content = $('.modal_info2').detach();

    $('.Madinah-pin').on('click', function(e) {
        modal.open({
            content: $content,
            width: 900,
            height: 500,
        });
        $content.addClass('modal_content');
        $('.modal, .modal_overlay').addClass('display');
        $('.Madinah-pin').addClass('load');
    });
}());

var modal = (function() {

    var $close = $('<button role="button" class="modal_close" title="Close"><span></span></button>');
    var $content = $('<div class="modal_content"/>');
    var $modal = $('<div class="modal"/>');
    var $window = $(window);

    $modal.append($content, $close);

    $close.on('click', function(e) {
        $('.modal, .modal_overlay').addClass('conceal');
        $('.modal, .modal_overlay').removeClass('display');
        $('.Madinah-pin').removeClass('load');
        e.preventDefault();
        modal.close();
    });

    return {
        center: function() {
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft(),
            });
        },
        open: function(settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.center();
            $(window).on('resize', modal.center);
        },
        close: function() {
            $content.empty();
            $modal.detach();
            $(window).off('resize', modal.center);
        }
    };
}());
//Pop Up Window 3 section
(function() {
    var $content = $('.modal_info3').detach();

    $('.Aseer-pin').on('click', function(e) {
        modal.open({
            content: $content,
            width: 900,
            height: 500,
        });
        $content.addClass('modal_content');
        $('.modal, .modal_overlay').addClass('display');
        $('.Aseer-pin').addClass('load');
    });
}());

var modal = (function() {

    var $close = $('<button role="button" class="modal_close" title="Close"><span></span></button>');
    var $content = $('<div class="modal_content"/>');
    var $modal = $('<div class="modal"/>');
    var $window = $(window);

    $modal.append($content, $close);

    $close.on('click', function(e) {
        $('.modal, .modal_overlay').addClass('conceal');
        $('.modal, .modal_overlay').removeClass('display');
        $('.Aseer-pin').removeClass('load');
        e.preventDefault();
        modal.close();
    });

    return {
        center: function() {
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft(),
            });
        },
        open: function(settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.center();
            $(window).on('resize', modal.center);
        },
        close: function() {
            $content.empty();
            $modal.detach();
            $(window).off('resize', modal.center);
        }
    };
}());
//Pop Up Window 4 section
(function() {
    var $content = $('.modal_info4').detach();

    $('.Najran-pin').on('click', function(e) {
        modal.open({
            content: $content,
            width: 900,
            height: 500,
        });
        $content.addClass('modal_content');
        $('.modal, .modal_overlay').addClass('display');
        $('.Najran-pin').addClass('load');
    });
}());

var modal = (function() {

    var $close = $('<button role="button" class="modal_close" title="Close"><span></span></button>');
    var $content = $('<div class="modal_content"/>');
    var $modal = $('<div class="modal"/>');
    var $window = $(window);

    $modal.append($content, $close);

    $close.on('click', function(e) {
        $('.modal, .modal_overlay').addClass('conceal');
        $('.modal, .modal_overlay').removeClass('display');
        $('.Najran-pin').removeClass('load');
        e.preventDefault();
        modal.close();
    });

    return {
        center: function() {
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft(),
            });
        },
        open: function(settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.center();
            $(window).on('resize', modal.center);
        },
        close: function() {
            $content.empty();
            $modal.detach();
            $(window).off('resize', modal.center);
        }
    };
}());

//Pop Up Window 5 section
(function() {
    var $content = $('.coming_soon').detach();

    $('.Jeddah-pin').on('click', function(e) {
        modal.open({
            content: $content,
            width: 900,
            height: 500,
        });
        $content.addClass('modal_content');
        $('.modal, .modal_overlay').addClass('display');
        $('.Jeddah-pin').addClass('load');
    });
}());

var modal = (function() {

    var $close = $('<button role="button" class="modal_close" title="Close"><span></span></button>');
    var $content = $('<div class="modal_content"/>');
    var $modal = $('<div class="modal"/>');
    var $window = $(window);

    $modal.append($content, $close);

    $close.on('click', function(e) {
        $('.modal, .modal_overlay').addClass('conceal');
        $('.modal, .modal_overlay').removeClass('display');
        $('.Jeddah-pin').removeClass('load');
        e.preventDefault();
        modal.close();
    });

    return {
        center: function() {
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft(),
            });
        },
        open: function(settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.center();
            $(window).on('resize', modal.center);
        },
        close: function() {
            $content.empty();
            $modal.detach();
            $(window).off('resize', modal.center);
        }
    };
}());


