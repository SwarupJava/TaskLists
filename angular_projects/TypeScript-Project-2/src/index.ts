//let username:string = prompt("Enter user name");

let username:string|null = prompt("Enter user name");

function DisplayName(){

    if(username==null){
        document.getElementById("container").innerHTML = "Please enter user name";
    } else if(username=="") {
        document.getElementById("container").innerHTML = "Name can't be Empty"
    } else {
        document.getElementById("container").innerHTML = "Hello ! " + username;
    }
    
}