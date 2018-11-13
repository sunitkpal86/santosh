import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // topics=['Angular','React','Vue'];
  topic=[];
  userModel=new User('Prasant','prashant@gmail.com',7004940733,'','morning', true);
}
