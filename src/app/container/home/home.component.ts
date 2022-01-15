import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchByPatientNameForm: FormGroup;

  constructor(private router: Router) { 
    this.searchByPatientNameForm = new FormGroup({
      nameInputField: new FormControl()
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['/' + this.searchByPatientNameForm.get('nameInputField')!.value]);
    this.searchByPatientNameForm.reset();
  }

}
