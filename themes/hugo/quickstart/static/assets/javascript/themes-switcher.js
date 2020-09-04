(function() 
{

  var buttons = document.getElementsByTagName('a'),
    buttonClick = function(e) 
    {
      var eventTarget = e.target,
        	classData = eventTarget.getAttribute("data-body-class");

      document.body.className = classData;
    };

  for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].addEventListener("click", buttonClick, false);
  }

}());