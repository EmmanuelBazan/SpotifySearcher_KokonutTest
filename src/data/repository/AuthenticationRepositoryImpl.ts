import {Authentication} from '../../domain/model/Authentication';
import AuthenticationRepository from '../../domain/repository/AuthenticationRepository';
import AuthenticationDataSource from '../dataSource/AuthenticationDataSource';

class AuthenticationRepositoryImpl implements AuthenticationRepository {
  dataSource: AuthenticationDataSource;

  constructor(_dataSource: AuthenticationDataSource) {
    this.dataSource = _dataSource;
  }

  async getAuthenticationToken(code: string): Promise<Authentication> {
    return this.dataSource.getAuthenticationToken(code);
  }

  refreshToken(): string {
      return 'Token refrescado'
  }

}

export default AuthenticationRepositoryImpl;
