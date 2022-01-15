import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Patient } from 'src/app/shared/patient.model';

@Component({
  selector: 'app-display-patient-data',
  templateUrl: './display-patient-data.component.html',
  styleUrls: ['./display-patient-data.component.css']
})
export class DisplayPatientDataComponent implements OnInit {
  patientFirstName: string = '';
  patientInformation: Patient[] = []
  private ngUnSubscribe = new Subject();

  constructor(
    private activateRoute : ActivatedRoute,
    private httpClientService: HttpClientService){
      this.activateRoute.paramMap
      .pipe(takeUntil(this.ngUnSubscribe))
      .subscribe((params: any) => {
        this.patientFirstName = params.get('patient_name');
        
        if (this.patientFirstName) {
          this.fetchPatientByName(this.patientFirstName);
        }
      })
  }

  ngOnInit(): void {
  }

  private fetchPatientByName(patientFirstName: string){
    this.httpClientService.getPatientByFirstName(patientFirstName)
    .pipe(takeUntil(this.ngUnSubscribe))
    .subscribe(response => {
      this.populateDataToList(response);
    });
    
  }

  populateDataToList(response: Patient[]){
    if (response) {
      this.patientInformation = JSON.parse(JSON.stringify(response)); //To do
      console.log(this.patientInformation);
    }
  }

  ngOnDestroy(): void {
    // this.ngUnSubscribe.next();
    // this.ngUnSubscribe.complete();
  }

}
