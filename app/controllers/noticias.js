module.exports.noticias = function(application, req, res) {

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render('noticias/noticias', {noticias: result});
    });

}

module.exports.noticia = function(application, req, res){

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, (error, result) =>{
        res.render("noticias/noticia", {noticia: result});
    });

}