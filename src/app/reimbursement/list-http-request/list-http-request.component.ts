import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListRequestService } from '../list-http-request.service';

@Component({
  selector: 'app-list-http-request',
  templateUrl: './list-http-request.component.html',
  styleUrls: ['./list-http-request.component.css']
})
export class ListHttpRequestComponent implements OnInit {
 
  
  allBooks: void[] = [];
  toggleAdd: boolean = false;

  
  constructor() { }

  ngOnInit(): void {
  }

}
