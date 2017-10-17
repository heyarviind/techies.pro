$(document).ready(function(){
  function getParams(name) {
    const url_ = window.location.href;
    const url = new URL(url_);
    const value = url.searchParams.get(name);
    return value;
  }

  $(".rocket").on('webkitAnimationEnd', function(event){
    $(".rocket").hide();
    $(".bottle").hide();
  });
});