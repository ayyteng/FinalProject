

var followCursor = (function() {
  var s = document.getElementById("movecow");
  s.style.position = 'absolute';
  s.style.margin = '0';


  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left  = (e.clientX - 5) + 'px';
      s.style.top = (e.clientY - 5) + 'px';
    }
  };
}());

window.onload = function() {
  followCursor.init();
  document.body.onmousemove = followCursor.run;
}
