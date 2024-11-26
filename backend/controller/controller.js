import Book from '../model/bookmodal.js';

export async function getBooks(req,res){
  try {
      const book= await Book.find()
      res.status(200).json(book)
  } catch (error) {
    console.log("Error :",error);
    res.status(500).json(error);
  }
}