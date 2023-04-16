import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {UserList} from 'src/app/models/users.model';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService, private router: Router) {}

  public isModalVisible = false;
  public isAddNewUser = false;
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
    this.userService.userInfo$.subscribe(newUser => {
      this.listUsers.data.map(oldUser =>
        newUser.id === oldUser.id ? newUser : oldUser
      ),
        this.listUsers.data.forEach(oldUser => {
          if (newUser.id !== oldUser.id) {
            this.listUsers.data.push(newUser);
          }
        });
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

  addUser() {
    this.isAddNewUser = true;
    this.isModalVisible = true;
  }

  // Метод, который будет вызван при закрытии модального окна
  handleCloseModal() {
    this.isModalVisible = false;
  }

  editUser() {
    this.isAddNewUser = false;
    this.isModalVisible = true;
  }

  ngOnDestroy(): void {
    this.memSub?.unsubscribe();
  }
}
