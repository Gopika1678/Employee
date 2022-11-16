import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { NewpageComponent } from './newpage/newpage.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Details';
  registerForm!:FormGroup;
  submitted=false;
  name:string='';
  loading=false;


  constructor(private formBuilder:FormBuilder) {}
  ngOnInit() {
    this.registerForm=this.formBuilder.group({
name:"",
      firstname:['',Validators.required],
      address:['',Validators.required],
      date:['',Validators.required],
      role:['',Validators.required],
      phone:['',Validators.required],
      radio:['',Validators.required]
    })
  }
  get n() {return this.registerForm.controls}
  onSubmit() {
this.submitted=true;

if(this.registerForm.invalid) {
  alert("fields are required");
return;
}

else {
  alert("success");
  window.open('/newpage');
  
  const textInput= (<HTMLInputElement>document.getElementById('name')).value;
  console.log(textInput);
  
 // alert(textInput);
  

  
}
 
  }

}
