import { Inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { first, firstValueFrom, Observable } from "rxjs";
import { LoginRequest } from "../models/LoginRequest";
import { LoginResponse } from "../models/LoginResponse";


@Injectable({
    providedIn: 'root',
})

export class AuthService {
    url = environment.apiEmpleados

    constructor(private  _http: HttpClient){}

    async login(credentials: LoginRequest ): Promise<LoginResponse> {
        let header = new HttpHeaders();
        header = header.set('Content-Type', 'application/json');
        let request = '/Auth/Login';
        return firstValueFrom(this._http.post<LoginResponse>(this.url + request, credentials, { headers: header }));

    }
}