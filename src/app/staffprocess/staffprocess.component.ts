
import { Component, OnInit } from '@angular/core';
// import * as jquery from 'jquery';
// import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

export { };
declare global {
  interface Window {
    Calendly: any;
  }
}
declare var preInitCalendly: Function;


@Component({
  selector: 'app-staffprocess',
  templateUrl: './staffprocess.component.html',
  styleUrls: ['./staffprocess.component.css']
})
export class StaffprocessComponent implements OnInit {
  // url = 'https://calendly.com/my_calendly_location';
  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth'
  // };

  constructor() { }

  ngOnInit(): void {
    // preInitCalendly();
    // window.Calendly.initInlineWidget({
    //   url: this.url,
    //   parentElement: document.querySelector('.calendly-inline-widget'),
    //   prefill: {}
    // });

  }

}