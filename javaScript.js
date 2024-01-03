
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })


function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}

var $image = $('#trailer_img');
var $svg = $('#trailar_svg'); // Fix the typo in the ID
var $video = $('#trailer_video');

$(function(){
    $image.on('mouseenter', function(){
        $image.hide();
        $svg.hide();
        $video.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video.on('mouseleave', function(){
        $image.show();
        $svg.show();
        $video.hide();
    });
});

var $image2 = $('#trailer_img2');
var $svg2 = $('#trailer_svg2'); // Fix the typo in the ID
var $video2 = $('#trailer_video2');

$(function(){
    $image2.on('mouseenter', function(){
        $image2.hide();
        $svg2.hide();
        $video2.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video2.on('mouseleave', function(){
        $image2.show();
        $svg2.show();
        $video2.hide();
    });
});

var $image1 = $('#trailer_img1');
var $video1 = $('#trailer_video1');

$(function(){
    $image1.on('mouseenter', function(){
        $image1.hide();
        $video1.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video1.on('mouseleave', function(){
        $image1.show();
        $video1.hide();
    });
});

var $imagec1 = $('#Continue_img1');
var $videoc1 = $('#Continue_video1');

$(function(){
    $imagec1.on('mouseenter', function(){
        $imagec1.hide();
        $videoc1.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoc1.on('mouseleave', function(){
        $imagec1.show();
        $videoc1.hide();
    });
});
