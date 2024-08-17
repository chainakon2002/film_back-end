const db = require("../models/db");

exports.createProduct = async (req, res, next) => {
    try {
      const { ItemName, price, description, restaurantsId, file} = req.body;
      
      // Validation
      if (!(ItemName && price && description  && file)) {
        return next(new Error("Please provide all required fields"));
      }
  
      const product = await db.product.create({
        data: {
          ItemName,
          price:+price,
          description,
          file 
        }
      });
  
      res.json({ msg: 'Product created successfully5555', product });
      
    } catch (error) {
      next(error);
    }
  };

  exports.getproduct = async (req, res, next) => {
    try {
      const product = await db.product.findMany();
      res.json(product);
    } catch (error) {
      next(error);
    }
  };

