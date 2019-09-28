import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  isLoggedIn: Boolean;
  username: string;

  constructor(private router: Router, private authService: AuthService) { 
    this.username = this.authService.getUserName();
  }  

  ngOnInit() {        
    this.authService.isLoggedIn().subscribe(flag => {
      this.isLoggedIn = flag;      
    });   
  }

  logout(){
    this.authService.logout();    
    this.router.navigateByUrl('');
  }
}
