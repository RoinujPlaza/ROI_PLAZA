function Login(event) {
   event.preventDefault(); 
   
   var username = document.getElementById("text").value;
   var password = document.getElementById("password").value;

  
   if (username !== "roinujplaza0@gmail.com" || password !== "plazawebsite") {
       alert("Incorrect username or password");
   } else {
       window.location.href = "homePAge.html";  
   }
}

function showpass(checkbox) {
   var password = document.getElementById("password");
   if (checkbox.checked == true) {
       password.setAttribute("type", "text");
   } else {
       password.setAttribute("type", "password");
   }
}