import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  output,
  computed,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // ! ***************************************
  // ! Nouvelle manière avec SIGNALS
  // ! ***************************************
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });
  select = output<string>();

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Output() select = new EventEmitter<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.user.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
