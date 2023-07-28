console.log("Hello World!");

function alertTheUser() {
  console.log("alertTheUser() << ");
  alert("STOP SLEEPING AND START WORKING");
  console.log("alertTheUser() >> ");
}


function pops(){
  var i = 1;
  while (i <= 10) {
    console.log(i);
    alert(i);
    i++;
  }
  
}

function takeInput(){
  var name = prompt("Enter your name");
  console.log("takeInput() >> "+name);
}

