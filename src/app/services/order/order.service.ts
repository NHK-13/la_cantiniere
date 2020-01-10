import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getConstraint() {
    return this.http.get(`http://localhost:8080/lunchtime/constraint/find/1`)
  }

  editConstraint(data) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJNaWNoZWxpbmUiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiRHVua2VycXVlIiwic2V4IjowLCJzdGF0dXMiOjB9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSIsIlJPTEVfVVNFUiJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNTc4NzMxMTY1fQ.O8q2rI8Fqv-_z5tMmYS90VKssv7tWSL-tGFk3-gYNruBH6cj03QSfW-KvvuajOF2BRCbG47wkzo8J-ADjWnq3A'
    });
    this.http.patch(`http://localhost:8080/lunchtime/constraint/update/1`, data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }
}
