import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {GrandParent} from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class AwwSubredditServiceService {
  apiUrl = 'https://www.reddit.com/r/aww/.json';
  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get<GrandParent>(`${this.apiUrl}`)
}

}
