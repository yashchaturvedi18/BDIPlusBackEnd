const express = require('express');
const router = express.Router();

//GET /: redirects to the home page
router.get('/',(req,res)=>{

    const data = {
        message: 'Hello, world!',
        items: ['item1', 'item2', 'item3']
      };
    
      // Send JSON response
      res.json(data)
    
    })

    module.exports=router;  