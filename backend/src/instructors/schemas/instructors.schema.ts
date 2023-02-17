import * as mongoose from 'mongoose';

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

export const InstructorSchema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    courses: {
      required: true,
      type: [mongoose.Types.ObjectId],
    },
    department: {
      required: true,
      type: mongoose.Types.ObjectId,
    },
    totalRating: {
      required: true,
      type: Number,
      default: 0,
    },
    difficultyRating: {
      required: true,
      type: Number,
      default: 0,
    },
    overallRating: {
      required: true,
      type: Number,
      default: 0,
    },
    ratingDistribution: {
      required: true,
      type: {
        1: Number,
        2: Number,
        3: Number,
        4: Number,
        5: Number,
      },
      default: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
    },
    tagCounter: [
      {
        name: {
          type: String,
          required: true,
          enum: Tags,
        },
        score: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true },
);

// export const InsctructorModel = new mongoose.Model(
//   'Instructor',
//   InstructorSchema,
// );
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// @Schema({ timestamps: true })
// export class Insctructor {
//   @Prop()
//   firstName: string;
//   @Prop()
//   lastName: string;
//   @Prop()
//   courses: String[]; // realtions place holder
//   @Prop()

//   department: string;
//   @Prop()

//   totalRating: number;
//   @Prop()
//   overallRating: string; //relations
//   @Prop()
//   difficultyRating: string;

//   @Prop()
//   ratingDistribution: string; //place holder
//   @Prop()
//   tagCounter: string; //place holder
// }

// export const InsctructorSchema = SchemaFactory.createForClass(Insctructor);
