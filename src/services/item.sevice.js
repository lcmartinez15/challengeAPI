const axios = require("axios");

class ItemService{
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

        
        const items = res.data.results.map(item => {
            console.log(item);
            return {                
                "id": item.id,
                "title": item.title,
                "price": {
                "currency": item.currency_id,
                "amount": item.prices.prices[0].amount,
                "decimals": Number
                },
                "picture": item.thumbnail,
                "condition": String,
                "free_shipping": item.shipping.free_shipping}}
        )

        const resData= {
          "author": {
            "name": "Laura Cristina",
            "lastname": "Martinez"
          },
          categories: res.data.filters[0].values[0].path_from_root.map(item=> item.name),
          items: items
        }
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
         
          console.log(res);
          const resData= {
            "author": {
              "name": "Laura Cristina",
              "lastname": "Martinez"
            },
            item : {
              id: res.data.id,
              title: res.data.title,
              price: {
                currency: res.data.currency_id,
                amount: Number,
                decimals: Number,
              },
              picture: res.data.thumbnail,
              condition: String,
              free_shipping: res.data.shipping.free_shipping,
              sold_quantity: res.data.sold_quantity,
              description: des.plain_text
          }
        }

        return resData;
      }


}

module.exports= ItemService;