import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultOption = 'advanced';
  formData = {};

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.formData = form.value;
    form.reset();
  }

}
