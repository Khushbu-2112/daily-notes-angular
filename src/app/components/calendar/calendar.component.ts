import { Component, OnInit } from '@angular/core';
import { Calendar } from "@fullcalendar/core";
import daygridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { CalendarService } from '../../services/calendar.service';

import interactionPlugin from "@fullcalendar/interaction";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarEvents:any[]=[];

  constructor(private ser:CalendarService) { }

  ngOnInit() {
    var calendardiv:HTMLElement = document.getElementById('calendar');
    this.ser.geteventsData().subscribe(data => {
   calendardiv.innerHTML = null;
      //console.log(data);
      this.calendarEvents=data;
      var calendar = new Calendar(calendardiv,{
        plugins:[daygridPlugin,bootstrapPlugin,interactionPlugin],
        themeSystem:'bootstrap', 
        bootstrapFontAwesome:{
          prev:'fa-chevron-left',
          next:'fa-chevron-right'
        } ,
        header:{
          left:'title',
          center:'dayGridMonth,dayGridWeek,dayGridDay',
          right:'today,prev,next,prevYear,nextYear'
        },
        buttonText:{
          dayGridMonth:'Month',
          dayGridWeek:'Week',
          dayGridDay:'Day',
          prevYear:'<< Year',
          nextYear:'Year >>'
        },
        events:this.calendarEvents,
        dayRender:(args)=>{
          //console.log("args",args);
          var cell:HTMLElement = args.el;
          cell.ondblclick = (ev:MouseEvent)=>{
            //console.log(args);
            
            var title = prompt('Enterv event Title');
            if(title=="")
              return;
              //console.log(this.calendarEvents);
          //  this.calendarEvents = this.calendarEvents.concat({title:title,start:args.date})
          //  console.log(this.calendarEvents);
          this.ser.addData({title:title,start:args.date});
           //calendar.render();
           //calendardiv = null;
          }
        }
      });
      calendar.render();
    });
   
    
   
  }
 
  // dayRender(args){
  //   //console.log(args);
  //   var cell:HTMLElement = args.el;
  //   cell.ondblclick = (ev:MouseEvent)=>{
  //     //console.log(args.date);
  //     this.addEvent(args.date);
  //   }
  // }

  // addEvent(date){
  //   var title = prompt('Enterv event Title');
  //   if(title=="")
  //     return;
  //   this.calendarEvents = this.calendarEvents.concat({title:title,start:date})
  // }

}
