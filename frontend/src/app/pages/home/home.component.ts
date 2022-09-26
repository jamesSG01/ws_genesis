import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    console.log(AOS);
  //   $(".navbar .nav-link").on('click', function(event){
  //     var hash = this.hash;
  //     if (this.hash !== "") {
  //         event.preventDefault();
  //         $('html, body').animate({
  //             scrollTop: $(hash).offset().top
  //         }, 1000, function(){
  //             window.location.hash = hash;
  //         });
  //     } 
  // }); 
    //end of fx
  }
}
