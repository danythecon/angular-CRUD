import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheConService {

  constructor(private http: HttpClient) { }
  laHoha(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }
  cars(){
    return this.http.get('/api/getAllCars')
  }
  createCar(data: any){
    return this.http.post('/api/createCar', data)
  }
  update(data: any){
    return this.http.put('/api/updateCar', data)
  }
}
