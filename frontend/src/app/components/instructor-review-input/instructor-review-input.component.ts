import { Component, ViewChild } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingService } from 'src/app/services/rating/rating.service';
import { TokenService } from 'src/app/services/token/token.service';
import { InstructorReviewComponent } from '../instructor-review/instructor-review.component';
import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { RatingSystemComponent } from '../rating-system/rating-system.component';

@Component({
  selector: 'app-instructor-review-input',
  templateUrl: './instructor-review-input.component.html',
  styleUrls: ['./instructor-review-input.component.css'],
})
export class InstructorReviewInputComponent {
  constructor(
    private tokenService: TokenService,
    private route: ActivatedRoute,
    private ratingService: RatingService,
    private router: Router,
    private instructorService: InstructorService
  ) {}

  @ViewChild('reviewText') reviewText!: InstructorReviewComponent;
  @ViewChild('starRating') starRating!: RatingSystemComponent;

  edit: any;
  isEdit: boolean = false;
  rating: any;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const instructorId = params.get('instructorId')!;
      this.instructorId = instructorId;

      this.instructorService
        .getInstructorsById(instructorId)
        .subscribe((instructor) => {
          this.instructor = instructor;

          const userData = this.tokenService.getUserData();

          for (let rating of instructor.ratings) {
            if (rating.userId === userData.id) {
              this.isEdit = true;
              this.rating = rating;

              // populate the rating data
              // this.ratingData.questions = rating.questions;
              // this.ratingData.courseId = rating.courseId._id;
              // this.ratingData.instructorId = rating.instructorId;
              // this.ratingData.overallRating = rating.overallRating;
              // this.selectedTags = rating.tags;
              // this.ratingData.review = rating.review;
            }
          }
        });
    });

    this.route.queryParams.subscribe((params) => {
      this.edit = Boolean(params['edit']);
    });
  }

  instructorId = '';
  instructor: any;

  ratingData: any = {
    userId: '',
    instructorId: '',
    questions: {
      WouldYouTakeThisInstructorAgain: '',
      DidThisProfessorUseTextbooks: '',
      DidTheInstuctorShareMaterials: '',
      ExamQuestionsOutOfScope: '',
      WasAttendanceMandatory: '',
      SelectGradeReceived: '',
      DoesTheInstructorKnowsTheSubjectWell: '',
      IsTheInstructorGoodAtExplainingConcepts: '',
    },
    overallRating: 0,
    courseId: '',
    review: '',
    difficultyRating: 3,
  };

  selectedTags: Array<string> = [];

  questionsMap: any = {
    WouldYouTakeThisInstructorAgain: 'Would take again?',
    DidThisProfessorUseTextbooks: 'Use textbooks?',
    DidTheInstuctorShareMaterials: 'Share materials?',
    ExamQuestionsOutOfScope: 'Exam Out Of Scope?',
    WasAttendanceMandatory: 'Attendance Mandatory?',
    SelectGradeReceived: 'Grade Received',
    DoesTheInstructorKnowsTheSubjectWell: 'Knows The Subject Well?',
    IsTheInstructorGoodAtExplainingConcepts: 'Explains Concepts well?',
  };

  tags = [
    'misses classes',
    'tough grader',
    'unqualified',
    'get ready to read',
    'project heavy',
    'amazing lectures',
    'clear grading criteria',
    'inspirational',
    'hilarious',
    'beware of quizzes',
    'so many assignments',
    'caring',
    'repected',
    'lecture heavy',
    'test heavy',
    'graded by few things',
    'accessible outside class',
  ];

  toggleSelection(tagName: string, chip: MatChip) {
    if (!chip.highlighted) {
      this.selectedTags.push(tagName);
    } else {
      this.selectedTags = this.selectedTags.filter((tag) => tag != tagName);
    }

    chip.highlighted = !chip.highlighted;
  }

  submitRating() {
    console.log(this.instructor.ratings, console.log(this.isEdit));
    const userData = this.tokenService.getUserData();

    if (!userData) {
      this.router.navigate(['/login']);
      return;
    }

    const userId = userData.id;

    this.ratingData.instructorId = this.instructorId;
    const questionsArray = Object.entries(this.ratingData.questions).map(
      ([question, answer]) => ({ question, answer })
    );

    const transformedArray = questionsArray.map((obj) => {
      const newObj: any = {};

      for (const [key, value] of Object.entries(obj)) {
        newObj.question = this.questionsMap[value as any];
        newObj.answer = obj.answer;
        break;
      }
      return newObj;
    });

    const newQuestionsArray = transformedArray.filter(
      (qa) => qa.answer !== '' && qa && qa.question
    );

    this.ratingData = {
      ...this.ratingData,
      tags: this.selectedTags,
      questions: newQuestionsArray,
    };

    this.ratingData.userId = userId;
    this.ratingData.review = this.reviewText.reviewText;
    this.ratingData.overallRating = this.starRating.rating;

    console.log(this.ratingData);

    if (!this.isEdit) {
      this.ratingService.postRating(this.ratingData).subscribe(
        (rating) => {
          this.router.navigate(['/instructors/', this.instructorId]);
        },
        (error) => alert('You are not eligible to rate this instructor')
      );
    } else {
      this.ratingService
        .updateRating(this.rating._id, this.ratingData)
        .subscribe(
          (rating) => {
            this.router.navigate(['/instructors/', this.instructorId]);
          },
          (error) => alert('You are not eligible to rate this instructor')
        );
    }
  }
}
