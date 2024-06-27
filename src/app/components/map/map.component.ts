import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarkerModalComponent } from '../marker-modal/marker-modal.component';
import { MarkerService } from '../../services/marker.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  display: any;
  zoom = 11;
  markers$ = this.markerService.markers$;
  mapOptions: google.maps.MapOptions = {
    streetViewControl: false
  };

  constructor(public dialog: MatDialog, private markerService: MarkerService){}

  center: google.maps.LatLngLiteral = {
    lat: 2.4247494,
    lng: -76.602663
  };

  move(event: google.maps.MapMouseEvent){
    if(event.latLng){
      this.display = event.latLng.toJSON();
    }
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      const latLng = event.latLng.toJSON();

      const dialogRef = this.dialog.open(MarkerModalComponent, {
        width: '300px',
        data: { position: latLng }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

          const newMarker = {
            id: 0,
            title: result.title,
            description: result.description,
            latitude: latLng.lat,
            longitude: latLng.lng
          };
          this.markerService.addMarker(newMarker).subscribe({
            next:(response) => {
              console.log(response)
              Swal.fire({
                title: 'Creación exitosa!',
                text: 'Se ha creado el maracador con éxito!',
                icon: 'success',
              });
            },
            error: (error) => {
              console.log(error)
              Swal.fire({
                title: 'Error!',
                text: 'Ha ocurrido un error al crear el marcador!',
                icon: 'error',
              })
            }
          })
        }
      });
    }
  }
}
