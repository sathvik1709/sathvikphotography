$(document).ready(function(){
    
    $( ".col-md-2, .col-md-3, .col-md-4" ).show( "explode",{pieces: 16}, 2000 );
    
   $(".col-md-2").delay(2000).fadeIn(500);
    
    
    $('#butterfly-slideshow').on('click', function (event) {
        event.preventDefault();
        var borderless = true;
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
        blueimp.Gallery($('#links1 a'), $('#blueimp-gallery').data());
    });
    
    $('#borderless-checkbox').on('change', function () {
        var borderless = $(this).is(':checked');
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
    });
    
});

