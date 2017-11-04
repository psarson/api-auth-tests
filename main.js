var provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken; 
        var user = result.user; 
        console.log(user.displayName)
        
    }).catch(function (error) {          
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;    
    }); 
};  


