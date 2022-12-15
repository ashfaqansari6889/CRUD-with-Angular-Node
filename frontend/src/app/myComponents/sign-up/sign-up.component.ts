import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      gender: [''],
      email: [''],
      number: [''],
      password: ['']
    })
  }

  // Method to Create User

  signUp() {
    this._http.post<any>("http://localhost:3000/api/users/", this.signupForm.value).subscribe(res => {
      alert("User Registered Sucessfully");
      this.signupForm.reset();
      this.router.navigate(['']);
    },
      err => {
        alert("Some Error");
      }
    )
  }

}
