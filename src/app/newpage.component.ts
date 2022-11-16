import { Component, OnInit,Input } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {
  @Input()  firstname!:string;
textInput!:string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.firstname);
    const textInput=(<HTMLInputElement>document.getElementById('name')).value;
    console.log(textInput);

  }
  
 
}
