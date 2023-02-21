import { Component } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent {
  constructor(private commentService: CommentService) {}
  getComments() {
    return this.commentService.getComments();
  }
  getCommentsById(id: string) {
    return this.commentService.getCommentsById(id);
  }
  updateComment(commet: any) {
    return this.commentService.updateComment(commet);
  }
  addComment(comment: any) {
    return this.commentService.addComment(comment);
  }
  removeComment(id: string) {
    return this.commentService.removeComment(id);
  }
}
