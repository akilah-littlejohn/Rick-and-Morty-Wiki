import { Component, OnInit } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-showcase-character',
  templateUrl: './showcase-character.component.html',
  styleUrls: ['./showcase-character.component.css'],
  standalone:true,
  imports:[ProfileCardComponent]
})
export class ShowcaseCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}