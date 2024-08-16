// Importa el modelo de exportación desde el archivo especificado
const Export = require('../models/export.js');

// Función para obtener todas las exportaciones
const getExport = async (req, res) => {
    try {
        const exports = await Export.find();
        res.json(exports);
    } catch (error) {
        res.status(500).json({ msg: 'Error retrieving exports' });
    }
};

// Función para crear una nueva exportación
const postExport = async (req, res) => {
    const { nameProduct, price, weight } = req.body;
    const newExport = new Export({ nameProduct, price, weight });
    try {
        await newExport.save();
        res.status(201).json(newExport);
    } catch (error) {
        res.status(500).json({ msg: 'Error creating export' });
    }
};

// Función para actualizar una exportación existente
const putExport = async (req, res) => {
    const { id } = req.params;
    const { nameProduct, price, weight } = req.body;
    try {
        const updatedExport = await Export.findByIdAndUpdate(id, { nameProduct, price, weight }, { new: true });
        if (!updatedExport) {
            return res.status(404).json({ msg: 'Export not found' });
        }
        res.json(updatedExport);
    } catch (error) {
        res.status(500).json({ msg: 'Error updating export' });
    }
};

// Función para eliminar una exportación
const deleteExport = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedExport = await Export.findByIdAndDelete(id);
        if (!deletedExport) {
            return res.status(404).json({ msg: 'Export not found' });
        }
        res.json({ msg: 'Export deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Error deleting export' });
    }
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación
module.exports = {
    getExport,
    postExport,
    putExport,
    deleteExport
};