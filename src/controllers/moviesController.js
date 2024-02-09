const db = require('../database/models');

moviesControlador = {
    list: (req,res)=>{
        db.Movies.findAll()
            .then(function(peliculas){
                res.render('moviesList', {peliculas:peliculas})
            })
    },
    detail: (req,res) => {
        db.Movies.findByPk(req.params.id)
            .then(function(peliculas){
                res.render('moviesDetail', {peliculas:peliculas})
            })
    },
    new: (req,res) => {
        db.Movies.findAll({
            order: [['release_date', 'DESC']],
            limit: 20,
            })
            .then(function(peliculas){
                res.render('newestMovies', {peliculas:peliculas});
            })
    },
    recomended: (req, res) => {
        db.Movies.findAll({
            where: {
            rating: { [db.Sequelize.Op.gte]: 8},
        },
            order: [["rating", "DESC"],
                    ['release_date', 'DESC']],
            limit : 5
        })
            .then(function(peliculas){
                res.render('recommendedMovies', {peliculas:peliculas});
            })
        }

}

module.exports = moviesControlador;