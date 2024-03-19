const { NovelNestModel } = require("../model/model");
const getAllBooks = async (req, res) => {
    try{
        const Bookdata = await NovelNestModel.find({});
       
        res.status(200).json({data:Bookdata});
       
    }catch(err){
       res.status(500).send('Internal server eror ')
    }
  
};

const Addbook = async (req, res) => {
    try{
        const { bookname, booktype,authorname } = req.body;
        const StoreBook = await NovelNestModel.create({ bookname, booktype,authorname });
        res.status(201).send("Data created ");
    }catch(err){
       res.status(500).send('Internal server error')

    }
 
};

module.exports = { getAllBooks, Addbook };
