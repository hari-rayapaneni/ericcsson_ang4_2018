import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {User} from "../model/model.user";
import {State} from "../model/model.state";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};


/*const USERS = [
    new User(1, 'param', 'param@123', 'ADMIN'),
    new User(2, 'vignesh', 'vignesh@123', 'ADMIN')
];*/
//let usersObservable = Observable.of(USERS);

@Injectable()
export class AuthService {
    private redirectUrl: string = '/';
    private loginUrl: string = '/Login';
    private isloggedIn: boolean = false;
    private loggedInUser: User;

    constructor(private http:HttpClient)
    {

    }

   /* getAllUsers(): Observable<User[]> {
        return usersObservable;
    }*/
    isUserAuthenticated(userObj:any): Observable<any> {

        return this.http.post<any>('http://localhost:6060/login',
            userObj, httpOptions)
            .catch((err: HttpErrorResponse) => {

                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.error('An error occurred:', err.error.message);
                } else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
                }


                return Observable.empty<any>();
            });




        /*return this.getAllUsers()
            .map(users => {
                let user = 	users.find(user => (user.username === username) && (user.password === password));
                if(user) {
                    this.isloggedIn = true;
                    this.loggedInUser = user;
                } else {
                    this.isloggedIn = false;
                }
                return this.isloggedIn;
            });*/
    }
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
    getRedirectUrl(): string {
        return this.redirectUrl;
    }
    setRedirectUrl(url: string): void {
        this.redirectUrl = url;
    }
    getLoginUrl(): string {
        return this.loginUrl;
    }
    getLoggedInUser(): User {
        return this.loggedInUser;
    }
    logoutUser(): void{
        this.isloggedIn = false;
    }
}