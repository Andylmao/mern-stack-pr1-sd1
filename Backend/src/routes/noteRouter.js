const router = require('express').Router()
const auth = require('../middleware/auth')
const noteCtrl = require('../controllers/noteCtrl')

router.route('/')
    .get(auth, noteCtrl.getNotes)
    .post(auth, noteCtrl.createNote)

router.route('/:id')
    .get(auth, noteCtrl.getNote)
    .put(auth, noteCtrl.updateNote)
    .delete(auth, noteCtrl.deleteNote)

router.post('/api/gpt', async (req, res) => {
    try {
        // Tu lógica para interactuar con GPT aquí...
        res.json({ output: 'Respuesta de GPT' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
    });
module.exports = router