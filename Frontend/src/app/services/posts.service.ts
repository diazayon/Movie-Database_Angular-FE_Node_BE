import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private HttpClient: HttpClient) { }

  querySearch(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/query/" + keyword;
    return this.HttpClient.get(URL);
  }
  getCurrentMovies() {
    let URL = "http://localhost:8080/movies/current"
    return this.HttpClient.get(URL);
  }

  getPopularMovies() {
    let URL = "http://localhost:8080/movies/popular"
    return this.HttpClient.get(URL);
  }

  gettopRatedMovies() {
    let URL = "http://localhost:8080/movies/toprated"
    return this.HttpClient.get(URL);
  }

  getTrendingMovies() {
    let URL = "http://localhost:8080/movies/trending"
    return this.HttpClient.get(URL);
  }

  getPopularTV() {
    let URL = "http://localhost:8080/tv/popular"
    return this.HttpClient.get(URL);
  }

  gettopRatedTV() {
    let URL = "http://localhost:8080/tv/toprated"
    return this.HttpClient.get(URL);
  }
  
  getTrendingTV() {
    let URL = "http://localhost:8080/tv/trending"
    return this.HttpClient.get(URL);
  }

  movieDet(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/moviedetails/det/" + keyword;
    return this.HttpClient.get(URL);
  }

  movieCast(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/moviedetails/cast/" + keyword;
    return this.HttpClient.get(URL);
  }

  movieReviews(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/moviedetails/rev/" + keyword;
    return this.HttpClient.get(URL);
  }

  recommendmovie(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/moviedetails/rec/" + keyword;
    return this.HttpClient.get(URL);
  }

  similarmovie(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/moviedetails/sim/" + keyword;
    return this.HttpClient.get(URL);
  }

  getvideo(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/moviedetails/vid/" + keyword;
    return this.HttpClient.get(URL);
  }

  tvDet(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/tvdetails/det/" + keyword;
    return this.HttpClient.get(URL);
  }

  tvCast(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/tvdetails/cast/" + keyword;
    return this.HttpClient.get(URL);
  }

  tvReviews(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/tvdetails/rev/" + keyword;
    return this.HttpClient.get(URL);
  }

  recommendtv(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/tvdetails/rec/" + keyword;
    return this.HttpClient.get(URL);
  }

  similartv(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/tvdetails/sim/" + keyword;
    return this.HttpClient.get(URL);
  }

  getvideotv(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/tvdetails/vid/" + keyword;
    return this.HttpClient.get(URL);
  }

  getcastdet(id: any) {
    var keyword = id;
    let URL = "http://localhost:8080/cast/det/" + keyword;
    return this.HttpClient.get(URL);
  }

}
