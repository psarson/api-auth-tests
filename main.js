var provider = new firebase.auth.GoogleAuthProvider(); 
var user;

$(document).ready(function(){
    $("#btnSignOut").hide(); 
    $("#user-name").html("Sign In to Begin")
})


function signIn() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken; 
        user = result.user; 
        showWelcome();
        
    }).catch(function (error) {          
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;    
    }); 
};   


function signOut(){
    firebase.auth().signOut().then(function() {
        showGoodBye();
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;  
      });
}

function showWelcome(){
    $("#btnSignOut").show(); 
    $("#btnSignIn").hide();
    $("#user-name").html("Welcome " + user.displayName);
} 

function showGoodBye(){ 
    $("#btnSignIn").show(); 
    $("#btnSignOut").hide(); 
    $("#user-name").html("Sign In to Begin");
}


