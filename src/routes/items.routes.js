const {Router} = require("express");

module.exports= function ({ItemController}) {
    const router= Router();
    router.get("/", ItemController.index);
    router.get("/items", ItemController.search);    
    router.get("/items/:id", ItemController.searchProductById);
    return router;
    
}