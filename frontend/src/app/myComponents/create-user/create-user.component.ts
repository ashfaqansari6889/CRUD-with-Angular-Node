import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../myServices/api-service.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private service:ApiServiceService, private router:ActivatedRoute) { }

  errormsg : any;
  successmsg : any;
  getparamid : any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');

    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res, 'res==>');
      this.userForm.patchValue({
        name : res.data[0].name,
        email: res.data[0].email,
        mobile : res.data[0].mobile,
        city : res.data[0].city,
        state : res.data[0].state
      })
      
    })

  }

  userForm = new FormGroup({
    'name': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'mobile': new FormControl('',Validators.required),
    'city': new FormControl('',Validators.required),
    'state': new FormControl('',Validators.required)
  });

  userSubmit(){
    if(this.getparamid)
    {
      console.log("update");
      
      this.userUpdate()
    }else{
      console.log("insert");
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=> {
        console.log(res,'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
        
      })
    }    
    else{
      this.errormsg = 'All Fields are Required !';
    }
  }
  }
userUpdate(){
  console.log(this.userForm.value,'updatedform');
  
  if(this.userForm.valid){
    this.service.updateData(this.userForm.value,this.getparamid).subscribe((res) => {
      console.log(res,'resupdated');
      this.successmsg = res.message;
      
    });
  }
  else{
    this.errormsg = 'All field is Required'
  }

}

}
