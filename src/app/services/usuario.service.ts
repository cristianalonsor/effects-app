import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.development';
import { map, Observable, tap } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  _url: string = environment._URL;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this._url}/users`)
    .pipe(
      // return resp.data;
      map( (resp: any) => resp['data'] )
    );
  }

  getUser(id: string) {
    return this.http.get(`${this._url}/users/${id}`);
  }
}
