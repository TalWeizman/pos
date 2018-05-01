import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {XReportDialogComponent} from '../x-report-dialog/x-report-dialog.component'
import {NavBarComponent} from '../nav-bar/nav-bar.component'

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  @Output() nav:EventEmitter<any>  = new EventEmitter();

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  nav_to(nav_name:string){

    this.nav.emit(nav_name);

  }

  x_report_dialog(){
    //todo - check if thers permission to enter

    let dialogRef = this.dialog.open(XReportDialogComponent);
  

    dialogRef.afterClosed().subscribe(result => {

      console.log(result);
    

    });
  } 

}
