import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-list';
}

users: any[];
constructor (
private usrsvc: UserService
){
this.usrsvc.list().subscribe(
users => {console.log(users); this.users = users; }
err=> { console.error(err);
};
}