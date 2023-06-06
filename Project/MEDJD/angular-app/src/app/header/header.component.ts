import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../auth/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.loginService.logout();
  }

}
