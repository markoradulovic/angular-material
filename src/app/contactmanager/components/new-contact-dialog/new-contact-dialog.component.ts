import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss'],
})
export class NewContactDialogComponent implements OnInit {
  user = User;

  name = new FormControl('', [Validators.required]);

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSave(): void {
    this.user.name = this.name.value;
    this.userService.addUser(this.user).then((user) => {
      this.dialogRef.close(this.user);
    });
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  getErrorMessage(): string {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }
}

const User = {} as IUser;
