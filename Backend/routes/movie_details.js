const express = require('express');
const router = express.Router();
const axios = require('axios');

//Movie recommended endpoint
router.get('/rec/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=1afa3745b922ddd45ad407a3f6ae648d&language=en-US&page=1";
    
    axios.get(url).then(posts => {
        results = posts.data['results'];

        filtered = [];
        for (i = 0; i < results.length; i++) {
            var id = results[i].id;
            var title = results[i].title;
            var poster_path = results[i].poster_path;

            var temparray = {};
            temparray.id = id;
            temparray.title = title;
            temparray.poster_path = "https://image.tmdb.org/t/p/w500" + poster_path;
            
            filtered.push(temparray);
        }
        res.json(filtered);
    }).catch(err => {
        res.send(err);
    })

});

//Movie similar endpoint
router.get('/sim/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=1afa3745b922ddd45ad407a3f6ae648d&language=en-US&page=1";
    
    axios.get(url).then(posts => {
        results = posts.data['results'];

        filtered = [];
        for (i = 0; i < results.length; i++) {
            var id = results[i].id;
            var title = results[i].title;
            var poster_path = results[i].poster_path;

            var temparray = {};
            temparray.id = id;
            temparray.title = title;
            temparray.poster_path = "https://image.tmdb.org/t/p/w500" + poster_path;
            
            filtered.push(temparray);
        }
        res.json(filtered);
    }).catch(err => {
        res.send(err);
    })

});

//Movie video endpoint
router.get('/vid/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=1afa3745b922ddd45ad407a3f6ae648d&language=en-US&page=1";
    
    axios.get(url).then(posts => {
        results = posts.data['results'];

        filtered = [];
        trailer = [];
        teaser = [];
        for (i = 0; i < results.length; i++) {
            var site = results[i].site;
            var name = results[i].name;
            var type = results[i].type;
            var key = results[i].key;

            var temparray = {};
            if(type == 'Trailer'){
            temparray.site = site;
            temparray.name = name;
            temparray.type = type;
            temparray.key = "https://www.youtube.com/embed/" + key;
            trailer.push(temparray);
            }
            if(type == 'Teaser'){
                temparray.site = site;
                temparray.name = name;
                temparray.type = type;
                temparray.key = "https://www.youtube.com/embed/" + key;
                teaser.push(temparray);
            }
            if(type == null){
                temparray.site = site;
                temparray.name = name;
                temparray.type = type;
                temparray.key = "https://www.youtube.com/embed/tzkWB85ULJY";
                teaser.push(temparray);
            }
        }
        if(results.length == 0){
            var temparray = {};
            temparray.key = "https://www.youtube.com/embed/tzkWB85ULJY";
            teaser.push(temparray);
        }

        if(trailer.length <1){
            filtered = teaser;
        }else {
            filtered = trailer;
        }


        res.json(filtered[0]);
    }).catch(err => {
        res.send(err);
    })
    
});

//Movie detail endpoint
router.get('/det/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=1afa3745b922ddd45ad407a3f6ae648d&language=en-US&page=1";
    
    axios.get(url).then(posts => {
        results = posts.data;

        filtered = {};

        var title = results.title;
        var genres = results.genres;
        var spoken_languages = results.spoken_languages;
        var release_date = results.release_date;
        var runtime = results.runtime;
        var overview = results.overview;
        var vote_average = results.vote_average;
        var tagline = results.tagline;


        filtered.title = title;
        filtered.release_date = release_date;
        filtered.runtime = runtime;
        filtered.overview = overview;
        filtered.vote_average = vote_average;
        filtered.tagline = tagline;
        filtered.genres = genres;
        filtered.spoken_languages = spoken_languages;

        res.json(filtered);
    }).catch(err => {
        res.send(err);
    })
});

//Movie reviews endpoint
router.get('/rev/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/reviews?api_key=1afa3745b922ddd45ad407a3f6ae648d&language=en-US&page=1";
    
    axios.get(url).then(posts => {
        results = posts.data['results'];

        filtered = [];
        for (i = 0; i < results.length; i++) {
            var author = results[i].author;
            var content = results[i].content;
            var created_at = results[i].created_at;
            var url = results[i].url;
            var rating = results[i]['author_details'].rating;
            var avatar_path = results[i]['author_details'].avatar_path;

            var temparray = {};
            temparray.author = author;
            temparray.content = content;
            temparray.created_at = created_at;
            temparray.url = url;
            temparray.rating = rating;
            temparray.avatar_path = avatar_path;
            
            filtered.push(temparray);
        }
        res.json(filtered);
    }).catch(err => {
        res.send(err);
    })
});

//Movie cast endpoint
router.get('/cast/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=1afa3745b922ddd45ad407a3f6ae648d&language=en-US&page=1";
    
    axios.get(url).then(posts => {
        results = posts.data['cast'];

        filtered = [];
        for (i = 0; i < results.length; i++) {
            var id = results[i].id;
            var name = results[i].name;
            var character = results[i].character;
            var profile_path = results[i].profile_path;
           
            var temparray = {};
            
            if(profile_path != null){
            temparray.id = id;
            temparray.name = name;
            temparray.character = character;
            temparray.profile_path = "https://image.tmdb.org/t/p/w500" +  profile_path;
            filtered.push(temparray);
        }          
            
        }
        res.json(filtered);
    }).catch(err => {
        res.send(err);
    })
});


module.exports = router;