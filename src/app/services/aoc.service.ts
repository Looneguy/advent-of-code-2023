import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { first, take } from 'rxjs/operators'
import { RGBGame, Set } from '../interfaces/rgbgame';


@Injectable({
  providedIn: 'root'
})
export class AocService {

  dayOneOne$ = new Subject<number>();
  dayOnetwo$ = new Subject<number>();
  dayTwoOne$ = new Subject<number>();
  dayTwoTwo$ = new Subject<number>();

  private RGBRULES = { maxRed: 12, maxGreen: 13, maxBlue: 14 };

  constructor(private httpClient: HttpClient) { }

  logSomething(): void {
    console.log("Service works")
  }

  getDayOneInput() {
    return this.httpClient.get('assets/day-1-1.txt', { responseType: 'text' });
  }

  getDayTwoInput() {
    return this.httpClient.get('assets/day-2-1.txt', { responseType: 'text' });
  }

  calculateDayOne() {
    this.getDayOneInput().pipe(take(1)).subscribe(data => {

      let sum = 0;
      const fullStrings = data.split('\n');
      fullStrings.forEach(line => {
        let digits: string[] = [];

        Array.from(line).forEach((char) => {
          if (this.isNumber(char)) {
            digits.push(char);
          }
        })

        const score = digits[0] + digits[digits.length - 1]
        sum += Number(score);
      });

      console.log(sum);
      this.dayOneOne$.next(sum)
    });
  }

  calculateDayOnePartTwo() {
    this.getDayOneInput().pipe(take(1)).subscribe(data => {

      let sum = 0;
      const numbersAsStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

      const fullStrings = data.split('\n');

      fullStrings.forEach((line) => {
        let digits: string[] = [];

        Array.from(line).forEach((char, i) => {
          if (this.isNumber(char)) {
            digits.push(char);
          }

          numbersAsStrings.forEach((val, d) => {
            if (line.startsWith(val, i)) {
              digits.push((d + 1).toString())
            }
          })
        })

        const score = digits[0] + digits[digits.length - 1]
        sum += Number(score);
      });

      console.log(sum);
      this.dayOnetwo$.next(sum)
    });
  }
  
  calculateDayTwoPartOne(){
    this.getDayTwoInput().pipe(take(1)).subscribe(data => {
      let sum = 0;

      const text = data.split('\n');

      text.forEach(line => {
        const arr = line.split(":");
        const gameNum = Number(arr[0].replace("Game", "").trim());

        let blue = 0;
        let green = 0;
        let red = 0;


        for (let rounds of arr[1].split(";")) {
          for (let round of rounds.split(",")) {
            
            round = round.trimStart();
            const numAndCol = round.split('(\\d+) (\\w+)')
            const splitNumAndCol = numAndCol[0].split(" ")
            splitNumAndCol[1] = splitNumAndCol[1].replace("\r", "");

            switch (splitNumAndCol[1]) {
              case 'blue':
                const newBlue = Number(splitNumAndCol[0])
                if (newBlue > blue) {
                  blue = newBlue
                }
                break;
              case 'red':
                const newRed = Number(splitNumAndCol[0])
                if (newRed > red) {
                  red = newRed
                }
                break;
              case 'green':
                const newGreen = Number(splitNumAndCol[0])
                if (newGreen > green) {
                  green = newGreen
                }
                break;
            }
          }
        }

        console.log("Game #", gameNum)
        console.log("Highest blue", blue)
        console.log("Highest red", red)
        console.log("Highest green", green)

        if (red <= 12 && green <= 13 && blue <= 14) {
          sum += gameNum;
        }
      });
      console.log(sum);
      this.dayTwoOne$.next(sum);
    })
  }

  calcDayTwoPartTwo() {
    this.getDayTwoInput().pipe(take(1)).subscribe(data => {
      let sum = 0;

      const text = data.split('\n');

      text.forEach(line => {
        const arr = line.split(":");
        const gameNum = Number(arr[0].replace("Game", "").trim());

        let blue = 0;
        let green = 0;
        let red = 0;


        for (let rounds of arr[1].split(";")) {
          for (let round of rounds.split(",")) {
            
            round = round.trimStart();
            const numAndCol = round.split('(\\d+) (\\w+)')
            const splitNumAndCol = numAndCol[0].split(" ")
            splitNumAndCol[1] = splitNumAndCol[1].replace("\r", "");

            switch (splitNumAndCol[1]) {
              case 'blue':
                const newBlue = Number(splitNumAndCol[0])
                if (newBlue > blue) {
                  blue = newBlue
                }
                break;
              case 'red':
                const newRed = Number(splitNumAndCol[0])
                if (newRed > red) {
                  red = newRed
                }
                break;
              case 'green':
                const newGreen = Number(splitNumAndCol[0])
                if (newGreen > green) {
                  green = newGreen
                }
                break;
            }
          }
        }

        console.log("Game #", gameNum)
        console.log("Highest blue", blue)
        console.log("Highest red", red)
        console.log("Highest green", green)



        
          sum += blue * red * green;
        
      });

      console.log(sum);
      this.dayTwoTwo$.next(sum);
    })
  }


  isNumber(value: string) {
    return value >= '0' && value <= '9';
  }

  gameIdFollowsRule(game: RGBGame) {
    return game.totalRed <= this.RGBRULES.maxRed &&
      game.totalGreen <= this.RGBRULES.maxGreen &&
      game.totalGreen <= this.RGBRULES.maxGreen;
  }

  gameFollowsRule(red: number, blue: number, green: number) {
    return red <= this.RGBRULES.maxRed &&
      blue <= this.RGBRULES.maxBlue &&
      green <= this.RGBRULES.maxGreen;
  }

}
