const {Router} = require("express");

module.exports= function ({ProductController}) {
    const router= Router();
    router.get("/", ProductController.index);
    router.get("/items", ProductController.search);    
    router.get("/items/:id", ProductController.searchProductById);
    return router;
    
}