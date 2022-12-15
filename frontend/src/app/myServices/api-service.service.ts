import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http : HttpClient) { }

  apiUrl = 'http://localhost:3000/api/crud';

  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  createData(data : any):Observable<any>{

    console.log(data, 'createapi=>');
    

    return this._http.post(`${this.apiUrl}`, data)
  }

  deleteData(id : any):Observable<any>{

    let ids = id;
        
    return this._http.delete(`${this.apiUrl}/${ids}`);

  }

  updateData(data: any, id: any):Observable<any>{

    let ids = id;
    console.log(`${this.apiUrl}/${ids}`);
    
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }


  getSingleData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

}
