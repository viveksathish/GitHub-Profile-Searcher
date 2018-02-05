import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any;
  username: string;
  trustedDashboardUrl : SafeUrl;
  trustedRepoUrl : SafeUrl;

  constructor(private _githubService: GithubService,
              private sanitizer: DomSanitizer) {
      this.user = false;
   }

   ngOnInit() {
    
  }

   searchUser() {
     this._githubService.updateUser(this.username);

     this._githubService.getUser().subscribe(user => {
      this.user = user;
      this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(user.html_url);
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      this.trustedRepoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(repos.html_url);
      console.log(repos);
    });
   }

  

}
