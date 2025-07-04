const express=require('express');
const router=express.Router();
const countriesController=require('../controllers/countriesController')

// CREATE
router.post('/',countriesController.createCountry)

// Get
router.get('/',countriesController.getAllCountries)

// UPDATE
router.put('/:id',countriesController.updateCountry)

// DELETE
router.delete('/:id',countriesController.deleteCountry)

module.exports=router;