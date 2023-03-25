import { initializeApp } from "firebase/app"; 
const firebaseConfig = {
  apiKey: "AIzaSyAh_O3LJnGfLqDgPYiiCrB9nQW5QtD-yso",
  authDomain: "ecommerce-gql.firebaseapp.com",
  projectId: "ecommerce-gql",
  storageBucket: "ecommerce-gql.appspot.com",
  messagingSenderId: "24032880729",
  appId: "1:24032880729:web:f18caf267be4d5232b2948"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);