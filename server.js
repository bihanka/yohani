require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal de prueba
app.get("/", (req, res) => {
    res.send("¡Servidor Express funcionando correctamente!");
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send("Página no encontrada");
});

// Inicia el servidor con manejo de errores
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
}).on("error", (err) => {
    console.error("Error al iniciar el servidor:", err);
});
