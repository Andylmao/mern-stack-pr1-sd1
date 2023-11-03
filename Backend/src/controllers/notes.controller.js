const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    
    await newNote.save();
    res.json({message: 'Note Saved'});
};//sassadsad

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'})
};

notesCtrl.updateNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        date,
        author
    });
    
    res.json({message: 'Note Updated'});
};



//notesCtrl.getNotes = (req, res) => res.json({message: []});
//notesCtrl.createNote = (req, res) => res.json({message: 'Note Saved'});
//notesCtrl.getNote = (req, res) => res.json({title: 'Texto cualquiera'});
//notesCtrl.updateNote = (req, res) => res.json({message: 'Note Updated'});
//notesCtrl.deleteNote = (req, res) => res.json({message: 'Note Deleted'});
module.exports = notesCtrl;

