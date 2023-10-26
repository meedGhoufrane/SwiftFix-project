document.addEventListener('DOMContentLoaded',function(){

const carous = document.querySelector(".Clients_contener");
const items = document.querySelectorAll(".Clients-cards");

let withitem = items[0].clientWidth;
let index = 0;

function carousel(){
  index = (index+1)%items.length;
  let trensform = -index*withitem;
  carous.style.transform = `translateX(${trensform}px)`;

}

setInterval(carousel,3000);
});
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
  } else {
    inputserch.style.display = "none";
  }
}


var serverbtn = document.querySelector(".select");
var menu = document.querySelector(".menu");

serverbtn.addEventListener("click", function(){
    menu.classList.toggle('menu-open');

});

// validation

var errorfirstname = document.getElementById("firstnm-error");
var errorlastname = document.querySelector(".lastname-error");
var errorgmail = document.querySelector(".gmail-error");
var errorldiscr = document.querySelector(".description-error");

let myform = document.getElementById("form");
if (myform) {
  myform.addEventListener("submit", function (e) {
    let firstname = document.getElementById("firstname");
    let myregex = /^[a-zA-Z]+$/;
    
      errorfirstname.innerHTML = "";
    if (firstname.value.trim() === "") {
      errorfirstname.innerHTML = "first Nanme is required";
      errorfirstname.classList.add('errormessage');
      e.preventDefault();
    } else if (myregex.test(firstname.value) == false) {
      errorfirstname.innerHTML = "use only character";
      errorfirstname.classList.add('errormessage');
      e.preventDefault();
    }

    let lastname = document.getElementById("last-name");
      errorlastname.innerHTML = "";
    if (lastname.value.trim() === "") {
      errorlastname.innerHTML = "last Name is required";
      errorlastname.classList.add('errormessage');
      
      e.preventDefault();
    } else if (myregex.test(lastname.value) == false) {
      errorlastname.innerHTML = "use only character";
      errorlastname.classList.add('errormessage');
      e.preventDefault();

    }


    let gmail = document.getElementById("gmail");
    errorgmail.innerHTML = "";
    let regexgmail = /^[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(,|$)/;
    if (gmail.value.trim() === "") {
      errorgmail.innerHTML = "gmail is required";
      errorgmail.classList.add('errormessage');
      e.preventDefault();

    } else if (regexgmail.test(gmail.value) == false) {
      errorgmail.innerHTML = "gmail invalid ! do like med124@gmail.com ";
      errorgmail.classList.add('errormessage');
      e.preventDefault();
    }

    let discrp = document.getElementById("description");
      errorldiscr.innerHTML = "";
    if (discrp.value.trim() === "") {
      errorldiscr.innerHTML = "description is required";
      errorldiscr.classList.add('errormessage');
      e.preventDefault();
    }
    // else if(discrp.value.lenght < 10 || discrp.value.lenght > 200){
    //   errorldiscr.innerHTML = "Description must be between 10 and 200 characters.";
    //   errorldiscr.style.color = 'red';
    //   errorldiscr.style.fontSize = '2rem';
    //   errorldiscr.style.textAlign = "center";
    // }
  });
}


const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});








// model
const modalBtn = document.querySelector(".btncll");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});



