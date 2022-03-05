import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListRequestService {

  constructor(private http: HttpClient) { }
  fetchAllrequest(): Observable<Request[]>{
    // we need to work with HttpClient to consume an endpoint
    return this.http.get<Request[]>("http://localhost:4040/api/requsts");
  }

  deleteArequest(reqId: number): Observable<Request>{
    return this.http.delete<Request>("http://localhost:4040/api/requests/"+reqId);
  }

  addAbook(bookModel: Request): Observable<Request>{
    return this.http.post<Request>("http://localhost:4040/api/requests", JSON.stringify(bookModel));
  }

  updateArequest(bookModel: Request): Observable<Request>{
    return this.http.put<Request>("http://localhost:4040/api/requests", JSON.stringify(bookModel));
  }

  fetchArequest(reqId: number): Observable<Request>{
    return this.http.get<Request>("http://localhost:4040/api/requests/"+reqId);
  }
}
