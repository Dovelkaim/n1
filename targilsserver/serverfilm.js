let express=require('express');
let app=express();
app.use(express.json());
let movies = [
    {
      id: 0,
      title: "Inception",
      director: "Christopher Nolan",
      price: 40,
      isShowing: true
    },
    {
      id: 1,
      title: "Interstellar",
      director: "Christopher Nolan",
      price: 45,
      isShowing: false
    },
    {
      id: 2,
      title: "The Grand Budapest Hotel",
      director: "Wes Anderson",
      price: 35,
      isShowing: true
    },
    {
      id: 3,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      price: 30,
      isShowing: true
    },
    {
      id: 4,
      title: "Parasite",
      director: "Bong Joon-ho",
      price: 25,
      isShowing: false
    }
  ]
app.get('/',function(req,res){
res.status(200).json(movies);
});
app.get('/movies/:id',function(req,res){
    let id= +req.params.id
    for(let i =0;i<movies.length;i++){
        if(id===movies[i].id){
            res.status(200).json(movies[i]);
        }
    }
    if(id!=movies.id){
        res.status(404).send("movie not found");
    }
})
app.post('/movies',function(req,res){
let addmovie=req.body;
movies.push(addmovie);
res.status(200).send("movie added");
})

app.put('/movies/:id',function(req,res){
    let id = +req.params.id
   let index=movies.findIndex(cou=>cou.id===id);
   if(index==-1){
    res.status(404).send("error 404")
}
 movies[index]={
    id:id,
    title:req.body.title,
    director:req.body.director,
    price:req.body.price,
    isShowing:req.body.isShowing
}
res.status(200).json(movies[index])
})
app.delete('/movies/:id',function(req,res){
let id = +req.params.id
let index=movies.findIndex(film=>film.id===id)
if(id!=index){
     return res.status(204).send("movies not found");
}
movies.splice(index,1);
return res.status(200).json(movies);
})
app.get('/movie/price/below/:amout',function(req,res){
    let price=req.params.amout
    let under=movies.filter(cheap=>cheap.price<price)
    res.status(200).json(under);
})
app.get('/movies/search/title/:title',function(req,res){
let title=req.params.title;



})
app.listen(3000,()=>console.log("this server is running on the 127.0.0.1:3000"));