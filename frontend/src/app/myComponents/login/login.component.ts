import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../myServices/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result => {
        if(result.success){
          console.log(result);
          alert(result.message);
          this.router.navigate(['/dashboard']);
          localStorage.setItem('token', result.token)
        }else{
          alert(result.message);
        }
      })
    }
  }

}
