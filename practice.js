
//ADICIONE SEUS LINKS FIREBASE

const firebaseConfig = {
    apiKey: "AIzaSyCNgOgwfQIUMbB05EjKbkeUFxHk2BoCfNc",
    authDomain: "vamosconversar-39e61.firebaseapp.com",
    databaseURL: "https://vamosconversar-39e61-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-39e61",
    storageBucket: "vamosconversar-39e61.appspot.com",
    messagingSenderId: "525426695939",
    appId: "1:525426695939:web:ec56af919b85eab5fa9336"
  };
   
firebase.initializeApp(firebaseConfig);

function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });

  }