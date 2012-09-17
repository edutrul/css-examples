$(function() {
    $('li a').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest('ul').children('li').removeClass('active');
        $this.parent().addClass('active');
    });
});
