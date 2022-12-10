import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewInit {

  @Input()
  titulo:string="Titulo por defecto";

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes");
  }
  ngOnDestroy(): void {
    console.log("On Destroy");
  }
  ngDoCheck(): void {
    console.log("On DoCheck");
  }
  ngAfterViewInit(): void {
    console.log("On AfterViewInit");
  }

  ngOnInit(): void {
    console.log("On Init");
  }

}
