const express = require('express');
const router =express.Router();

router.use(express.json());

const model = require('../model/model')
router.use(express.urlencoded({extended:true}));

//GET
router.get('/', async(req, res) => {
    try {
        const data = await model.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('Not Found');
    }
});

// GET by ID
router.get("/:id", async (req, res) => {
    try {
        const data = await model.findById(req.params.id);
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send('Not Found');
        }
    } catch (error) {
        console.error('Error getting data:', error);
        res.status(500).send('Internal Server Error');
    }
});


//POST
router.post("/add",async(req,res) => {
    try{
        var item = req.body;
        const data = new model(item); //new model 
        const saved = data.save();//save data
        res.status(200).send('Post Successful');
        }
        catch{
            res.status(404).send('Not Found');
        }

});

//PUT (Update)
router.put("/edit/:id", async(req, res) => {
    try {
        const updatedData = await model.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).send('Update Successful');
    } catch {
        res.status(404).send('Not Found');
    }
});


// DELETE
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedData = await model.findOneAndDelete({ _id: req.params.id });
        if (deletedData) {
            res.status(200).send('Delete Successful');
        } else {
            res.status(404).send('Not Found');
        }
    } catch (error) {
        console.error('Error deleting:', error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router ;