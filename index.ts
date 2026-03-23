import { Server as Engine } from "@socket.io/bun-engine";
import { Server } from "socket.io";
import type { ServerWebSocket } from 'bun';
import { Database } from "bun:sqlite";

const io = new Server();
const engine = new Engine({
    path: "/socket.io/",
});

io.bind(engine);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
    socket.on('login-req', (loginFormData) => {
        console.log(loginFormData);
    })
    socket.on('signup-req', (loginFormData) => {
        console.log(loginFormData);
    })
  });

const db = new Database("main.sqlite", { create: true, strict: true });
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        password_hash TEXT,
        email TEXT UNIQUE,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
`);

Bun.serve({
    port: 3000,
    idleTimeout: 30,
    async fetch(req, server) {
      const url = new URL(req.url);
  
      if (url.pathname === "/socket.io/socket.io.js") {
        return new Response(Bun.file("./node_modules/socket.io/client-dist/socket.io.js"));
      }

      // Route Socket.IO requests to the engine
      if (url.pathname.startsWith("/socket.io/")) {
        return engine.handleRequest(req, server);
      }
  
      // Serve static files from the /public folder
      let path = url.pathname === "/" ? "/index.html" : url.pathname;
      const file = Bun.file(`./public${path}`);
  
      if (await file.exists()) {
        return new Response(file);
      }
  
      return new Response("Not Found", { status: 404 });
    },
    // Connect the engine's websocket handlers to Bun
    websocket: engine.handler().websocket,
  });
  console.log("running on port 3000")
