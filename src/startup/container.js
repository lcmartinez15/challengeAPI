const {createContainer, asClass, asFunction, asValue}=  require("awilix");
const config = require("../config");
const app = require(".");
//services
const {ItemService}= require("../services");
//Conttrollers
const {ItemController} = require("../controllers")
//Routes
const {ItemRoutes} = require("../routes/index.routes");
const Routes = require("../routes");

const container= createContainer()

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        ItemService: asClass(ItemService).singleton()
    })
    .register({
        ItemController: asClass(ItemController.bind(ItemController)).singleton()
    })
    .register({
        ItemRoutes: asFunction(ItemRoutes).singleton()
    })
    
module.exports= container;