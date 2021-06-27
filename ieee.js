function store(){
  localStorage.setItem('a',a.value);
  localStorage.setItem('b',b.value);
}
function ey(){
  window.open("index.html");
}


function validate() {
  let username = document.getElementById('j').value;
  let password = document.getElementById('t').value;
  var rt = localStorage.getItem('a');
  var hg = localStorage.getItem('b');

    if(username == rt && password == hg) {
        window.open("welcome.html");
    }
    else {
        alert('Login Failed.');
    }
}
function show(){
  document.getElementById('q').innerHTML = 'Welcome to IEEE NITP '+localStorage.getItem('a');
}
