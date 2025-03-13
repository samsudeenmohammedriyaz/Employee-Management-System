import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

constructor(public cs:CrudService, public act:ActivatedRoute) {
  this.fetchSingleUser(this.uid);
}

uid:number=this.act.snapshot.params["id"];
ulist:any=[];
res:string="";

fetchSingleUser(did:number)
{
  this.cs.getSingleUser(did).subscribe(res => { this.ulist=res; });
}

updateInfo(i:number,d:any)
{
  this.cs.updateUser(i,d).subscribe();
  this.res="Updated Successfully";
}

}