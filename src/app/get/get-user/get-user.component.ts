import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  notFound = false;
  user: User; 
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUser(userId: string){
    this.notFound = false;
    this.user = null;

    this.userService.getUser(userId).subscribe((userFromTheAPI: any)=>{
      this.user= userFromTheAPI.data;
      console.log(userFromTheAPI);
    }, (err: any)=>{
      console.error(err);
      this.notFound=true;
    });
  }

}
