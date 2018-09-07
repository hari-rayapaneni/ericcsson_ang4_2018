import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {State} from "../model/model.state";
import {ERICUSER} from "../model/model.ericuser";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';
//import {stateData} from "../model/model.statedata";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};
@Injectable()
export class CountryService{


    constructor(private http:HttpClient)
    {

    }

    getAllCountries():Observable<any>
    {
       return this.http.get<any>("https://restcountries.eu/rest/v2/all");

    }
    getAllStatesByCode(state:State):Observable<any>
    {
        //return stateData.filter(obj=>obj.CountryCode===code);

        return this.http.post<State>('http://localhost:6060/getStateByCode',
            state, httpOptions);

    }

    addUser(user:ERICUSER):Observable<any>
    {
        //return stateData.filter(obj=>obj.CountryCode===code);

        return this.http.post<State>('http://localhost:6060/addUser',
            user, httpOptions)
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

    }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }


}