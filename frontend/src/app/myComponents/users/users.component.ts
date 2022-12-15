import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../myServices/api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service:ApiServiceService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllData();
  }

  deleteID(id:any){
    console.log(id, 'deleted==>');
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res, 'deleteres==>');
      this.successmsg = res.message;
      this.getAllData();

    });
  }

  getAllData(){
    this.service.getAllData().subscribe((res)=> {
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }

}
