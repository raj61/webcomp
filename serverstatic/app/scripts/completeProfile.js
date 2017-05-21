$(document).ready(function () {

  
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

  //submit refresh
  $("#update").click(function(){
    console.log("Updating ..");
      var dataString = 'codechefUpdate=1';
      $.ajax({
        type: "POST",
        url: "",
        data: {
            'content': 'xxx',
            'csrfmiddlewaretoken': csrftoken,
        },
        // data: dataString,
        success: function() {
          // $('#contact_form').html("<div id='message'></div>");
          // $('#message').html("<h2>Contact Form Submitted!</h2>")
          // .append("<p>We will be in touch soon.</p>")
          // .hide()
          // .fadeIn(1500, function() {
          //   $('#message').append("<img id='checkmark' src='images/check.png' />");
          // });
          windows.location.href="/profile";
        }
      });


  });



});
