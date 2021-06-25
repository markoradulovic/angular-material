import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: BehaviorSubject<IUser[]>;

  private dataStore: {
    users: IUser[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<IUser[]>([]);
  }

  get users$(): Observable<IUser[]> {
    return this._users.asObservable();
  }

  userById(id: number) {
    return this.dataStore.users.find((x) => x.id === id);
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<IUser[]>(usersUrl).subscribe(
      (data) => {
        this.dataStore.users = data;
        this._users.next([...this.dataStore.users]);
      },
      (error) => {
        console.log('failed to fetch users');
      }
    );
  }
}
