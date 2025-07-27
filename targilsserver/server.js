let express = require("express")
let app = express()
app.use(express.json())

let books = 
    [{
        id: '101',
        book: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        available: true
      },
      
      {
        id: '102',
        book: "ahmed",
        author: "nig",
        year: 2000,
        available: false
      },
      
      {
        id: '103',
        book: "goodbook",
        author: "diger",
        year: 2025,
        available: true
      }]

/*
app.get("/books", function (req, res) {
    res.status(200).json(books)
})
app.post("/books", function (req, res) {
    let book = {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        available: req.body.available
    }
    book.id = books.length == 0 ? 0 : books[books.length - 1].id + 1
    books.push(book)
    res.status(200).json(books)
})

app.get("/books/:id", function (req, res) {
    let index = -1;
    for (let i = 0; i < books.length; i++) {
        if (req.params.id == books[i].id) {
            index = i
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" });
        return;
    }
    res.status(200).json(books[index])
})

app.delete("/books/:id", function (req, res) {
    let idToDelete = +req.params.id
    let index = -1;// "1" === 1 false .    but "1" == 1 true 
    for (let i = 0; i < books.length; i++) {
        if (idToDelete === books[i].id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" })
        return;
    }
    books.splice(index, 1);
    res.status(200).json(books)

})

//update 
app.put("/", function (req, res) {
    let item = req.body;
    let index = -1;// "1" === 1 false .    but "1" == 1 true 
    for (let i = 0; i < books.length; i++) {
        if (req.body.id == books[i].id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" })
        return;//stop function
    }
    books[index] = item;
    res.status(200).json(books)

})*/
app.get('/books/available',function(req,res){
    let result=[];
for(let i=0;i<books.length;i++){
    if(books[i].available===true){
        result.push(books[i]);
    }
}
res.status(200).json(result);
})

app.get('/books/years/:year',function(req,res){
    let anne=+req.params.year;
            let years=books.filter(book=>book.year===anne);
            if(years.length===0){
                 res.status(404).send("no books found for this year");
            }
            res.status(200).json(years);
        })
app.get('/books/count/available',function(req,res){
let count=0;
let count2=0;
for(let i =0; i<books.length;i++){
    if(books[i].available){
        count++;
    }else{
        count2++;
    }
}
res.status(200).send(`available=${count}, unavailable=${count2}`);
});

app.get('/books/count/year-range',function(req,res){
let start=+req.query.from;
let end =+req.query.to;
let data=books.filter(book=>book.year>=start&&book.year<=end)
res.status(200).json(data);

})
app.delete('/books/before/year-range',function(req,res){
let start = +req.query.from
books=books.filter(book=>book.year>=start)
res.status(200).json(books);
})
 app.listen(3000,()=>console.log("this server is running on the port 127.0.0.1:3000"));