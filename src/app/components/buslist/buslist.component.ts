import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { BusServicelistService } from 'src/app/services/bus-servicelist.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent {
  defultValue = "jaipur";
  fullDetialsPage: boolean = false;
  busList: any = [];
  selectedBus: any = [];
  isDesabled: boolean = false;
  oneBusObject: any = {};
  filteredBusList: any[] | null = null;

  constructor(private busServiceList: BusServicelistService, private router: Router) {
    this.busServiceList.getData().subscribe((res) => {
      this.busList = res;
    })
  }
  selecteBus(selectBus: any) {
    this.selectedBus.push(selectBus);
    this.oneBusObject = { ...selectBus }
    this.fullDetialsPage = true;
    this.isDesabled = true;
  }


  searchBas(searchValue: any) {
    if (searchValue) {
      this.filteredBusList = this.busList.filter((bus: any) =>
        bus.bus_route.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      // this.filteredBusList = null;
      this.filteredBusList = this.busList;
    }
  }


  close_Btn() {
    this.fullDetialsPage = false;
    if (this.selectedBus) {
      this.selectedBus.length = 0;
    }
    this.isDesabled = false;
  }


  conform_Btn() {
    this.router.navigate(['/login'])
    sessionStorage.setItem("Bus BOOK", JSON.stringify(this.oneBusObject))
    console.log(this.oneBusObject)
  }
}
