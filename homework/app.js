let express = require('express');
let app=express();
app.use(express.json());
let movie = [{
    "id":1,
    "nom":"the fourth",
    "production":"marvel",
    "opus": 3,
    "durée": 2.30,
    "créateur":"stan lee"
},
{
    "id":2,
    "nom":"thunderbolts",
    "production":"marvel",
    "opus": 1,
    "durée":2,
    "créateur": "stan lee"
}
]
app.get('/', function(req,res){
    res.status(200).json(movie);
})
app.post('/:id',function(req,res){
    let id=req.params.id;
    let film={
        'id':id,
        "nom":req.body.nom,
        'opus':3,
        'durée':2,
        "créateur":"stan lee"

    }
    movie.push(film);
    res.status(200).send("film added succed");
})
app.get("/longest",function(req,res){
for(let i =0;i<movie.length;i++){
    if(movie[i].id>1){
        res.status(200).json(movie[i]);
    }
}
})
app.delete('/delete/:id',function(req,res){
let index = +req.params.id;
for(let i=0;i<movie.length;i++){
    if(index==movie[i].id){
     movie.splice(index,1);
    }
}
res.status(200).json(movie);
});

app.listen(3000);
