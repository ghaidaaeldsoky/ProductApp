import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingStars',
  standalone: false
})
export class RatingStarsPipe implements PipeTransform {

  transform(value: number): string {
    const fullStars = Math.floor(value);
    const halfStar = value % 1 >= 0.5;
    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(5 - fullStars - (halfStar ? 1 : 0));
  }

}
