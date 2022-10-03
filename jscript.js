function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropa')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
  if (!e.target.matches('.dropa2')) {
  var myDropdown2 = document.getElementById("myDropdown2");
    if (myDropdown2.classList.contains('show')) {
      myDropdown2.classList.remove('show');
    }
  }
  if (!e.target.matches('.dropa3')) {
  var myDropdown3 = document.getElementById("myDropdown3");
    if (myDropdown3.classList.contains('show')) {
      myDropdown3.classList.remove('show');
    }
  }
  if (!e.target.matches('.dropa4')) {
  var myDropdown4 = document.getElementById("myDropdown4");
    if (myDropdown4.classList.contains('show')) {
      myDropdown4.classList.remove('show');
    }
  }
}