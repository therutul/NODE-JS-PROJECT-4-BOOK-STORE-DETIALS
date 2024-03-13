const express=require('express')
const app=express()
const PORT=5501
const User=require("./models/user")
app.set("view engine","ejs")
app.use(express.urlencoded())

// User.create({
//     bookName: "Pride and Prejudice",
//     bookImg: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
//     bookAuthor: "Jane Austen, Anna Quindlen",
//     bookDesc: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work ....",
//     bookRating: 4.5,
//     bookPrice: "5.99$"
// })
app.get('/', async (req, res) => {
    try {
        const users = await User.find({});  // Assuming User is a model
        res.render('index', { User: users });
    } catch (err) {
        console.error(err);
        // Handle errors appropriately (e.g., render an error page)
    }
});
app.post('/insert',(req,res)=>{
    let bookName=req.body.bookName
    let bookImg=req.body.bookImg
    let bookAuthor=req.body.bookAuthor
    let bookDesc=req.body.bookDesc
    let bookRating=req.body.bookRating
    let bookPrice=req.body.bookPrice
    User.create({
        bookName:bookName,
        bookImg:bookImg,
        bookAuthor:bookAuthor,
        bookDesc:bookDesc,
        bookRating:bookRating,
        bookPrice:bookPrice
    }).then(()=>{
        console.log("Data Inserted")
        return res.redirect('/')
    }).catch((err)=>{
        console.log(err)
    })

    
})
app.post('/update',(req,res)=>{
    let bookId=req.body.ebookId
    let bookName=req.body.ebookName
    let bookImg=req.body.ebookImg
    let bookAuthor=req.body.ebookAuthor
    let bookDesc=req.body.ebookDesc
    let bookRating=req.body.ebookRating
    let bookPrice=req.body.ebookPrice
    User.findByIdAndUpdate(bookId,{
        bookName:bookName,
        bookImg:bookImg,
        bookAuthor:bookAuthor,
        bookDesc:bookDesc,
        bookRating:bookRating,
        bookPrice:bookPrice
    }).then(()=>{
        console.log("Data Updated")
        return res.redirect('/')
    }).catch((err)=>{
        console.log(err)
    })
})
app.post('/delete',(req,res)=>{
    let bookId=req.body.dbookId
    User.findByIdAndDelete(bookId).then(()=>{
        console.log("Data Deleted")
        return res.redirect('/')
    }).catch((err)=>{
        console.log(err)
    })
})
app.listen(5500)
