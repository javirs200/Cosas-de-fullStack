const router = require('express').Router()

router.get("/:id?", (req, res) => {

    console.log(req.params.id);

    if(req.params.id){
        res.send("toma el producto con ID"+req.params.id);
    }else {
        res.send("toma todos los productos")
        
    }
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        success:true,
        title:req.body.title,
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        data:req.body
    });
});

router.put("/", (req, res) => {
    res.status(200).send("Producto editado!");
});
router.delete("/:id?", (req, res) => {
    res.status(200).send("Producto borrado!. Has borrado:"+req.params.id);
});

module.exports = router;