// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase, ref, set, get,child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCYIJ5YWoDduvL66DTEi3mB9AhflKs2_L4",
    authDomain: "task-manager-3c122.firebaseapp.com",
    projectId: "task-manager-3c122",
    storageBucket: "task-manager-3c122.appspot.com",
    messagingSenderId: "378794576255",
    appId: "1:378794576255:web:f5e5d3cb6b7fbaa635b24a",
    measurementId: "G-FC7EHVNXCM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // getting ref to database services
  const db = getDatabase(app)

  document.getElementById('submit').addEventListener('click',function(e) {
    set(ref(db,'contact/'+document.getElementById('name')),{
        name:document.getElementById('name').value
    })
  })