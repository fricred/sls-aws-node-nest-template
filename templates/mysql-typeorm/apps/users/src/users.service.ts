import { User } from '@app/database/entities/user.entity';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generatePassword } from './userHelper';
import { DatabaseService } from '@app/database';
var AWS = require('aws-sdk');

@Injectable()
export class UsersService {
  private DELIVERY_MEDIUM: string = 'EMAIL';
  private EMAIL_USR_ATTRB: string = 'email';
  private GIVEN_NAME_USR_ATTRB: string = 'given_name';
  private FAMILY_NAME_USR_ATTRB: string = 'family_name';
  private EMAIL_VERIFIED_USR_ATTRB: string = 'email_verified';
  private PROFILE: string = 'profile';

  private cognitoIdentityServiceProvider: any;

  constructor(@InjectRepository(User) private repo, public dbService: DatabaseService) {
    this.cognitoIdentityServiceProvider =
      new AWS.CognitoIdentityServiceProvider({
        region: process.env.COGNITO_REGION,
      });
  }

  /***
   * Creates a user in Cognito AWS
   */
  createCognitoUser(data: User): Promise<any> {
    const { email, name } = data;

    let poolData = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      Username: email,
      DesiredDeliveryMediums: [this.DELIVERY_MEDIUM],
      TemporaryPassword: generatePassword(),
      UserAttributes: [
        {
          Name: this.EMAIL_USR_ATTRB,
          Value: email,
        },
        {
          Name: this.GIVEN_NAME_USR_ATTRB,
          Value: name,
        },
        {
          Name: this.FAMILY_NAME_USR_ATTRB,
          Value: name,
        },
        {
          Name: this.EMAIL_VERIFIED_USR_ATTRB,
          Value: 'true',
        },
        {
          Name: this.PROFILE,
          Value: 'system',
        },
      ],
    };

    try {
      return new Promise(async (resolve, reject) => {
        console.log('Calling to Cognito');
        await this.cognitoIdentityServiceProvider.adminCreateUser(
          poolData,
          (error, data) => {
            if (!error) {
              console.log('Congnito data: ', data);
              resolve(data);
            } else {
              console.log('Congnito error: ', error);
              reject(error);
            }
          },
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  getHello(): string {
    console.log(`UsersService >> getHello`,this.dbService.getHelloFromLibrary());
    return 'Hello World!';
  }

  async listUsers():Promise<User[]>{
    const users : User[]= await this.repo.find();
    return users;
  }
}
