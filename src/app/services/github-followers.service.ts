import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../common/validators/data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor(http: HttpClient) {
    super('https://api.github.com/users/sakibmahmood98/followers', http);
   }
}
