function showRainfall() {
  $("#temperature").removeClass("active");
  $("#rainfall").addClass("active");
  var tblname = "Climate50yr_%7801.png";
  var url =
    "https://www.weather.gov.sg/wp-content/themes/wiptheme/page-functions/functions-climate-trends-rainfall.php";
  var data = {
    tblname: tblname,
  };
  var options = {
    data: data,
    url: url,
  };
  callAjax(options, showTempDetail);
}

function showTemperature() {
  $("#temperature").addClass("active");
  $("#rainfall").removeClass("active");
  var tblname = "Climate50yr_%7802.png";
  var url =
    "https://www.weather.gov.sg/wp-content/themes/wiptheme/page-functions/functions-climate-trends-rainfall.php";
  var data = {
    tblname: tblname,
  };
  var options = {
    data: data,
    url: url,
  };
  callAjax(options, showTempDetail);
}

function showTempDetail(data) {
  $("#temp").remove();
  $("div[name='tableContainer']").prepend(data);
}

document.addEventListener("DOMContentLoaded", function () {
  var panelCollapse = document.querySelector(".panel-collapse");
  var panelHeading = document.querySelector(".panel-heading");
  if (hasClass(panelCollapse, "show")) {
    addClass(panelHeading, "opener");
  }
});

window.onload = myFunction;

function myFunction() {
  var openers = document.querySelectorAll(".opener");

  openers.forEach(function (opener) {
    opener.addEventListener("click", function () {
      opener.className = opener.className.replace("opener", "");
    });
  });

  //get the id from # then add show classes to display the item
  if (window.location.hash) {
    const targetId = window.location.hash.slice(1);
    var elem = document.getElementById(targetId);
    var targetCollapse = document.getElementById(
      elem.dataset.bsTarget.substring(1)
    );

    if (targetCollapse) {
      targetCollapse.classList.add("show");
    }
  }
}

function openPanelCollapse() {
  if (window.location.hash) {
    const targetId = window.location.hash.slice(1);
    var elem = document.getElementById(targetId);
    var targetCollapse = document.getElementById(
      elem.dataset.bsTarget.substring(1)
    );

    if (targetCollapse) {
      targetCollapse.classList.add("show");
    }
  }
}

// Check if an element has a specific class
function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  } else {
    return new RegExp("(^|\\s)" + className + "(\\s|$)").test(
      element.className
    );
  }
}

// Add a class to an element
function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else if (!hasClass(element, className)) {
    element.className += " " + className;
  }
}
