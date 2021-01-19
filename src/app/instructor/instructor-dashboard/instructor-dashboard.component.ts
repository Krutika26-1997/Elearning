import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent {

  constructor(private http: HttpClient,
    private _router: Router) { }

    onSubmit(form: NgForm) {

      const C_Name = form.value.C.Name;
      const category = form.value.category;
    }
  /*ngOnInit(): void {
  }*/

}
