let _productService=null;

class ProductController{
    constructor({ProductService})
    {
        _productService= ProductService;
    }

    index(req,res){
        return res.send(_productService.index());
    }

    //Search Product
    async search(req, res) {        
        const { q } = req.query;
        const products = await _productService.searchProduct(q);
        return res.status(201).send(products);
  }
   //Search Product by Id
   async searchProductById(req, res) {   
    const { id } = req.params;
    const products = await _productService.searchProductById(id);
    return res.status(201).send(products);
}
}
module.exports= ProductController;