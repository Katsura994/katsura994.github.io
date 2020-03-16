$(document).ready(function(){
    //////////////////////////////////////
    //////////// Slider image
    $(".Slider").slick({
        autoplay:true,
        autoplaySpeed:1000000000,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        dots:false,
        pauseOnDotsHover:false,
        cssEase:'linear',
        fade:true,
        draggable:false,
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>', 
    });
    ////////////////////////////////
    /////////////// Slider comments 
    $(".SliderComments").slick({
        autoplay:true,
        autoplaySpeed:1000000000,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        dots:false,
        pauseOnDotsHover:false,
        cssEase:'linear',
        fade:true,
        draggable:true,
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>', 
    });
    ////////////////////////////////////////////////
    //////////////// Navbar on scroll
    $(window).on('scroll', function () {

        if ($(this).scrollTop() >= 50) {
            $('.navbar').addClass('opacity');
            // $('.navbar-container').addClass('display');
            
            // $('.navbar-container').fadeIn(200);   
        } else {
            // $('.navbar-container').fadeOut(200);  
            $('.navbar').removeClass('opacity');
            // $('.navbar-container').removeClass('display');  
            
        }
      
      });
      /////////////////////////////////////////////////////
      //////////////////// Waypoint
      $('.js--why').waypoint(function(direction){
          //////////////////////////////////////////////////////
        ////////////////// Progres bars
        var bar = new ProgressBar.Circle('.progress1', {
            color: '#aaa',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
            autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#5b8c5a', width: 4 },
            // Set default step function for all animate calls
            step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        
            }
        });
        
        bar.animate(0.99);  // Number from 0.0 to 1.0
        /////////////////////////////////////////////  
        var bar1 = new ProgressBar.Circle('.progress2', {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#5b8c5a', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
            circle.setText('');
            } else {
            circle.setText(value + "%");
            }

        }
        });
        bar1.animate(0.90);  // Number from 0.0 to 1.0
        /////////////////////////////////////////////////////
        var bar2 = new ProgressBar.Circle('.progress3', {
            color: '#aaa',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
            autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#5b8c5a', width: 4 },
            // Set default step function for all animate calls
            step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        
            }
        });
        bar2.animate(0.76);  // Number from 0.0 to 1.0
        ///////////////////////////////////////////////////////
        var bar3 = new ProgressBar.Circle('.progress4', {
            color: '#aaa',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
            autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#5b8c5a', width: 4 },
            // Set default step function for all animate calls
            step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        
            }
        });
        bar3.animate(1);  // Number from 0.0 to 1.0
        $('.progresstext').addClass('opacity');
        // alert(this);
        this.destroy();
            }, {offset: '80%'});
})

$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});