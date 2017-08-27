import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'Elisha- googleMaps - angular2.0 -septier';
  lat: number = 51.678418;
  lng: number = 7.809007;
  gDistance:number = 10000;
  gSize:number = 3;

  mapReady ($event:any){
    console.log("ready");    
    console.log($event);
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  mapClicked($event: any) {
    
    
    console.log($event);
    if (this.markers.length >=20 ) return;
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      color:this.getRandomColor(),
      distance:this.gDistance,
      visible:true,
      fillOpacity:1,
      strokeWeight:this.gSize,
      strokeColor:this.getRandomColor()
      
      
    });
  }
  markers: marker[] = [
	  /*{
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'Tesing point',
		  draggable: true,
		  color:this.getRandomColor(),
		  distance:1800,
		  opacity:0
		  
	  }*/
  ]

}

interface marker {
	lat: number;
	lng: number;
	distance:number;
	fillOpacity:number;
  visible:true;
  color:string;
  strokeWeight:number;
  strokeColor:string;
}