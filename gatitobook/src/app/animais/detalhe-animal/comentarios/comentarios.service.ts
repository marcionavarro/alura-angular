import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario, Comentarios } from './comentarios';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  buscarComentario(id: number): Observable<Comentarios> {
    const comments = this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
    return comments;
  }

  incluiComentario(id: number, commentText: string): Observable<Comentario> {
    return this.http.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
