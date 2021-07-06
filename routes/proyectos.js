// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

//crea un usuario
// api/proyectos

//crear proyectos
router.post('/', 
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectosController.crearProyecto
);

//obtener proyectos
router.get('/', 
    auth,
    proyectosController.obtenerProyecto
);

// actualizar proyecto via ID
router.put('/:id', 
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectosController.actualizarProyecto
);

// Eliminar un Proyecto
router.delete('/:id', 
    auth,
    proyectosController.eliminarProyecto
);

module.exports = router;