export class UserDetailResponse {
  userId: number;
  userName: string;
  password: string;
  fullName: string;

  constructor(userId, userName, password, fullName) {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
    this.fullName = fullName;
  }
}
