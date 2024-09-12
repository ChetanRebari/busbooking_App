import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pdfBtn:boolean=true;

  onSubmit(form: any) {
    if (form.valid) {
      // console.log('Booking Information:', form.value);
      sessionStorage.setItem("user", JSON.stringify(form.value))
      alert('Ticket booked successfully!');
    }
     this.pdfBtn=false;
  }



  generatePDF() {
    const userData = sessionStorage.getItem('user');
    const busBookingData = sessionStorage.getItem('Bus BOOK');

    if (userData && busBookingData) {
      const userJsonData = JSON.parse(userData);
      const busJsonData = JSON.parse(busBookingData);

      const doc = new jsPDF();
         doc.setFont('helvetica', 'bold');
         doc.setFontSize(16);
   
         doc.text('User Information:', 10, 20);
         doc.setFont('helvetica', 'normal');
         doc.setFontSize(12);
         doc.text(`Name: ${userJsonData.name}`, 10, 30);
         doc.text(`Email: ${userJsonData.email}`, 10, 40);
         doc.text(`Password: ${userJsonData.password}`, 10, 50);
         doc.text(`Mobile: ${userJsonData.mobile}`, 10, 60);
         doc.text(`Date: ${userJsonData.date}`, 10, 70);
   
         doc.setLineWidth(0.5);
         doc.line(10, 75, 200, 75);
         doc.setFont('helvetica', 'bold');
         doc.setFontSize(16);
         doc.text('Bus Booking Information:', 10, 85);
         doc.setFont('helvetica', 'normal');
         doc.setFontSize(12);
         doc.text(`Bus Number: ${busJsonData.bus_number}`, 10, 95);
         doc.text(`Bus Time: ${busJsonData.arrival_time}`, 10, 105);
         doc.text(`Bus Company: ${busJsonData.bus_company}`, 10, 115);
         doc.text(`Bus Condition: ${busJsonData.bus_condition}`, 10, 125);
         doc.text(`Bus Route: ${busJsonData.bus_route}`, 10, 135);
         doc.text(`Bus Capacity: ${busJsonData.capacity}`, 10, 145);
         doc.text(`Driver Name: ${busJsonData.driver_name}`, 10, 155);
         doc.text(`Ticket Price: ${busJsonData.ticket_price}`, 10, 165);
      doc.save('user-bus-booking-data.pdf');
    } else {
      console.error('User data or Bus booking data not found in session storage');
    }
  }


}
