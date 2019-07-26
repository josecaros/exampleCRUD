import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Usuario } from '../models/usuario';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = environment.apiURL + 'api/users'
  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<User>{
    const url = this.baseURL +'/'+ userId;
    return this.http.get<User>(url);
  }

  getUsers(page:string): Observable<User[]>{
    const url = '?page='+page;
    return this.http.get<User[]>(this.baseURL+url);
  }

  createUser(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseURL,usuario);
  }

  actualizarUser(usuario: Usuario, id:string): Observable<Usuario> {
    const url = this.baseURL+ '/'+ id;
    return this.http.put<Usuario>(url,usuario);
  }

  deleteUser(id:string): Observable<any>{
    const url = this.baseURL+ '/' + id;
    return this.http.delete(url);
  }
}
