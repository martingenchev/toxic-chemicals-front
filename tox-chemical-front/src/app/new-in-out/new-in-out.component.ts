import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-in-out',
  templateUrl: './new-in-out.component.html',
  styleUrls: ['./new-in-out.component.css']
})
export class NewInOutComponent implements OnInit {

  ticketForm = this.fb.group({
    date: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
