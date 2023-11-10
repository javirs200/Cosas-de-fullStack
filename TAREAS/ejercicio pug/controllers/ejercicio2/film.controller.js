const getFilm = require('../../utils/fetchFilms')

const getTitle = async (req, res) =>{

    let details = await getFilm(req.params.title)
    if(details != null){
        res.render('./ejercicio2/film',{
            detalles : details
        })
    }else{
        res.status(404).json({message :"Film not found"})
    }   
}

module.exports = {
    getTitle
}

