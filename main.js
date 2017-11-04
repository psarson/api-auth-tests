var provider = new firebase.auth.GoogleAuthProvider(); 
var user;

$(document).ready(function(){
    $("#btnSignOut").hide();
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


function showWelcome(){
    $("#btnSignOut").show(); 
    $("#user-name").html("Welcome" + user.displayName);
}


