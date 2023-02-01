const express = require('express');
const { getAll, getAllByUser, getByID, create, remove, update } = require('./bankAccount.controller');
const router = express.Router();

//GET ALL ---> GET
router.get('/bank-account', getAll);
//GET ALL BY USER ---> GET
router.get('/bank-account/by-user/:userAccountId', getAllByUser);
//GET BY ID ---> GET
router.get('/bank-account/:id', getByID);
//CREATE ---> POST
router.post('/bank-account', create);
//DELETE ---> DELETE
router.delete('/bank-account', remove);
//UPDATE ---> PUT
router.put('/bank-account', update);


module.exports = router;
