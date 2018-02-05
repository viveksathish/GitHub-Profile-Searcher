import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'c293ce70b4a6e0ce19cf';
  private client_secret = '0272f7833cec72fbbd9ebc6f28f26d792d3eddc4';


  constructor(private _http: Http) {
      console.log('Github Service is ready...');
      this.username = 'viveksathish';
   }

   getUser() {
      return this._http.get('http://api.github.com/users/'+ this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
   }

   getRepos() {
    return this._http.get('http://api.github.com/users/'+ this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
 }

  updateUser(username: string) {
    this.username = username;
  }

}
