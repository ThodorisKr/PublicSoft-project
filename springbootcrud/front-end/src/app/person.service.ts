import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient : HttpClient) { }

  getPersons():Observable<Person[]>{
    return this.httpClient.get<GetResponse>("http://localhost:8080/api/persons").pipe(
      map(response => response._embedded.persons)
    );
  }

  getPersonsById(id: number):Observable<Person>{
    return this.httpClient.get<Person>("http://localhost:8080/api/persons/"+id);
  }

  addPerson(person: Person):Observable<Person>{
    return this.httpClient.post<Person>("http://localhost:8080/api/persons", person);
  }

  updatePerson(id: number, person: Person): Observable<Person>{
    return this.httpClient.put<Person>("http://localhost:8080/api/persons/" + id, person);
  }

  deletePerson(id: number): Observable<Object>{
    return this.httpClient.delete("http://localhost:8080/api/persons/" + id);
  }
  getPersonByEmailOrName(input: string):Observable<Person[]>{
    return this.httpClient.get<GetResponse>("http://localhost:8080/api/persons/search/findByQuery?query=" + input).pipe(
      map(respone => respone._embedded.persons)
    )
  }

}

interface GetResponse{
  _embedded: {
    persons: Person[];
  }
}
