import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <p [appResaltado]="'orange'">
      Hola mundo desde los CSS
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewChecked(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterContentChecked(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterContentInit(): void {
    throw new Error("Method not implemented.");
  }
  ngDoCheck(): void {
    throw new Error("Method not implemented.");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
  }

}
