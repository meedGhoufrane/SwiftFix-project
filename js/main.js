//showdropdownlist
const navmobile = document.querySelector(".navmobile");

function showdropdownlist() {
  navmobile.classList.toggle("is-active");
}

// search button
function showserchiputs() {
  var inputserch = document.getElementById("input-srch");

  if (inputserch.style.display === "none") {
    inputserch.style.display = "block";
    inputserch.style.transition = ".2s linear";
  } else {
    inputserch.style.display = "none";
    inputserch.style.transition = ".2s linear";
  }
}

// validation

var errorfirstname = document.getElementById("firstnm-error");
var errorlastname = document.querySelector(".lastname-error");
var errorgmail = document.querySelector(".gmail-error");
var errorldiscr = document.querySelector(".description-error");

let myform = document.getElementById("form");
if (myform) {
  myform.addEventListener("submit", function (e) {
    e.preventDefault();
    let firstname = document.getElementById("firstname");
    let myregex = /^[a-zA-Z]+$/;

    if (firstname.value.trim() === "") {
      errorfirstname.innerHTML = "first Nanme is required";
      errorfirstname.style.color = "red";
      errorfirstname.style.fontSize = "2rem";
      errorfirstname.style.textAlign = "center";
    } else if (myregex.test(firstname.value) == false) {
      errorfirstname.innerHTML = "use only character";
      errorfirstname.style.color = "red";
      errorfirstname.style.fontSize = "2rem";
      errorfirstname.style.textAlign = "center";
    }

    let lastname = document.getElementById("last-name");

    if (lastname.value.trim() === "") {
      errorlastname.innerHTML = "last Name is required";
      errorlastname.style.color = "red";
      errorlastname.style.fontSize = "2rem";
      errorlastname.style.textAlign = "center";
    } else if (myregex.test(lastname.value) == false) {
      errorlastname.innerHTML = "use only character";
      errorlastname.style.color = "red";
      errorlastname.style.fontSize = "2rem";
      errorlastname.style.textAlign = "center";
    }

    let gmail = document.getElementById("gmail");
    let regexgmail = /^[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(,|$)/;
    if (gmail.value.trim() === "") {
      errorgmail.innerHTML = "gmail is required";
      errorgmail.style.color = "red";
      errorgmail.style.fontSize = "2rem";
      errorgmail.style.textAlign = "center";
    } else if (regexgmail.test(gmail.value) == false) {
      errorgmail.innerHTML = "gmail invalid ! do like med124@gmail.com ";
      errorgmail.style.color = "red";
      errorgmail.style.fontSize = "2rem";
      errorgmail.style.textAlign = "center";
    }

    let discrp = document.getElementById("description");

    if (discrp.value.trim() === "") {
      errorldiscr.innerHTML = "description is required";
      errorldiscr.style.color = "red";
      errorldiscr.style.fontSize = "2rem";
      errorldiscr.style.textAlign = "center";
    }
    // else if(discrp.value.length < 10 || discrp.value.length > 200){
    //   errorldiscr.innerHTML = "Description must be between 10 and 200 characters.";
    //   errorldiscr.style.color = 'red';
    //   errorldiscr.style.fontSize = '2rem';
    //   errorldiscr.style.textAlign = "center";
    // }
  });
}

var btnsqustion = document.querySelectorAll(".qustion-btn");

btnsqustion.forEach((button) => {
  button.addEventListener("click", function (e) {
    let target = e.target.closest("button");
    target.children[0].classList.toggle("fa-plus");
    target.children[0].classList.toggle("fa-minus");
  });
});
