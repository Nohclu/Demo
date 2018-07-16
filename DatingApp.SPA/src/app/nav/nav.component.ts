import { Component, OnInit } from '@angular/core';
import { logging } from '../../../node_modules/protractor';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      console.log('good succ');
    }, error => {
      console.log('no succ');
    });
    }

  logout() {
      this.authService.userToken = null;
      localStorage.removeItem('token');
      console.log('logged out');
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

}
