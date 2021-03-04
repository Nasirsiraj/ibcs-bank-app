import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Client} from "../model/client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private apiUrl = environment.apiUrl;

  // get all client
  public getAllClient(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.apiUrl}/clients`);
  }
  // get client by id
  public getClientById(id: number): Observable<Client | null>{
    return this.httpClient.get<Client | null>(`${this.apiUrl}/client/${id}`)
  }
  // get client by nid
  public getClientByNid(nid: number): Observable<Client | null>{
    return this.httpClient.get<Client | null>(`${this.apiUrl}/clientByNid/${nid}`)
  }
  // post all client
  public postAllClient(clients: Client[]): Observable<Client[]>{
    return this.httpClient.post<Client[]>(`${this.apiUrl}/clients`, clients);
  }
  // post one client
  public postOneClient(client: Client): Observable<Client>{
    return this.httpClient.post<Client>(`${this.apiUrl}/client`, client);
  }
  // delete client by id
  public deleteClientById(id: number): Observable<string>{
    return this.httpClient.delete<string>(`${this.apiUrl}/client/${id}`)
  }
  // delete client by obj
  public deleteClientByObj(client: Client): Observable<string>{
    const header = new Headers();
    const body = client;
    const responseType = 'text';
    const withCredentials = false;
    const reportProgress = false;

    header.append('Content-Type', 'json');

    const  option = {
      header,
      body,
      reportProgress,
      responseType,
      withCredentials
    };
    // @ts-ignore
    return this.httpClient.delete<string>(`${this.apiUrl}/client`, option);
  }
  // update client by obj
  public updateClientByObj(client: Client): Observable<Client | null>{
    return this.httpClient.put<Client | null>(`${this.apiUrl}/client`, client);
  }

  // cash in
  // cash out


}
