import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AocComponent } from './components/aoc/aoc.component';
import { OneOneComponent } from './components/aoc/days/one-one/one-one.component';
import { OneTwoComponent } from './components/aoc/days/one-two/one-two.component';
import { TwoComponent } from './components/aoc/days/two/two.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aoc/1.1', component: OneOneComponent},
  {path: 'aoc/1.2', component: OneTwoComponent},
  {path: 'aoc/2.1', component: TwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
