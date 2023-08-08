import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBR-HIYLcfO6zOhgkKudrXaPp3ymf5xcM0",
  authDomain: "food-recipe-finder-app.firebaseapp.com",
  projectId: "food-recipe-finder-app",
  storageBucket: "food-recipe-finder-app.appspot.com",
  messagingSenderId: "508506645594",
  appId: "1:508506645594:web:e9b129a5df7ac9a6dc6463",
};

const app = initializeApp(firebaseConfig);

export default app;
