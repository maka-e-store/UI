import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isSearchActive: boolean= false;
  ngOnInit(){
    console.log('navbar');
  }
  constructor() {}

  searchAction(){
    if(this.isSearchActive){
      this.isSearchActive = false;
    }else{
      this.isSearchActive = true;
    }
  }

}
