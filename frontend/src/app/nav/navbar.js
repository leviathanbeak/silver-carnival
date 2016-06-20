import { Component, View } from 'angular2/core'
import { Router, ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
  selector: 'navbar'
})

@View({
  directives: [ ROUTER_DIRECTIVES ],
  template: `
  <nav class="navbar navbar-dark bg-inverse">
    <a class="navbar-brand" [routerLink]="['/Home']">Exploring MEAN by Elvis</a>
    <ul class="nav navbar-nav hidden-sm-down">
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/Masters']">Masters <span class="label label-pill label-primary">1</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/Weapons']">Weapons <span class="label label-pill label-danger">15</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/Ships']">Ships</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
    <ul class="nav navbar-nav pull-xs-right">
      <li class="nav-item hidden-sm-down">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item hidden-md-up">
        <button type="button" (click)="onClick()" class="btn btn-secondary-online"><i class="fa fa-bars"></i></button>
      </li>
    </ul>
  </nav>
  `
})

export default class Navbar {}