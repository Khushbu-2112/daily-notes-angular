import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  // data:any[]=[];
  data = [
    {start:'2020-02-05',title:'service'},
    {title:'day 2',start: '2020-03-02'},
    {title:'day 4',start: '2020-03-04'},
    {title:'day 6',start: '2020-03-06'}
  ];
  public eventsdata = new BehaviorSubject(this.data);
//  eventsobserver = this.eventsdata.asObservable();

  constructor() { }
  
 

  // getData():Observable<any[]>{
  //   this.data = [
  //     {start:'2020-02-05',title:'service'},
  //     {title:'day 2',start: '2020-03-02'},
  //     {title:'day 4',start: '2020-03-04'},
  //     {title:'day 6',start: '2020-03-06'}
  //   ];
  //   return of(this.data);
  // }


  addData(newdata){
    this.data =[...this.data,newdata]
    this.eventsdata.next(this.data);
  }

  geteventsData() {
    return this.eventsdata.asObservable()
    }
    

}
