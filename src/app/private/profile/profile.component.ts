import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ProfileDetail } from 'src/app/core/entity/profile-detail';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileDetail : any;
  username : string | null = '';
  
  constructor(
   
    private authenticationService: AuthenticationService,
  
  ) {
    
  }

  ngOnInit(): void {
   
    this.username = localStorage.getItem('username');
    if (this.username) {
      this.authenticationService.getProfile(this.username).subscribe(res => {
        this.profileDetail = res;
      })
    }
  }






}
