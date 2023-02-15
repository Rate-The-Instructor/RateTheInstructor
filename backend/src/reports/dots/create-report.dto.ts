import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateReportDto {
  @IsNotEmpty()
  @IsString()
  reporterId: string;

  @IsNotEmpty()
  @IsString()
  reviewId: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
