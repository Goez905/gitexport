
const express = require('express');

const dbConnection = require('../database/config');

require('dotenv').config();


const { getExport, postExport,putExport, deleteExport } = require('../Controllers/exportController.js');

// Define la clase del servidor
class Server {
    constructor() {
        // Inicializa una instancia de Express
        this.app = express();
        
        this.pathExport = '/api/export';

        // Llama a los métodos para configurar el servidor
        this.listen();
        this.dbConnection();
        this.route();
    }

    // Método para conectar a la base de datos
    async dbConnection() {
        // Llama a la función de conexión a la base de datos
        await dbConnection();
    }

    // Método para configurar las rutas y middleware
    route() {
        
        this.app.use(express.json());
        
        this.app.get(this.pathExport, getExport);
        this.app.post(this.pathExport, postExport);
        this.app.put(this.pathExport, putExport);
        this.app.delete(this.pathExport, deleteExport);
        
        
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
}


module.exports = Server;
