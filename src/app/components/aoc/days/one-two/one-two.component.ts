import { Component, OnInit } from '@angular/core';
import { AocService } from 'src/app/services/aoc.service';

@Component({
  selector: 'app-one-two',
  templateUrl: './one-two.component.html',
  styleUrls: ['./one-two.component.scss']
})
export class OneTwoComponent implements OnInit {

  result = 0;
  constructor(private aocService: AocService) { }

  ngOnInit(): void {
    this.aocService.dayOnetwo$.subscribe(data => {
      this.result = data;
    })

    this.aocService.calculateDayOnePartTwo();
  }
}
