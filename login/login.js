function controllo() {
    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (email == "alessio.itssmartacademy.it" && password == "1234") {
        console.log("giusto")
    } else {
        console.log("aaaaaaaaaaaaaaaaa")
    }
}
function mostra(){
    let password = document.getElementById("password");
    
    if(password.type==="password"){
        password.type="text"
    }else{
        password.type="password"
    }
 }