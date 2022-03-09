function signup(e){
event.preventDefault();

//console.log('working');

var email = document.getElementById('email').value; // here we are defining pur three variable that we are gonna use later to create an object 
var username = document.getElementById('username').value;
var pass = document.getElementById('password').value;

var user = { // In this line we are defining our object "user" that is going to be composed by the email, username and password value 
    email: email,
    username: username,
    password: pass,
};

var json = JSON.stringify(user); //the JSON.stringify() method converts a JavaScript object or value to a JSON string wich we are gonna use later 
localStorage.setItem(username, json); //here we are using the localStorage wich is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date and also we are using the setItem method to store our values given by the user in the input boxes of our UI
console.log('user added')

}

function loginFunc(e, RedirectHomePage){
    event.preventDefault();
    function RedirectHomePage() {
        window.location = "file:///Users/SantiagoTenango/Desktop/Git/WeeklyAssignmentPrab2/WeeklyAssignmentPrab2MainPage.html";
    }
    
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(username); //the getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){ // in this statements we are declaring the outputs that we will expect in case the user doesn't match the data in the inputs fields with the ones that are stored in the local data 
        result.innerHTML = 'wrong username';
    } else if(username == data.username && pass == data.password){
        result.innerHTML = 'logged in';
        RedirectHomePage();
    }else{
        result.innerHTML = 'wrong pasword';
    }
    
}


