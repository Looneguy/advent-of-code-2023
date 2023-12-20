import { Component, OnInit } from '@angular/core';
import { AocService } from 'src/app/services/aoc.service';

@Component({
  selector: 'app-aoc',
  templateUrl: './aoc.component.html',
  styleUrls: ['./aoc.component.scss']
})
export class AocComponent implements OnInit {

  data = 0;
  
  constructor(private aocService: AocService) { }

  ngOnInit(): void {
  }
}
