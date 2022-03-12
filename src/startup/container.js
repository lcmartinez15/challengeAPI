const {createContainer, asClass, asFunction, asValue}=  require("awilix");
const config = require("../config");
const app = require(".");
//services
const {ProductService}= require("../services");
//Conttrollers
const {ProductController} = require("../controllers")
//Routes
const {ProductRoutes} = require("../routes/index.routes");
const Routes = require("../routes");

const container= createContainer()

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        ProductService: asClass(ProductService).singleton()
    })
    .register({
        ProductController: asClass(ProductController.bind(ProductController)).singleton()
    })
    .register({
        ProductRoutes: asFunction(ProductRoutes).singleton()
    })
    
module.exports= container;