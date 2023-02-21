import { Component, Input } from '@angular/core';
import { Commentervice } from 'src/app/services/comment/comment.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent {
  constructor(
    private commentService: Commentervice,
    private tokenService: TokenService
  ) {}

  @Input() instructor!: any;
  loggedInUser: any;

  ngOnInit() {
    this.loggedInUser = this.tokenService.getUserData();
  }

  commentText: string = '';

  submitComment() {
    this.commentService
      .postComment({
        instructorId: this.instructor._id,
        userId: this.loggedInUser.id,
        comment: this.commentText,
      })
      .subscribe(
        (res) => alert('Comment submitted succesfully!'),
        (error) => alert('Oops an error occured .. try again')
      );
  }
}
