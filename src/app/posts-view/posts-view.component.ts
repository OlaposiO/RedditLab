import { Component, OnInit } from '@angular/core';
import { AwwSubredditServiceService } from '../aww-subreddit-service.service';
import {GrandParent, Parent, Child } from '../interfaces/post';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
  postsThem:GrandParent;
  constructor(private postService:AwwSubredditServiceService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: GrandParent) => this.postsThem = { ...data }, 
      error => console.error(error)
    );
  }

}
