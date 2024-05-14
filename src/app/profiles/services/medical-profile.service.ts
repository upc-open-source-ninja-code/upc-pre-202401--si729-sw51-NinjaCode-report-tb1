import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseService } from "../../shared/services/base.service";
import { MedicalEntity } from "../model/medical.entity";


@Injectable({
  providedIn: 'root'
})


export class PatientsProfileService extends BaseService<MedicalEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://json-server-vercel-xi-silk.vercel.app';
    this.resourceEndpoint = '/doctors';
  }

  getDoctorDetails(id: string): Observable<MedicalEntity> {
    return this.http.get<MedicalEntity>(`${this.basePath}${this.resourceEndpoint}/${id}`);
  }
}