import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-in-out',
  templateUrl: './new-in-out.component.html',
  styleUrls: ['./new-in-out.component.css']
})
export class NewInOutComponent implements OnInit {
  ticketForm = this.fb.group({
    date: ['', Validators.required],
    inOut: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("ticketForm", this.ticketForm.value);
    if (this.ticketForm.valid) {
      this.router.navigate(['/availability']);
    }
  }

}
