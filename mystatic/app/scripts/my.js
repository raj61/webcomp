$(document).ready(function () {
    $('.parallax').parallax();
    $(".button-collapse").sideNav();

    var insti = [];
    $.getJSON('/api/institute.json',function(data){
      $.each(data,function(i,item){
        $('#institute_list').append('<h3>'+item.name+'</h3>')
        insti.push(item.name);
      });

    console.log(insti);
    $('#institute_search').autocomplete({
    lookup: insti,
    onSelect: function (suggestion) {
        alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    }
    });
  });

  var user = [];
  $.getJSON('/api/users.json',function(data){
    $.each(data,function(i,item){
      user.push(item.username);
    });
    $('#user_search').autocomplete({
    lookup: user,
    onSelect: function (suggestion) {
        window.location.href = "/profile/"+suggestion.value;
    }
    });
  });
  $("#update").click(function(){
    console.log("Clicked");


  });
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
  $("#updateCodechef").click(function(){
    console.log("Updating ..");
      var dataString = 'codechefUpdate=1';
      $.ajax({
        type: "POST",
        url: "",
        data: {
            'content': 'codechef',
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
          Materialize.toast('Updated Codechef Ranks!', 3000)

        },
        error: function(){
          Materialize.toast('Error Updating! Try Again.',1000)
        }
      });


  });
  // codeforces update
  //submit refresh
  $("#updateCodeforces").click(function(){
    console.log("Updating ..");
      var dataString = 'codechefUpdate=1';
      $.ajax({
        type: "POST",
        url: "",
        data: {
            'content': 'codeforces',
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
          Materialize.toast('Updated Codeforces Ratings!', 3000);

        },
        error: function(){
          Materialize.toast('Error Updating! Try Again.',1000);
        }
      });


  });



});
