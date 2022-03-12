const axios = require("axios");

class ProductService{
    index(){
        return {
            message:"product ready"
        }
    }

    async searchProduct(q) {
        console.log("consulta a mercado libre" + q);
        const config = {
            headers: {
              Accept: "application/json, text/plain, */*",              
              "Content-Type": "application/json;charset=utf-8",
            },
          };

        const res = await axios.get(
          "https://api.mercadolibre.com/sites/MLA/search?q=" +
          q,
          config
        );

        const resData = res.data.results.map(item => {
            console.log(item);
            return {
                    "id": item.id,
                    "title": item.title,
                    
            }
        })
        return resData;
      }

      async searchProductById(id) {
        console.log("consulta a mercado libre"+id);
        const config = {
            headers: {
              Accept: "application/json, text/plain, */*",              
              "Content-Type": "application/json;charset=utf-8",
            },
          };

        const res = await axios.get(
          "https://api.mercadolibre.com/items/" +
            id,
            config
        );
        
        const des = await axios.get(
            "https://api.mercadolibre.com/items/"+id+"/description",
            config
          );
         
        return res.data;
      }


}

module.exports= ProductService;