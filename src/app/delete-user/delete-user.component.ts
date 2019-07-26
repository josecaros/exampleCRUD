import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(id: string){
    this.userService.deleteUser(id).subscribe((response: any)=>{
      console.log(response);
    },err=> console.error(err));
  }

}
