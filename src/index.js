const { io } = require("socket.io-client");

const WEBSOCKET_URL = "https://one-vv3870.com";

console.log("👻 GHOST ANALYZER");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("🔌 Tentative de connexion...");
console.log(`🌐 Serveur : ${WEBSOCKET_URL}`);
console.log("");

const socket = io(WEBSOCKET_URL, {
  path: "/v4/socket.io",
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 30000,
  timeout: 10000
});

socket.on("connect", () => {
  console.log("✅ WebSocket connecté");
  console.log(`🆔 Socket ID : ${socket.id}`);
  console.log("");
});

socket.on("connect_error", (error) => {
  console.log("❌ Erreur de connexion :", error.message);
});

socket.on("disconnect", (reason) => {
  console.log(`⚠️ Déconnexion : ${reason}`);
});

socket.onAny((event, ...args) => {
  console.log("📨 ÉVÉNEMENT REÇU");
  console.log("Event :", event);

  try {
    console.log(JSON.stringify(args, null, 2));
  } catch {
    console.log(args);
  }

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
});
