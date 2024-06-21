import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseService } from "../../shared/services/base.service";
import { MedicalAppointmentEntity } from "../model/medical-appointment.entity";

@Injectable({
  providedIn: 'root'
})

export class MedicalAppointmentsService extends BaseService<MedicalAppointmentEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://hormonal-care-backend.up.railway.app';
    this.resourceEndpoint = '/api/v1/medicalAppointment';
  }

  getMedicalAppointmentById(id: number): Observable<MedicalAppointmentEntity> {
    return this.http.get<MedicalAppointmentEntity>(`${this.basePath}${this.resourceEndpoint}/${id}`);
  }
}
