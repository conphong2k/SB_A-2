$(function () {
    var $menu = $("#menu");
    var $dimmed = $("#dimmed");

    // Open
    $menu.click(function () {
        var $navigator = $("#navigator");
        // $dimmed.show();
        $navigator.toggle();
        // $navigator.animate({left: 0}, 'fast');
    });

    // Close
    $dimmed.click(function () {
        $navigator.animate({left: '-300px'}, 'fast', function () {
            $navigator.hide();
            // $dimmed.hide();
        });
    });
});