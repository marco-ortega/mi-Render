import "./styles.css";

// hola
console.log("hi");
//console.clear();

// session method 1
function user_location() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "//ipinfo.io/?format=jsonp&callback=", true);
  // //api.ipify.org?format=json
  xhttp.send();
}

// call session
user_location();
//console.clear();
