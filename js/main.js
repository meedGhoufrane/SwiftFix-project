const  navmobile = document.querySelector('.navmobile');


function showdropdownlist(){
    navmobile.classList.toggle('is-active');
};


// search button
function showserchiputs(){
    var inputserch = document.getElementById('input-srch');

    if(inputserch.style.display === "none"){
      inputserch.style.display = 'block';
      inputserch.style.transition = ".2s linear"

    }else{
      inputserch.style.display = 'none';
      inputserch.style.transition = '.2s linear';
    }

}




















// validation





 let myform = document.getElementById('from');

  myform.addEventListener('submit', function(e){ 
    
    var errorlastname = document.querySelector('.lastname-error');
    var errorgmail = document.querySelector('.gmail-error');
    var errorldiscr = document.querySelector('.description-error');


    let firstname = document.getElementById('first-name');
    // let myregex = /^[a-zA-Z]+$/;

    if(firstname.value.trim() === ""){
        let errorfirstname = document.getElementById('firstnm-error');
        errorfirstname.innerHTML = "first Nanme is required";
        errorfirstname.style.color = 'red';
        e.preventDefault();
    }
  });






