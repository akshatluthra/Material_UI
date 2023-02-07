import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  displayedColumns: string[] = ['id', 'name', 'age', 'position'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface PeriodicElement {
  name: string;
  id: number;
  age: number;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Sonam', age: 25, position: 'Marketing-head'},
  {id: 2, name: 'Riya', age: 40, position: 'Project Manager'},
  {id: 3, name: 'Varun', age: 22, position: 'Intern'},
  {id: 4, name: 'Akshat', age: 30, position: 'Full Stack Developer'},
  {id: 5, name: 'Deepika', age: 32, position: 'Senior Developer'},
  {id: 6, name: 'Shashank', age: 49, position: 'CEO'},
  {id: 7, name: 'Sarthak', age: 26, position: 'React Developer'},
  {id: 8, name: 'Akshay', age: 35, position: 'Technical Lead'},
  {id: 9, name: 'Neeraj', age: 38, position: 'Sales Head'},
  {id: 10, name: 'Aman', age: 40, position: 'SEO Manager'},
  {id: 11, name: 'Diljeet', age: 36, position: 'HR'},
  {id: 12, name: 'Maya', age: 45, position: 'CTO'},
  {id: 13, name: 'Nikhil', age: 27, position: 'HR Intern'},
  {id: 14, name: 'Tarun', age: 29, position: 'Salesforce Developer'},
  {id: 15, name: 'Vaman', age: 33, position: 'Secretary'},
  {id: 16, name: 'Sonali', age: 30, position: 'Senior Software Engineer'},
  {id: 17, name: 'Dheeraj', age: 48, position: 'CFO'},
  {id: 18, name: 'Jasmeet', age: 21, position: 'Sales Intern'},
  {id: 19, name: 'Rakulpreet', age: 26, position: 'SQL Developer'},
  {id: 20, name: 'Chandan', age: 24, position: 'Backend Developer'},
];
