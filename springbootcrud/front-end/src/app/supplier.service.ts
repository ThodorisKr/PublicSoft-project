import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient : HttpClient) { }

  getSuppliers():Observable<Supplier[]>{
    return this.httpClient.get<GetResponse>("http://localhost:8080/api/suppliers").pipe(
      map(response => response._embedded.suppliers)
    );
  }

  getSuppliersById(id: number):Observable<Supplier>{
    return this.httpClient.get<Supplier>("http://localhost:8080/api/suppliers/"+id);
  }

  addSupplier(supplier: Supplier):Observable<Supplier>{
    return this.httpClient.post<Supplier>("http://localhost:8080/api/suppliers", supplier);
  }

  updateSupplier(id: number, supplier: Supplier): Observable<Supplier>{
    return this.httpClient.put<Supplier>("http://localhost:8080/api/suppliers/" + id, supplier);
  }

  deleteSupplier(id: number): Observable<Object>{
    return this.httpClient.delete("http://localhost:8080/api/suppliers/" + id);
  }

  getSupplierByCompanyOrVat(input: string):Observable<Supplier[]>{
    return this.httpClient.get<GetResponse>("http://localhost:8080/api/suppliers/search/findByQuery?query=" + input).pipe(
      map(respone => respone._embedded.suppliers)
    )
  }

}

interface GetResponse{
  _embedded: {
    suppliers: Supplier[];
  }
}
