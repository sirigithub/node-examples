console.log(' $$$$$ in products.js');
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate 

console.log(' initialised express');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))
console.log(' initialised body parser');
//build the REST operations at the base for blobs
//this will be accessible from http://127.0.0.1:3000/products if the default route for / is left unchanged
//router.route('/products')
    //GET all products
router.get('/',function(req, res) {
        console.log('in get all products and query parameter is :'+req.query);
    //retrieve all blobs from Monogo
        mongoose.model('productCatalog').find({}, function (err, products) {
              if (err) {
                  return console.error(err);
              } else {
                  console.log("fetched products "+products.length);
                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                  res.format({
                      //HTML response will render the index.jade file in the views/blobs folder. We are also setting "blobs" to be an accessible variable in our jade view
                    html: function(){
                        
                        res.render('products/index', {
                              title: 'All my products',
                              "products" : products
                          });
                    },
                    //JSON response will show all blobs in JSON format
                    json: function(){
                        res.json(infophotos);
                    }
                });
              }     
        });
        
        
    });

router.get('/:id',function(req, res) {
    console.log(" get product with sku id");
    console.log('*** In fetch by sku ' + req.params.id);
    var productId =req.params.id;
    //find the ID in the Database
    mongoose.model('productCatalog').find({'sku':productId}, function (err, product) {
        //if it isn't found, we are going to repond with 404
        if (err) {
            console.log(productId + 'ProductId was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.format({
                html: function(){
                    next(err);
                 },
                json: function(){
                       res.json({message : err.status  + ' ' + err});
                 }
            });
        } else {
            //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
            console.log(product);
                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                  res.format({
                      //HTML response will render the index.jade file in the views/blobs folder. We are also setting "blobs" to be an accessible variable in our jade view
                    html: function(){
                        
                        res.render('products/product', {
                              title: 'product for sku',
                              "products" : product
                          });
                    },
                    //JSON response will show all blobs in JSON format
                    json: function(){
                        res.json(infophotos);
                    }
                });
        } 
    });    
    });
module.exports = router;
