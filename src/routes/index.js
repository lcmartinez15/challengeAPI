const cors = require("cors");
const express = require("express");
const { route } = require("express/lib/application");
const helmet = require("helmet");
require("express-async-errors");
const {NotFoundMiddleware} = require("../middlewares");

module.exports= function({ItemRoutes}){
    const router= express.Router();
    const apiRoutes= express.Router();

    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet());

    apiRoutes.use("/", ItemRoutes);
    router.use("/api/", apiRoutes);
    router.use(NotFoundMiddleware);
    return router;

}