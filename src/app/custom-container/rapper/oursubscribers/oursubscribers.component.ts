import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice/myservice.service';

@Component({
  selector: 'app-oursubscribers',
  templateUrl: './oursubscribers.component.html',
  styleUrls: ['./oursubscribers.component.css']
})
export class OursubscribersComponent implements OnInit {
  UserList=[];
  // UserList=[{
  //   name:'Pratap',username:'pratap123'
  // },
  //  {
  //     name: 'Kamrim', username: 'kartn123'
  //   }, {
  //     name: 'Javed', username: 'jader87'
  //   }, {
  //     name: 'Shyam', username: 'kjyt56'
  //   },];
  constructor(private userdata: MyserviceService) { }

  ngOnInit() {
    // this.UserList = this.userdata.UserValues;
    this.userdata.getData().subscribe(pro => this.UserList=pro);
  }

}
