
function logCRP(){
  var perf = window.performance.timing,
    o = perf.domContentLoadedEventStart - perf.domLoading,
    v = perf.domComplete - perf.domLoading;
   n = document.getElementById("crp-stats");
  n.textContent = 'DCL: ' + o + 'ms, onload: ' + v + 'ms';
}

window.addEventListener("load", function(perf) {
  logCRP();}
  );