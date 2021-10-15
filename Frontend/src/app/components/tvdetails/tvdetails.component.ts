import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../../services/posts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css'],
})
export class TvdetailsComponent implements OnInit {
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
  closeResult: string;



  constructor(private route: ActivatedRoute, private postsService: PostsService, private _sanitizer: DomSanitizer, private modalService: NgbModal) { 

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
    this.postsService.tvDet(this.id).subscribe(res => {
      this.posts = res;}
    )};

  youtube(){
    this.postsService.getvideotv(this.id).subscribe(res => {
      this.vid = res;
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.vid.key);
    }
    )};

  getcast(){
    this.postsService.tvCast(this.id).subscribe(res => {
      this.casts = res;}
    )};

  getreviews(){
    this.postsService.tvReviews(this.id).subscribe(res => {
      this.reviews = res;
      this.reviewscount = this.reviews.length;
    }
    )};

    
    fetchsimilar(){
      this.postsService.similartv(this.id).subscribe(res => {
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
      this.postsService.recommendtv(this.id).subscribe(res => {
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
