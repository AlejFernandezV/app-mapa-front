import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../../services/marker.service';
import Swal from 'sweetalert2';
import { Marker } from '../../models/Marker.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditMarkerModalComponent } from '../edit-marker-modal/edit-marker-modal.component';

@Component({
  selector: 'app-list-markers',
  templateUrl: './list-markers.component.html',
  styleUrl: './list-markers.component.css'
})
export class ListMarkersComponent implements OnInit{
  markers$ = this.markerService.markers$;
  Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  })

  constructor(public dialog: MatDialog,private markerService: MarkerService){}

  ngOnInit(): void {}

  loadAllMarkers(){
    this.markerService.getAllMarkers().subscribe({
      next: () => {
        this.Toast.fire({
          icon: "success",
          title: "Marcadores cargados correctamente"
        });
      },
      error: (error) => {
        console.log('Error al cargar marcadores:'+error)
        this.Toast.fire({
          icon: "error",
          title: "¡Error! No se cargaron los marcadores correctamente"
        });
      }
    })
  }

  updateMarker(marker: Marker){
    const dialogRef = this.dialog.open(EditMarkerModalComponent, {
      width: '300px',
      data: { title: marker.title, description: marker.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        marker.title = result.title;
        marker.description = result.description;
        this.markerService.updateMarker(marker).subscribe({
          next: () => {
            this.Toast.fire({
              icon: "success",
              title: "Marcador editado correctamente"
            });
          },
          error: (error) => {
            console.log('Error in editing marker info', error);
            this.Toast.fire({
              icon: "error",
              title: "Error al editar el marcador"
            });
          }
        });
      }
    });
  }

  deleteMarker(marker: Marker){
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Esta acción no es reversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminalo"
    }).then((result) => {
      if (result.isConfirmed) {
        this.markerService.deleteMarker(marker).subscribe({
          next: () => {
            this.Toast.fire({
              title: "Eliminado!",
              text: "El marcador ha sido eliminado con éxito.",
              icon: "success"
            });
          },
          error: () => {
            this.Toast.fire({
              title: "¡Error!",
              text: "No se pudo eliminar el marcador",
              icon: "error"
            });
          }
        })

      }
    });

  }
}
