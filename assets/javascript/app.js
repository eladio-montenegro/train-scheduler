//setup firebase database

var firebaseConfig = {
    apiKey: "AIzaSyCsDYMyTtmpUxv_WnqCIKqbtl8tHr4WBNg",
    authDomain: "train-scheduler-671e3.firebaseapp.com",
    databaseURL: "https://train-scheduler-671e3.firebaseio.com",
    projectId: "train-scheduler-671e3",
    storageBucket: "train-scheduler-671e3.appspot.com",
    messagingSenderId: "1036719751741",
    appId: "1:1036719751741:web:f62107e67722a53c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  var database = firebase.database();


  $("body").on("click", "#submit-id" , function(event) {
  
  event.preventDefault();

  // Get the input values
  var trainName = $( "#trainNameId" ).val().trim();
  var destId = $( "#destId" ).val().trim();
  var firstTrainTime = $("#firstTrainId").val().trim();
  var freqId = $( "#freqId" ).val().trim();


  
  
    
    database.ref().push(

  {
    trainName: trainName,
    destination: destId,
    firstTrainTime: firstTrainTime,
    frequency: freqId,
    arrival: nextTrain,
    minutesAway: minutesAway,
  });


  });



//






//moment.js stuff.  This part is going to be rough 




