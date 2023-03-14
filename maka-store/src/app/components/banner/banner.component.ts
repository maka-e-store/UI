import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [NgbCarouselConfig]
})
export class BannerComponent implements OnInit {
  images = [`MakaBaner3.jpeg`,`MakaBaner2.jpeg` ,`MakaBanner.jpeg`].map((n) => `https://nterasto.sirv.com/Maka/${n}`);
  ngOnInit(): void {
    console.log('Banner');
  }
  constructor(config: NgbCarouselConfig) { 
    config.interval = 10000;
		// config.wrap = false;
		// config.keyboard = false;
		// config.pauseOnHover = false;
  }

}

//https://gateway.pinata.cloud/ipfs/QmTdJ1zNurunQaBr1CBA3RiTH6Jd6tFKV41K8WJBmeLbvA?_gl=1*j8ifhn*_ga*MTYxNDk5NjM2NS4xNjc3NTMxOTQy*_ga_5RMPXG14TE*MTY3NzUzMTk0Mi4xLjEuMTY3NzUzMjU1NS42MC4wLjA.
