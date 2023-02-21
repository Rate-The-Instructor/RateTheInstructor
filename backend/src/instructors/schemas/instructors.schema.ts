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

const allTags = [];

Object.values(Tags).forEach((tag) => {
  let ob = {
    name: tag,
    score: 0,
  };
  allTags.push(ob);
});

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
      ref: 'Course',
    },
    department: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: 'Department',
    },

    ratings: {
      type: [mongoose.Types.ObjectId],
      ref: 'Rating',
    },
    comments: {
      type: [mongoose.Types.ObjectId],
      ref: 'Comment',
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
    tagCounter: {
      type: Array,
      default: allTags,
    },
  },
  { timestamps: true },
);
