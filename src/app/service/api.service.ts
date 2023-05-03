import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { bookmodel } from '../bookmodel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private router:Router) { }

  //buying book
  buybook(data:bookmodel){
    return this.http.post<bookmodel>("http://localhost:3000/posts",data)
  }

  //viewing  book
  viewbook(){
    return this.http.get<bookmodel[]>("http://localhost:3000/posts");
  }

  //delete book
  delete(id:number){
    return this.http.delete<bookmodel>("http://localhost:3000/posts/"+id);
  }

  //fetch data
  fetchdata(id:number){
    return this.http.get<bookmodel>("http://localhost:3000/posts/"+id);
  }

  //updata data
  update(data:bookmodel,id:number){
    return this.http.put<bookmodel>("http://localhost:3000/posts/"+id,data)
  }
}
