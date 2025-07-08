// index.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// 🔐 Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDk8V1gmkMYQkvMfyHluRLRm-z6AcWapf4",
  authDomain: "torocafe-78491.firebaseapp.com",
  projectId: "torocafe-78491",
  storageBucket: "torocafe-78491.firebasestorage.app",
  messagingSenderId: "277196893553",
  appId: "1:277196893553:web:3dc51a57e8b6a940251ad0",
  measurementId: "G-J69K463VYJ"
};

//  Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Función para guardar un pedido
async function guardarPedido() {
  try {
    const docRef = await addDoc(collection(db, "pedidos"), {
      cliente: "Luis Pérez",
      productos: [
        { nombre: "Café", cantidad: 1, precio: 30 },
        { nombre: "Galleta", cantidad: 2, precio: 15 }
      ],
      total: 60,
      metodoPago: "efectivo",
      fecha: new Date()
    });
    console.log("Pedido guardado con ID:", docRef.id);
  } catch (e) {
    console.error("Error al guardar pedido:", e);
  }
}

// Llamada de prueba
guardarPedido();
