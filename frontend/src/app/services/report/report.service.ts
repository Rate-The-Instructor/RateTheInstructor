import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  api = 'https://ratetheinstructor-production.up.railway.app/api';
  endpoint = 'reports'

  getAllReports() {
    return this.http.get(`${this.api}/${this.endpoint}`)
  }

  postReport(reportData:any) {
    return this.http.post(`${this.api}/${this.endpoint}`, reportData)
  }

}
