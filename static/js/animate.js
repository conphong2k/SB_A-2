$(function () {
    function Slide() {
        this.currentIndex = 1;
        this.maxIndex = 0;
    }

    Slide.prototype = {
        initialIndex: function () {
            this.currentIndex = 1;
            this.maxIndex = this.getMaxIndex();
            $("#slide-index").val(this.currentIndex);

            var $wrap = $('[data-page-index="' + $("#page-index").val() + '"]').first();
            $('.is-slide-after', $wrap).removeClass('is-slide-after');
        },
        getMaxIndex: function () {
            var $wrap = $('[data-page-index="' + $("#page-index").val() + '"]').first();
            var max = 0;
            $('[data-animate-slide]', $wrap).each(function () {
                var targetSlide = $(this).data('animate-slide');
                max = (max < targetSlide) ? targetSlide : max;
            });
            return max;
        },
        touch: function () {
            var maxIndex = this.maxIndex;
            if (oSlide.currentIndex > maxIndex) {
                return -1;
            }

            var isSlideAfter = 'is-slide-after';
            var $wrap = $('[data-page-index="' + $("#page-index").val() + '"]').first();
            var $target = $('[data-animate-slide="' + this.currentIndex + '"]', $wrap).first();
            var soundSrc = $target.data('slide-sound-src');
            var $audio = $("#audio")[0];

            if ($audio && $audio.paused) $audio.pause();
            if (soundSrc) {
                $audio.src = soundSrc;
                $audio.play();
                this.currentIndex++;
            } else {
                if ($target.length && (!$target.hasClass(isSlideAfter))) {
                    $target.addClass(isSlideAfter);
                    this.currentIndex++;
                } else {
                    return -1;
                }
            }

            return $target.length ? this.currentIndex : -1;
        }
    };

    var oSlide = new Slide();
    window.oSlide = oSlide;

    $("#main").click(function () {
        oSlide.touch();
    });
});