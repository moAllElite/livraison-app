import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {FormGroup, ReactiveFormsModule,  FormsModule,  FormControl, Validators} from "@angular/forms";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [  ReactiveFormsModule,
    FormsModule,
    NgIf,
    AsyncPipe,
    RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  public formGroup !:FormGroup ;
  public disableBtn:WritableSignal<Boolean>  = signal(false);
  
  // on Initialize we create a new formaular to register new leads
 ngOnInit(): void {
   this.formGroup =  new FormGroup({
    first_name: new FormControl('' , [Validators.required  ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    last_name: new FormControl('', [Validators.required]),
    city:new FormControl('',[Validators.required]),
    phone: new FormControl('',  [Validators.required ]),
    state:new FormControl('',[Validators.required]),
    company:new FormControl('',[Validators.required]),
    raison_social:new FormControl('',[Validators.required]),
    ninea:new FormControl('',[Validators.required])
 });

 this.formGroup.valueChanges
             .subscribe((changedObj: any) => {
              if(this.formGroup.valid)
                 this.disableBtn.set(false);
              else
                this.disableBtn.set(true);
             });
 }

  /**
   ** Getters pour récupérer les champs du formulaire
   *Get all informations from the fields
   * ==> first name , last name ,email , phone ,city, company, ninea
  */
  get first_name(){
    return this.formGroup.get('first_name');
  }

  get last_name(){
    return this.formGroup.get('last_name');
  }

  get email(){
    return this.formGroup.get('email');
  }

  get city (){
    return this.formGroup.get('city');
  }

  get state(){
    return this.formGroup.get('state');
  }

  get phone(){
    return this.formGroup.get('phone');
  }

  get company(){
    return this.formGroup.get('company');
  }

  get ninea(){return this.formGroup.get('ninea');}

  get raison_social(){return this.formGroup.get('raison_social');}


  buttonStatus(){
    if(this.formGroup.valid){
      return 'btn-send';
    }else{
      return 'btn btn-outline-secondary';
    }
  }
}
