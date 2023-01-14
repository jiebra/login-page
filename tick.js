var form =document.getElementById("form")
var userName =document.getElementById("username")
var email =document.getElementById("email")
var password =document.getElementById("password")
var password2 =document.getElementById("password2")
var buttoni=document.getElementById("button")
buttoni.addEventListener("mouseenter",mouseova)
form.addEventListener("submit", checkInputs);

function checkInputs(e){
    e.preventDefault();
    var usernameValue =userName.value.trim() //trim method remove white space from a string
    var emailValue= email.value.trim() 
    var passwordValue =password.value.trim() 
    var password2Value = password2.value.trim()
    
    if (usernameValue===''){
        //show error
        //add error class
        //create error function
        setErorFor(userName, 'Username cannot be blank')
        
    }else{
        //add success class
        
   setsucesfor(userName)
    }
    //for email
    let regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailValue ===''){
    
        setErorFor(email, 'Email cannot be blank')
    } else if (!emailValue.match(regex)){
        
        setErorFor(email, 'Invalid email')
    }else{
        setsucesfor(email)
    }
    //if statement for password check...............................................................//
    //let paswordChec =/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    if(passwordValue ===''){
        setErorFor(password, 'Password cannot be blank')
    
    }else{
        setsucesfor(password)
    }
    //if statement for password 2 check
    if(password2Value ===''){
        setErorFor(password2, 'Password Check cannot be blank')
    
    }else if(passwordValue !== password2Value ){
        setErorFor(password2, 'Password does not match')
    }else{
        setsucesfor(password2)
    }
}
//...............................................................................................//
function setErorFor(input, message){
    var formControl = input.parentElement; //to target form control div
    var small =formControl.querySelector('small')
    small.innerText = message;
    //add error class
    formControl.className = 'fom-control error';

}

function setsucesfor(input){
    var formControl = input.parentElement;
    formControl.className ='fom-control succes';
}

function mouseova(){
    var usernameValue =userName.value.trim() 
    var emailValue= email.value.trim() 
    var passwordValue =password.value.trim() 
    var password2Value = password2.value.trim()
    if (usernameValue===''){
        //show error
        //add error class
        //create error function
       check()
       setErorFor(userName, 'Username cannot be blank')
    }else{
        //add success class
        setsucesfor(userName)
    }
    if(passwordValue ===''){
        check()
        setErorFor(password, 'Password cannot be blank')
    }else{
        setsucesfor(password)
    }
    //if statement for password 2 check
    if(password2Value ===''){
        check()
        setErorFor(password2, 'Password Check cannot be blank')
    
    }else if(passwordValue !== password2Value ){
        setErorFor(password2, 'Password does not match')
    }else{
        setsucesfor(password2)
    }
   // let regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailValue ===''){
    //check()
        setErorFor(email, 'Email cannot be blank')
    } else if (!emailValue.match(regex)){
        
        setErorFor(email, 'Invalid email')
    }else{
        setsucesfor(email)
    }
    

}
let fla =1
function check(){
    if(fla==1){
        buttoni.style.left="300px";
        fla=2
    }else if(fla==2){
        buttoni.style.left="0px";
        fla=1;
    }
}
// window.onload= cookies;
// function cookies(){
//     var username  ="";
//     if(document.cookie != "")

//     {
//         username = document.cookie.split("=")[1];
        
// document.getElementById("username").value =username
// document.getElementById("email").value =username
// document.getElementById("password").value =username
// document.getElementById("password2").value =username
// //onblur
// document.getElementById("username").onblur =setCookie;
// document.getElementById("email").onblur =setCookie
// document.getElementById("password").onblur =setCookie;
// document.getElementById("password2").onblur =setCookie;

//     }
//     function setCookie(){
//         var expiryDate =newDate()
//         expiryDate.setMonth(expiryDate.getMonth()+6);
//         var usernamee= document.getElementById('username').value;
//         var username= document.getElementById('email').value;
//         var username= document.getElementById('password').value;
//         var username= document.getElementById('password2').value;
//         document.cookie ="userName="+username+ ";expires="+ expiryDate.toGMTstring()
//     }
// }
