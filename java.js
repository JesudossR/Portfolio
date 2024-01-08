$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

// Replace 'your-email@example.com' with your actual email address
  var emailAddress = 'jesudoss2107@gmail.com';

    document.getElementById('hireMeButton').addEventListener('click', function() {
      // Create a mailto link
      var mailtoLink = 'mailto:' + emailAddress +'?subject=Hiring Inquiry&body=Hello, I am interested in hiring you.';
      // Open the default email client
          window.location.href = mailtoLink;
});


