import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  users:Array<any>;

  constructor(private _dataService: DataService){
    //Access the data service's get users method
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }

}
