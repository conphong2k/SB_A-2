$(function () {
    // url 처리
    var urlHash = Number(location.hash.substr(1));

    if (urlHash) {
        oPage.moveIndex(urlHash);
    } else {
        oPage.init();
        oPage.load();
        oSlide.initialIndex();
    }

    // 소리 숨기기/보이기
    $(".sound-toggle-content").click(function (e) {
        e.stopPropagation();

        var $self = $(this);
        var isAudioPlay = 'is-audio-play';

        if ($self.hasClass(isAudioPlay)) {
            $self.removeClass(isAudioPlay);
        } else {
            $(".sound-toggle-content").removeClass(isAudioPlay);
            $self.addClass(isAudioPlay);
        }

        return false;
    });

    // 지문 숨기기/보이기
    $(".article-toggle-item").click(function () {
        var $self = $(this);
        var $wrap = $self.parent();
        var $articleText = $wrap.siblings('.article-text');
        var isHide = 'is-hide';

        if ($self.hasClass(isHide)) {
            $wrap.addClass(isHide);
            $articleText.hide();
        } else {
            $wrap.removeClass(isHide);
            $articleText.show();
        }

        return false;
    });

    // 소리 재생
    $(".audio-button").click(function (e) {
        e.preventDefault();

        var $self = $(this);
        var $audio = $("#audio")[0];
        var src = $self.data('audio-src');

        $audio.src = src;
        if (!$audio.paused) $audio.pause();
        $audio.play();
        console.log($(this).text());
        e.stopPropagation();
    });

    $(".audio-pause-button").click(function () {
        var $audio = $("#audio")[0];
        if (!$audio.paused) $audio.pause();
    });

    // 네비게이션
    var navigatorList = [
        {'title': '<b>2과</b>나의 친구를 소개합니다.', 'href': 'chapter2.html'},
        {'title': '<b>3과</b>도서관을 이용하기 위해서 학생증이 있어야 해요.', 'href': 'chapter3.html'},
        {'title': '<b>4과</b>기숙사 신청을 하자고 했어요.', 'href': 'chapter4.html'},
        {'title': '<b>5과</b>비싸도 가까운 곳에 살고 싶어요.', 'href': 'chapter5.html'},
        {'title': '<b>6과</b>주말밖에 시간이 안 돼요.', 'href': 'chapter6.html'},
        {'title': '<b>7과</b>미국에 소포를 보내려고 왔어요.', 'href': 'chapter7.html'},
        {'title': '<b>8과</b>비자를 연장하려면 뭐가 필요해요?', 'href': 'chapter8.html'},
        {'title': '<b>9과</b>양말을 신고 가는 게 좋아요.', 'href': 'chapter9.html'},
        {'title': '<b>10과</b>집들이를 하려고 하는데 올 수 있어요?', 'href': 'chapter10.html'},
        {'title': '<b>11과</b>빨간색을 좋아할까요?', 'href': 'chapter11.html'},
        {'title': '<b>12과</b>음식을 준비해 놓았어요.', 'href': 'chapter12.html'},
        {'title': '<b>13과</b>인터넷 쇼핑은 싼 데다가 편해요.', 'href': 'chapter13.html'},
        {'title': '<b>14과</b>이메일로 숙제를 내세요.', 'href': 'chapter14.html'},
        {'title': '<b>15과</b>압둘라 씨가 길을 알 테니까 연락하세요.', 'href': 'chapter15.html'},
        {'title': '<b>16과</b>직진하다가 좌회전하세요.', 'href': 'chapter16.html'}
    ];

    var navigatorHtml = '';
    for (var i = 0; i < navigatorList.length; i++) {
        var item = navigatorList[i];
        navigatorHtml += '<li>' +
            '<a href="' + item.href + '" class="menu_link">' + item.title + '</a>' +
            '</li>';
    }

    $("#header").append(
        '<div id="navigator">' +
        '<div class="menu_wrap">' +
        '<ul class="menu_list">' +
        '<li>' +
        '<a href="#" class="menu_link" style="display: inline-block"><b>1과</b></a><a href="chapter1.html" class="menu_link" style="display: inline-block">한국에 온 지 3개월 됐어요.</a>' +
        '</li>' + navigatorHtml +
        '</ul>' +
        '</div>' +
        '</div>');
});