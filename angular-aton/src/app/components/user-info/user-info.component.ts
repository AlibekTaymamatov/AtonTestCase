import {Component,OnDestroy,OnInit,} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {User} from 'src/app/models/user.model';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit, OnDestroy {
  constructor(
    private fb: UntypedFormBuilder,
    private userService: UserService,
    private activatedroute: ActivatedRoute,
    private router: Router)
    {
      // получаем id пользователя
      this.userId =this.activatedroute.parent?.parent?.firstChild?.snapshot.params['id'];
      // получаем название пути
      this.typePath =this.activatedroute.parent?.parent?.firstChild?.snapshot.routeConfig?.path?.split('/').shift();
    }

  public isAddNewUser = false;
  public isVisible = true;
  public isConfirmLoading = false;
  public formData!: UntypedFormGroup;
  public userInfo = {} as User;
  public defaultImage ='//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  public userId: number;
  public typePath?: string;
  private memSub?: Subscription;
  private memSubInfo?: Subscription;

  ngOnInit(): void {
    this.chekTypePath();
    this.formData = this.fb.group({
      email: [null, [Validators.required]],
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      avatar: [null, [Validators.required]],
    });

    if (!this.isAddNewUser) {this.getUserId();}
  }

  chekTypePath() {
    if (this.typePath === 'new-user') {
      this.isAddNewUser = true;
    } else if (this.typePath === 'user') {
      this.isAddNewUser = false;
    }
  }

  handleOk(): void {
    this.editUser();
  }

  handleAdd(): void {
    this.addUser();
  }

  handleCancel(): void {
    this.isVisible = false;
    this.router.navigate(['users']);
  }

  getUserId() {
    this.memSubInfo = this.userService.getUserId(this.userId).subscribe({
      next: user => {(this.userInfo = user.data), this.formData.patchValue(user.data);},
      error: () => {this.handleCancel();},
    });
  }

  addUser() {
    this.isConfirmLoading = true;
    this.memSub = this.userService
      .addUser(this.getFormValueModelCreate())
      .subscribe({
        complete: () => {
          this.handleCancel(), (this.isConfirmLoading = false);
        },
        error: () => {
          this.handleCancel(), (this.isConfirmLoading = false);
        },
      });
  }

  editUser() {
    this.isConfirmLoading = true;
    this.memSub = this.userService
      .editUserId(this.getFormValueModelPut())
      .subscribe({
        next: () => {},
        complete: () => {
          this.handleCancel(), (this.isConfirmLoading = false);
        },
        error: () => {
          this.handleCancel(), (this.isConfirmLoading = false);
        },
      });
  }

  getFormValueModelCreate(): User {
    let model = this.formData.value as User;
    return {
      first_name: model.first_name,
      last_name: model.last_name,
      email: model.email,
      avatar: this.defaultImage,
    };
  }

  getFormValueModelPut(): User {
    let model = this.formData.value as User;
    return {
      first_name: model.first_name,
      last_name: model.last_name,
      email: model.email,
      avatar: model.avatar,
      id: this.userInfo.id,
    };
  }

  ngOnDestroy(): void {
    this.memSubInfo?.unsubscribe();
    this.memSub?.unsubscribe();
  }
}
