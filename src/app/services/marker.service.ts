import { Injectable } from '@angular/core';
import { Marker } from '../models/Marker.interface';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  private apiUrl = "http://localhost:8080/api/markers/";
  private markersSubject = new BehaviorSubject<Marker[]>([]);
  markers$ = this.markersSubject.asObservable();

  constructor(private htttp: HttpClient){}

  addMarker(marker: Marker): Observable<Marker>{
    return this.htttp.post<Marker>(this.apiUrl, marker).pipe(
      tap((response) => {
        const currentMarkers = this.markersSubject.value;
        this.markersSubject.next([...currentMarkers, response])
      }),
      catchError((error) => {
        console.error('Error adding marker:', error);
        throw error;
      })
    );
  }

  getMarkers() {
    return this.markersSubject.value;
  }

  getAllMarkers(): Observable<Marker[]>{
    return this.htttp.get<Marker[]>(this.apiUrl).pipe(
      tap((response) => {
        this.markersSubject.next(response);
      }),
      catchError((error) => {
        console.log('Error getting markers:', error);
        throw error
      })
    )
  }

  deleteMarker(marker: Marker) {
    const currentMarkers = this.markersSubject.value;
    const updatedMarkers = currentMarkers.filter(m => m !== marker);
    this.markersSubject.next(updatedMarkers);
  }

}
