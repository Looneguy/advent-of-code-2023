import { Component, OnInit, Input, Output } from '@angular/core';
import { AocService } from 'src/app/services/aoc.service';

@Component({
  selector: 'app-one-one',
  templateUrl: './one-one.component.html',
  styleUrls: ['./one-one.component.scss']
})
export class OneOneComponent implements OnInit {

  @Input() name = ""

  // @Output() childName = 
  result = 0;
  constructor(private aocService: AocService) { }

  ngOnInit(): void {
    this.aocService.dayOneOne$.subscribe(data => {
      this.result = data;
    })

    this.aocService.calculateDayOne();
  }
}
