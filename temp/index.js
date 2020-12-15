$(document).ready(function () {
    
    $('.btn-secondary').click(function (e) { 
        e.preventDefault();
        var danhmuc=$(this).val();
        $('h1').text(danhmuc);
        $('.parentImg .blockImg').each(function (index, element) {
            // element == this
            console.log(!$(this).hasClass(danhmuc));
            if($(this).hasClass(danhmuc)){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
    }); 
    new WOW().init();
});