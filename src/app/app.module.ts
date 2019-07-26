import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetUserComponent } from './get/get-user/get-user.component';
import { GetUserListComponent } from './get/get-user-list/get-user-list.component';
import { PostUserComponent } from './post-user/post-user.component';
import { PutUserComponent } from './put-user/put-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { MensajeRespuestaComponent } from './mensaje-respuesta/mensaje-respuesta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetCharacterMarvelComponent } from './get/get-character-marvel/get-character-marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    GetUserListComponent,
    PostUserComponent,
    PutUserComponent,
    DeleteUserComponent,
    MensajeRespuestaComponent,
    GetCharacterMarvelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MensajeRespuestaComponent]
})
export class AppModule { }
