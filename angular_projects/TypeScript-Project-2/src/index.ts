let username:string|null = prompt("Enter user name");//in javascript prompt have ok and cancel button

function DisplayName(){

    if(username==null){
        document.getElementById("container").innerHTML = "Please enter user name";//cancel button
    } else if(username=="") {
        document.getElementById("container").innerHTML = "Name can't be Empty"//ok button
    } else {
        document.getElementById("container").innerHTML = "Hello ! " + username;//enter character
    }
    
}