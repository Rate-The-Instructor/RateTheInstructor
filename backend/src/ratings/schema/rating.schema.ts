import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export enum Tags {
  MissesClass = 'misses classes',
  ToughGrader = 'tough grader',
  Unqualified = 'unqualified',
  GetReadyToRead = 'get ready to read',
  ProjectHeavy = 'project heavy',
  AmazingLectures = 'amazing lectures',
  ClearGradingCriteria = 'clear grading criteria',
  Inspirational = 'inspirational',
  Hilarious = 'hilarious',
  BewareOfQuizzes = 'beware of quizzes',
  SoManyAssignments = 'so many assignments',
  Caring = 'caring',
  Respected = 'repected',
  LectureHeavy = 'lecture heavy',
  TestHeavy = 'test heavy',
  GradedByFewThings = 'graded by few things',
  AccessibleOutsideClass = 'accessible outside class',
}

export enum Questions {
  WouldYouTakeThisInstructorAgain = 'Would you take this Instructor again?',
  DidThisProfessorUseTextbooks = 'Did this Instrucotr use textbooks?',
  DidTheInstuctorShareMaterials = 'Did the instructor share materials',
  ExamQuestionsOutOfScope = 'Exam Questions Out Of Scope',
  WasAttendanceMandatory = 'Was Attendance Mandatory',
  SelectGradeReceived = 'Select Grade Received',
  DoesTheInstructorKnowsTheSubjectWell = ' Does The Instructor Knows The Subject Well',
  IsTheInstructorGoodAtExplainingConcepts = 'Is The Instructor Good At Explaining Concepts',
}
export enum Answers {
  YES = 'yes',
  NO = 'no',
  SOMETIMES = 'sometimes',
  TOSOMEEXTENT = 'to some extent',
}

// @Schema({ timestamps: true })
// export class Rating {
//   @Prop({ type: mongoose.Types.ObjectId, ref: 'User', required: true })
//   userId: mongoose.Types.ObjectId;

//   @Prop({ type: mongoose.Types.ObjectId, ref: 'Instructor', required: true })
//   instructorId: mongoose.Types.ObjectId;

//   @Prop({ type: mongoose.Types.ObjectId, ref: 'Course', required: true })
//   courseId: mongoose.Types.ObjectId;

//   @Prop()
//   tags: [
//     tag: {
//       type: string;
//       required: true;
//       enum: Tags;
//     },
//   ];

//   @Prop()
//   overallRating: number;

//   @Prop()
//   difficultyRating: number;

//   @Prop()
//   review: string;

//   @Prop()
//   questions: [
//     {
//       question: {
//         type: string;
//         enum: Questions;
//         required: true;
//       };
//       answer: {
//         type: string;
//         enum: Answers;
//         required: true;
//       };
//     },
//   ];

//   @Prop()
//   reactions: {
//     likes: number;
//     dislikes: number;
//   };
// }

export const RatingSchema = new mongoose.Schema(
  {
    userId: String, //{ type: mongoose.Types.ObjectId, ref: 'User', required: true },
    instructorId: String, //{
    //   type: mongoose.Types.ObjectId,
    //   ref: 'Instructor',
    //   required: true,
    // },
    courseId: String, //{ type: mongoose.Types.ObjectId, ref: 'Course', required: true },
    tags: [
      {
        type: String,
        required: true,
        enum: Tags,
      },
    ],
    overallRating: Number,

    difficultyRating: Number,

    review: String,

    questions: [
      {
        question: {
          type: String,
          enum: Questions,
          required: true,
        },
        answer: {
          type: String,
          enum: Answers,
          required: true,
        },
      },
    ],

    reactions: {
      likes: {
        type: Number,
        default: 0,
      },
      dislikes: {
        type: Number,
        default: 0,
      },
    },
  },

  { timestamps: true },
);
