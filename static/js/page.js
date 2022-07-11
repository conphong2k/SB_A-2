$(function () {
    function Page() {
        this.$items = $(".page");
        this.currentIndex = 1;
        this.maxIndex = 0;
    }

    Page.prototype = {
        init: function () {
            this.maxIndex = this.findMaxIndex();
        },
        findMaxIndex: function () {
            if (!this.$items) return 0;

            var max = 0;
            this.$items.each(function () {
                var targetIndex = $(this).data('page-index');
                max = (max < targetIndex) ? targetIndex : max;
            });
            return max;
        },
        load: function () {
            var $target = $('.page[data-page-index="' + this.currentIndex + '"]');
            if (!$target) return;

            this.$items.hide();
            $target.show();
        },
        debug: function () {
            console.info('currentIndex: ' + this.currentIndex);
        },
        increseIndex: function () {
            $("#page-index").val(++this.currentIndex);
            return this.currentIndex;
        },
        decreaseIndex: function () {
            $("#page-index").val(--this.currentIndex);
            return this.currentIndex;
        },
        setIndex: function (index) {
            this.currentIndex = index;
            $("#page-index").val(this.currentIndex);
        },
        loadOptionBar: function () {
            var $next = $("#next");
            var $prev = $("#prev");

            if (this.currentIndex <= 1) {
                $prev.hide();
            } else {
                $prev.show();
            }

            if (this.currentIndex >= this.maxIndex) {
                $next.hide();
            } else {
                $next.show();
            }
        },
        moveIndex: function (index) {
            oPage.init();
            oPage.setIndex(index);
            oPage.load();
            oSlide.initialIndex();
            oPage.loadOptionBar();
            parent.location.hash = "#" + index;
        }
    };


    var oPage = new Page();
    window.oPage = oPage;

    var $next = $("#next");
    var $prev = $("#prev");
    var $audio = $("#audio")[0];

    $next.click(function () {
        var $this = $(this);

        if (oSlide.touch() < 0) {
            if ($audio && (!$audio.paused)) $audio.pause();

            if ((oPage.increseIndex()) === oPage.maxIndex) {
                $this.hide();
            }

            if (!$prev.is(':visible')) {
                $prev.show();
            }

            oSlide.initialIndex();
            oPage.load();
            parent.location.hash = "#" + oPage.currentIndex;
        }
    });

    $prev.click(function () {
        var $this = $(this);

        if ((oPage.decreaseIndex()) === 1) {
            $this.hide();
        }

        if (!$next.is(':visible')) {
            $next.show();
        }

        if ($audio && (!$audio.paused)) $audio.pause();
        oSlide.initialIndex();
        oPage.load();
        parent.location.hash = "#" + oPage.currentIndex;
    });
});