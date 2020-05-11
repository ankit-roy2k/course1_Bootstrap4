$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play') ;      
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause') ;      
        }
    });
});

$(document).ready(function(){
    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle');
        $('#loginModal').modal('show');
    });
});

$(document).ready(function(){
    $('#cancel1').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#cancelButtonLogin').click(function(){
        $('#loginModal').modal('hide');
    });
});

$(document).ready(function(){
    $('#reserveButton').click(function(){
        $('#reserve').modal('toggle');
        $('#reserve').modal('show');
    });
});

$(document).ready(function(){
    $('#cancel2').click(function(){
        $('#reserve').modal('hide');
    });
    $('#cancelButtonReserve').click(function(){
        $('#reserve').modal('hide');
    });
});