import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../../services/posts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  public id:any;
  public posts: any;
  public casts: any ;
  public reviews: any;
  public reviewscount: any;

  public similars: any ;
  public similarsFormatted: any;
  public recommends: any ;
  public recommendsFormatted: any;
  public safeURL: any;
  public vid: any;
  public countstor: any;



  constructor(private route: ActivatedRoute, private postsService: PostsService, private _sanitizer: DomSanitizer) { 

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getdetails();
    this.getcast();
    this.getreviews();
    this.fetchrecommend();
    this.fetchsimilar();
    this.youtube();
    this.count();
    window.localStorage.setItem('key',this.id);
  }

  count(){
    window.localStorage.setItem('key',this.id);
    this.countstor = localStorage.length;
  }

  getdetails(){
    this.postsService.movieDet(this.id).subscribe(res => {
      this.posts = res;}
    )};

  youtube(){
    this.postsService.getvideo(this.id).subscribe(res => {
      this.vid = res;
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.vid.key);
    }
    )};

  getcast(){
    this.postsService.movieCast(this.id).subscribe(res => {
      this.casts = res;}
    )};

  getreviews(){
    this.postsService.movieReviews(this.id).subscribe(res => {
      this.reviews = res;
      this.reviewscount = this.reviews.length;
    }
    )};

    
    fetchsimilar(){
      this.postsService.similarmovie(this.id).subscribe(res => {
        this.similars = res;
        this.similarsFormatted = [];
        var j = -1;
  
        for (var i = 0; i < this.similars.length; i++) {
            if (i % 6 == 0) {
                j++;
                this.similarsFormatted[j] = [];
                this.similarsFormatted[j].push(this.similars[i]);
            }
            else {
                this.similarsFormatted[j].push(this.similars[i]);
            }
          }
      });
    }

    fetchrecommend(){
      this.postsService.recommendmovie(this.id).subscribe(res => {
        this.recommends = res;
        this.recommendsFormatted = [];
        var j = -1;
  
        for (var i = 0; i < this.recommends.length; i++) {
            if (i % 6 == 0) {
                j++;
                this.recommendsFormatted[j] = [];
                this.recommendsFormatted[j].push(this.recommends[i]);
            }
            else {
                this.recommendsFormatted[j].push(this.recommends[i]);
            }
          }
      });
    }


  
    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    pauseOnFocus = true;
  
    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  
    togglePaused() {
      if (this.paused) {
        this.carousel.cycle();
      } else {
        this.carousel.pause();
      }
      this.paused = !this.paused;
    }
  
    onSlide(slideEvent: NgbSlideEvent) {
      if (this.unpauseOnArrow && slideEvent.paused &&
        (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
        this.togglePaused();
      }
      if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
        this.togglePaused();
      }
    }

}
