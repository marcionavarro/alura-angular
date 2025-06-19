import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css'],
})
export class RodapeComponent implements OnInit {
  date: Date | undefined;

  constructor() {}

  ngOnInit(): void {
    this.date = new Date();
  }
}
