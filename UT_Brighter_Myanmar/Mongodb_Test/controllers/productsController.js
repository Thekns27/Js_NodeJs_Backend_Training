const { ObjectId } = require('mongodb');

const db = require('../utils/db').getConn();

const all = (req, res) => {
  let products =[];
  db.collection('products')
  //.find().project({name:1,price:1,_id:0 }) // to get specific fields
  //.find({price:{$nin:[3000,4000]}}).forEach(product => products.push(product))
  //.find({$and:[{price:{$gte:3000}},{price:{$lte:6000}}]}).forEach(product => products.push(product))
  //.find$or([{price:3000},{price:7000}])
  //.find({$nor:[{price:3000},{price:7000}]}).forEach(product => products.push(product))
  //.find ({price:{$not:{$in:[3000,4000]}}).forEach(product => products.push(product))
  //.find ({name:{$regex:/^Shirt$/}}).forEach(product => products.push(product))
    .find().forEach(product => products.push(product))
    .then(() => {
      res.status(201).json({ con: true, msg: "All Products", result: products })
    })
    .catch((err) => {
       res.status(401).json({con:false,msg:"Products find error",result:err});
    });
};
/*************  ✨ Windsurf Command ⭐  *************/
/*******  b720d923-d294-4255-9f6b-aef8017c715f  *******/
const add = (req, res) => {
  let obj = req.body;
  obj.created = new Date();
  db.collection('products')
    .insertOne(obj)
    .then(() => {
      res.status(201).json({con:true,msg:"Product Added",result:{obj}});
    })
    .catch((err) => {
      res.status(401).json({con:false,msg:"Product Adding error",result:err});
    })
};
const modify = (req, res) => {
  let idd = req.params.id;
  let obj = req.body;

  console.log("Before Id is " + idd);

   let id = ObjectId.createFromHexString(idd);

   console.log("After Id is " + id);

  db.collection('products')
    .updateOne({_id:id },{$set:obj})
    .then(() => {
      res.status(201).json({con:true,msg:"Product Updated",result:{obj}});
    })
    .catch((err) => {
      res.status(401).json({con:false,msg:"Product Updating error",result:err});
    })
};
const drop = (req, res) => {};

const aggre = (req,res,next) => {
  let result = [];
  db.collection('products')
    .aggregate([
      // stages 1
      // stages 2
      // stages 3
      {$match : {raction:{$gte:14}}}
    ]).forEach(product => result.push(product))
      .then(() => {
        res.status(201).json({con:true,msg:"Product Aggretated",result:{obj}});
      })
      .catch((err) => {
        res.status(401).json({con:false,msg:"Product Aggregating error",result:err});
      })

};

module.exports = {
    all,
    add,
    modify,
    drop,
    aggre
};
/*
let products = [
  { name: "T-Shirt", price: 3000, colors: ["red", "green", "blue"] },
  { name: "Pants", price: 4000, colors: ["red", "green", "blue"] },
  { name: "Shoes", price: 5000, colors: ["red", "green", "blue"] },
  { name: "Hat", price: 6000, colors: ["red", "green", "blue"] },
  { name: "Shirt", price: 7000, colors: ["red", "green", "blue"] },
];

=>>>add =>>>
 let newProduct = req.body;
  products.push(newProduct);
  res.json({ con: true, msg: "New Product Added!", result: products });

=>>>Modify =>>>
   let name = req.params.name;
  let price = req.body.price;
  let foundProduct = products.find((p) => p.name === name);
  if (foundProduct) {
    foundProduct.price = price;
    res.json({ con: true, msg: "Product price Updated", result: products });
  } else {
    next(new Error("No Product with that name!"));
  }

 let name = req.params.name;
  let foundProduct = products.find((p) => p.name === name);
  if (foundProduct) {
    products = products.filter((p) => p.name != name);
    res.json({ con: true, msg: "Product Deleted!", result: products });
  } else {
    next(new Error("No Product with that name!"));
  }

  =>>>  delete >>>
 let name = req.params.name;
  let foundProduct = products.find((p) => p.name === name);
  if (foundProduct) {
    products = products.filter((p) => p.name != name);
    res.json({ con: true, msg: "Product Deleted!", result: products });
  } else {
    next(new Error("No Product with that name!"));
  }


*/