const db = require('../database/models');

genresControlador = {
    list: (req, res) => {
        db.Genres.findAll({
            order:[["name","ASC"]]
        })
            .then((genres) => {
            res.render("genresList", {genres:genres});
            })
    },
    detail: (req, res) => {
        db.Genres.findByPk(req.params.id)
            .then((genres) =>
            res.render("genresDetail", {genres:genres})
        )
    }
}

module.exports = genresControlador;