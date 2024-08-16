const { Schema, model } = require('mongoose');

const ExportSchema = Schema({
    nameProduct: {
        type: String,
        required: [true, "The product name is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "The price is required"],
        min: [0, "The price must be greater than 0"],
    },
    weight: {
        type: Number,
        required: [true, "The weight is required"],
        min: [0, "The weight must be greater than 0"],
    },
});

// Exporta el modelo de exportación
module.exports = model('Export', ExportSchema, 'exports');
