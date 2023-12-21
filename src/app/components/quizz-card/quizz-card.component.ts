import { Component, OnInit } from '@angular/core';

import quizz_questions from 'src/assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.css'],
})
export class QuizzCardComponent implements OnInit {
  title: string = '';
  quizz = quizz_questions;
  constructor() {}

  ngOnInit(): void {}
}
