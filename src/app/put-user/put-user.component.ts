import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-put-user',
  templateUrl: './put-user.component.html',
  styleUrls: ['./put-user.component.css']
})
export class PutUserComponent implements OnInit {
  model: Usuario={first_name:'', job:''}

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(id: string){
    this.userService.actualizarUser(this.model, id).subscribe((response: any)=>
    {
      console.log(response);
    }, err => console.error(err));
  }

}
