import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserList} from 'src/app/models/users.model';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}

  public listUsers = {} as UserList;
  public isSpinning = false;
  public pageSizes = [4, 8, 12];
  public pageSize = 4;
  public pageIndex = 1;
  public total = 0;
  private memSub?: Subscription;

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.userService.userInfo$.subscribe(user => {
      let index = this.listUsers?.data?.findIndex(oldUser => oldUser.id === user.id);
      if (index < 0) {this.listUsers.data.push(user);}
      this.listUsers?.data?.splice(index, 1, user);
    });
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.getUsers();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.getUsers();
  }

  getUsers(): void {
    this.isSpinning = true;
    this.memSub = this.userService
      .getUsers(this.pageIndex, this.pageSize)
      .subscribe({
        next: users => {
          this.total = users.total;
          this.listUsers = users;
          this.isSpinning = false;
        },
        error: () => {
          this.isSpinning = false;
        },
      });
  }

  deleteUserId(id: number): void {
    this.isSpinning = true;
    this.memSub = this.userService.deleteUser(id).subscribe({
      next: () => {
        this.listUsers.data = this.listUsers.data.filter(
          user => user.id !== id
        );
      },
      complete: () => {
        this.isSpinning = false;
      },
      error: () => {
        this.isSpinning = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.memSub?.unsubscribe();
  }
}
