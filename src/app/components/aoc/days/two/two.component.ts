import { Component, OnInit } from '@angular/core';
import { AocService } from 'src/app/services/aoc.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  partOneAns = 0;
  partTwoAns = 0;
  constructor(private aocService: AocService) { }

  ngOnInit(): void {
    this.aocService.dayTwoOne$.subscribe(data => {
      this.partOneAns = data;
    });
    
    this.aocService.dayTwoTwo$.subscribe(data => {
      this.partTwoAns = data;
    });
    this.aocService.calculateDayTwoPartOne();
    this.aocService.calcDayTwoPartTwo();
  }

}
