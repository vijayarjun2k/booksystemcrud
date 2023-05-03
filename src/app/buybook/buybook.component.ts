import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { bookmodel } from '../bookmodel';
@Component({
  selector: 'app-buybook',
  templateUrl: './buybook.component.html',
  styleUrls: ['./buybook.component.css']
})
export class BuybookComponent implements OnInit {
  public book:bookmodel = {} as bookmodel;

  constructor(private api:ApiService,private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }

  apply(){
    this.api.buybook(this.book).subscribe((res=>{
      this.toastr.success("Book bought sucessfully!!!");
      this.route.navigate(['viewbook'])
    }))
    
  }
}
