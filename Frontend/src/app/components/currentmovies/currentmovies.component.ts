import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-currentmovies',
  templateUrl: './currentmovies.component.html',
  styleUrls: ['./currentmovies.component.css']
})
export class CurrentmoviesComponent implements OnInit {

  public posts: any ;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchCurrent();
  }

  fetchCurrent(){
    this.postsService.getCurrentMovies().subscribe(res => {
      this.posts = res;
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
