$(document).ready(function () {
    $(".date-input").pDatepicker({
      initialValue: false,
      format: "YYYY/MM/DD"	
    });

});
$(document).ready(function () {
    $(".date-input").pDatepicker({
      initialValue: false,
      format: "YYYY/MM/DD"	
    });

});
// $(document).ready(function() {
//   $("[id ^= 'ncode']").css('color', 'red');
// });
$(document).ready(function() {
  $("[id ^= 'ncode']").each(function() {
      if ($(this).text().length == 9) {
          $(this).css('color', 'red');
      }
  });
});
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt,ALERT_TITLE) {
        createCustomAlert(txt,ALERT_TITLE);
    }
}

function createCustomAlert(txt,ALERT_TITLE) {
    d = document


    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("button.center"));
    btn.className = "pwt-btn-submit";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }
    btn.style.position = "absolute";
btn.style.top = "75%";
btn.style.left = "50%";
btn.style.transform = "translate(-50%, -50%)";
}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

