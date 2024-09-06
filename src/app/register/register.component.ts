import { Component, OnInit } from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {FormGroup, ReactiveFormsModule,  FormsModule,  FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{

}
