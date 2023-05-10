import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-name-editer',
  templateUrl: './name-editer.component.html',
  styleUrls: ['./name-editer.component.css'],
})
export class NameEditerComponent {
  angform: any;

  // Without Grou We Define Here (=)
  FirstName = new FormControl(' ', Validators.required);
  LastName = new FormControl(' ', Validators.required);
  Age = new FormControl(' ', Validators.required);
  phnone = new FormControl(' ', Validators.required);

  // PhoneNumber = new FormControl('077848484', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]);

  // CreateBaicForm(){
  //   this.angform = new FormGroup ({
  //     FirstName   : new FormControl("Karunakaran"),
  //     LastName    : new FormControl("Vishnu"),
  //     Age         : new FormControl(25),
  //     PhoneNumber : new FormControl('077848484'),
  //         })
  //       }
}
