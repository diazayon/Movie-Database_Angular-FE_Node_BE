import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-topratedtv',
  templateUrl: './topratedtv.component.html',
  styleUrls: ['./topratedtv.component.css']
})
export class TopratedtvComponent implements OnInit {

  public posts: any ;
  public postsFormatted: any;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchPopular();
  }

  fetchPopular(){
    this.postsService.gettopRatedTV().subscribe(res => {
      this.posts = res;
      this.postsFormatted = [];
      var j = -1;

      for (var i = 0; i < this.posts.length; i++) {
          if (i % 6 == 0) {
              j++;
              this.postsFormatted[j] = [];
              this.postsFormatted[j].push(this.posts[i]);
          }
          else {
              this.postsFormatted[j].push(this.posts[i]);
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
