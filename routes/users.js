const express = require('express');

const router = express.Router();

const userApi=require('../controllers/v1/users_api');

router.post('/create-session',userApi.createSession);
router.post('/create', userApi.create);
router.get('/profile/:id',userApi.profile);

module.exports=router;