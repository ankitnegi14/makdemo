import { Component, OnInit } from '@angular/core';
import { WhyUsModel } from './home.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../shared-css/static-page.css']
})
export class HomeComponent implements OnInit {
  public whyUs: WhyUsModel[] = [];
  public whyUsObj: WhyUsModel = <WhyUsModel>{};
  constructor() { }

  ngOnInit(): void {
  }



  // home component primtNg carousel content
  createWhyUseContent() {
    this.whyUsObj.Title = "Bulk booking";
    this.whyUsObj.Image = "../../assets/landing-imgs/new/Bulk booking, get group of maids.jpg";
    this.whyUsObj.Content = "Our MAK.today app allows you to book 2, 3 or up to 100 maids or cleaners for the day in just 30 seconds and tomorrow when you open your door, you will find 100 maids and cleaners standing at your doorstep infront of you, ready to serve you.";
    this.whyUs.push(this.whyUsObj);

    this.whyUsObj = <WhyUsModel>{};
    this.whyUsObj.Title = "Plan ahead / regular/ multiple booking";
    this.whyUsObj.Image = "../../assets/landing-imgs/new/Plan ahead, multiple and regular bookings.jpg";
    this.whyUsObj.Content = "Booking a maid throughout the month on an app has never been easier. The MAK.today allows you to schedule and book your cleaner or maid for multiple days throughout the month, in one booking.";
    this.whyUs.push(this.whyUsObj);

    this.whyUsObj = <WhyUsModel>{};
    this.whyUsObj.Title = "Quality – experienced / 5 star hotel maids";
    this.whyUsObj.Image = "../../assets/landing-imgs/new/Experienced & Trusted, high-quality, high-rated maids.jpg";
    this.whyUsObj.Content = "MAK.today can bring experienced 5 star hotel maids and cleaners at your doorstep to ensure quality while maids and cleaners are regularly reviewed for your viewing.";
    this.whyUs.push(this.whyUsObj);

    this.whyUsObj = <WhyUsModel>{};
    this.whyUsObj.Title = "Flexible and reliable";
    this.whyUsObj.Image = "../../assets/landing-imgs/new/Flexble and reliable services for Home or Business.jpg";
    this.whyUsObj.Content = "MAK.today caters to all your requirements.You can either create an account on our website or just download our mobile app, source the maids from multiple agencies and individual labour, and filter by various options, from those working near you. Got a party at your place? Why not bulk book multiple maids.";
    this.whyUs.push(this.whyUsObj);

    this.whyUsObj = <WhyUsModel>{};
    this.whyUsObj.Title = "Easy payment options";
    this.whyUsObj.Image = "../../assets/landing-imgs/new/Easy payment options, we like when you smile.jpg";
    this.whyUsObj.Content = "Simply pay with your mobile phone as we accept payments through debit and credit cards. Cash payment options are also available.";
    this.whyUs.push(this.whyUsObj);

    this.whyUsObj = <WhyUsModel>{};
    this.whyUsObj.Title = "24/7 service";
    this.whyUsObj.Image = "../../assets/landing-imgs/new/24_7Service.jpg";
    this.whyUsObj.Content = "At MAK.today, our aim is to go beyond basic cleaning. You can book a maid at a date and time that suits you, 24 hours a day, 7 days a week and 365 days a year.";
    this.whyUs.push(this.whyUsObj);
  }

}
