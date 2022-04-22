let _itemService=null;

class ItemController{
    constructor({ItemService})
    {
        _itemService= ItemService;
    }

    index(req,res){
        return res.send(_itemService.index());
    }

    //Search Item
    async search(req, res) {        
        const { q } = req.query;
        const products = await _itemService.searchProduct(q);
        return res.status(201).send(products);
  }
   //Search Item by Id
   async searchProductById(req, res) {   
    const { id } = req.params;
    const products = await _itemService.searchProductById(id);
    return res.status(201).send(products);
}
}
module.exports= ItemController;