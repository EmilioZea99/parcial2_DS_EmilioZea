import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Pinguino } from './pinguino';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinguinoService {
  private apiUrl = environment.baseUrl + 'personajes.json';

constructor(private http: HttpClient) { }

getPinguinos(): Observable<Pinguino[]> {
    return this.http.get<Pinguino[]>(this.apiUrl);
  }

}
