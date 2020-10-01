import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Category} from '../../interface/category';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories');
  }

  create(category): Observable<Category> {
    return this.http.post<Category>(API_URL + '/categories', category);
  }

  update(id, category): Observable<Category> {
    return this.http.put<Category>(API_URL + `/categories/${id}`, category);
  }

  delete(id): Observable<Category> {
    return this.http.delete(API_URL + `/categories/${id}`);
  }
}
