var firebaseConfig = {
  apiKey: "AIzaSyCmq8KmqolW85TCnZA674l5F830X4ToMD0",
  authDomain: "pruebafirebasehtml.firebaseapp.com",
  projectId: "pruebafirebasehtml",
  storageBucket: "pruebafirebasehtml.appspot.com",
  messagingSenderId: "451245611307",
  appId: "1:451245611307:web:823d008672f002b4098d6e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const docRef = firestore.collection("samples/sandwichData");
const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#latestHotDogStatus");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
  const textToSave = inputTextField.value;
  console.log("I am going to save " + textToSave + " to Firestore");
  docRef.set({
    hotDogStatus: textToSave
  }).then(function(){
    console.log("Status saved!");
  }).catch(function (error)){
    console.log("Got an error: ", error)
  });
})
