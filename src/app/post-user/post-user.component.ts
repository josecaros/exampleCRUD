import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UserService } from '../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { MensajeRespuestaComponent } from '../mensaje-respuesta/mensaje-respuesta.component';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  model: Usuario = {first_name:'',job:''}
  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.model);
    this.userService.createUser(this.model).subscribe((response: any)=>{
      console.log(response);
      const modal = this.modalService.open(MensajeRespuestaComponent);
      modal.componentInstance.id=10;
      modal.result.then(
        this.handleModalToDoClose.bind(this),
        this.handleModalToDoClose.bind(this)
      )
    })
  } 
  handleModalToDoClose(){
    console.log("close")
  }

}
