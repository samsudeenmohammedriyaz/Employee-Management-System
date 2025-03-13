import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(public cs:CrudService, public rt:Router) {}

  userObj = {name:'',email:'',phone:''};

  addInfo()
  {
    this.cs.addUser(this.userObj).subscribe();
    this.rt.navigate(['list']);
  }

}