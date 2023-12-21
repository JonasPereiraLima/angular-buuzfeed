import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import quizz_questions from 'src/assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  title: string | null = '';

  quizz: any;
  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.title = value.get('token')));

    if (quizz_questions) {
      this.finished = false;
      this.quizz = quizz_questions.find((quizz) => quizz.title == this.title);
      this.questions = this.quizz.questions;
      console.log(this.questions);
      this.questionIndex = 0;
      this.questionSelected = this.questions[this.questionIndex];
      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoose(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  nextStep() {
    this.questionIndex++;
    if (this.questionIndex < this.questionMaxIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      this.finished = true;
      const finalAnswer = this.checkResult(this.answers);
      this.answerSelected =
        this.quizz.results[finalAnswer as keyof typeof this.quizz.results];
    }
  }

  checkResult(answers: string[]) {
    const result = answers.reduce((previus, current, i, arr) => {
      if (
        arr.filter((item) => item === previus).length >
        arr.filter((item) => item === current).length
      ) {
        return previus;
      } else {
        return current;
      }
    });
    return result;
  }
}
