if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}

module.exports={
    PORT:process.env.PORT,
    API_URL:process.env.API_URL,
    NAME: process.env.NAME
}