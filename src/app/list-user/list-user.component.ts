import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

constructor(public cs:CrudService) {
  this.fetchAllUsers();
}

ulist:any=[];

fetchAllUsers()
{
  this.cs.getAllUsers().subscribe(res => { this.ulist=res; });
}

removeInfo(did:number)
{
  if(confirm("Are you delete this user?"))
  {
    this.cs.deleteUser(did).subscribe(() => {this.fetchAllUsers();}); 
  }
}

}