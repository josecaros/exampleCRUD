import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-user-list',
  templateUrl: './get-user-list.component.html',
  styleUrls: ['./get-user-list.component.css']
})
export class GetUserListComponent implements OnInit {
  users: User[];
  notFound = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getListUser(page: string){
    this.userService.getUsers(page).subscribe((usersFromAPI: any)=>{
      this.users=usersFromAPI.data;
      console.log(usersFromAPI)
    },(error:any) => {
      console.error(error);
      this.notFound=true;
    });
  }

}
