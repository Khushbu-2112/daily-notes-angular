import { Component, OnInit } from '@angular/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarService } from '../../services/calendar.service';
import bootstrapPlugin from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction";
import  listDayPlugin from "@fullcalendar/list";
import  listWeekPlugin from "@fullcalendar/list";
import { renderDateCell } from '@fullcalendar/core';
import { MatDialog,MatDialogRef } from "@angular/material/dialog";
import { CustomDialogComponent } from "../custom-dialog/custom-dialog.component";
import { filter } from "rxjs/operators";
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-calendartry',
  templateUrl: './calendartry.component.html',
  styleUrls: ['./calendartry.component.css']
})
export class CalendartryComponent implements OnInit {


  customDialogRef: MatDialogRef<CustomDialogComponent>;

  calendarPlugins=[dayGridPlugin,listWeekPlugin,listDayPlugin,bootstrapPlugin];
  calendarEvents:any[]=[];

  constructor(private ser:CalendarService,private dialog: MatDialog) { }

  f:boolean=false;
   dayRender(args){
    var cell:HTMLElement = args.el;
    cell.ondblclick = (ev:MouseEvent)=>{
      this.addEvent(args.date);
      // if(this.f==true)
      // {
      //   cell.style.background="#fae3eb";
      //   cell.style.border='1px solid darkblue';
      //   this.f = false;
      // }
    }
  }

  //with promt

  // addEvent(date){
  //   var title = prompt('Enterv event Title');
  //   if(title==null)
  //     return false;
  //   else
  //     {
  //       this.calendarEvents = this.calendarEvents.concat({title:title,start:date});
  //       return true;
  //     }
  // }

  //with custom dialog
  addEvent(date){
    this.customDialogRef = this.dialog.open(CustomDialogComponent,{
      hasBackdrop:false,
      // maxWidth:"50%"
    });

    this.customDialogRef
    .afterClosed()
    .pipe(filter(name => name))
    .subscribe(name => {
     if(name)
     {
       this.calendarEvents =  this.calendarEvents.concat({ title:name,start:date });
      //console.log(this.calendarEvents);
      //this.f=true; 
     }
    });  
   
  }

  ngOnInit() {
    this.ser.geteventsData().subscribe(data => this.calendarEvents=data);
  }

  // <a (click)='del(this)' style='float:left;margin-left:5px;'><i class='fas fa-trash-alt text-danger'></i></a><a style='float:left;margin-left:5px;'><i class='fas fa-edit text-success'></i></a>
  // <span style='color:green;float:right;margin-right:15%;'><i class='fas fa-circle'></i></span>
}
