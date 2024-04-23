const Store=require('../models/Store');


//@descryption Get all stores

// @route GET /api/v1/stores
// @access public



exports.getStores=async(req,res,next)=>{
  try{
    const stores =await Store.find();
    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });


  

  }
};


//@descryption create all stores

// @route post /api/v1/stores
// @access public



exports.addStores=async(req,res,next)=>{
  try{
    const store=await Store.create(req.body);
    return res .status(200).json(
      {
        success:true,
        data:store
      }
    );
    

  } catch (err) {
    console.error(err);
    if(err.code===11000){
      return res.status(400).json({error:'this store already exist'})
    }
    res.status(500).json({ error: 'Server error' });


  

  }
};