import {Authentication} from '../../domain/model/Authentication';
import AuthenticationRepository from '../../domain/repository/AuthenticationRepository';
import AuthenticationDataSource from '../dataSource/AuthenticationDataSource';

/** Implementacion del repositorio `AuthenticationRepository` */
class AuthenticationRepositoryImpl implements AuthenticationRepository {
  dataSource: AuthenticationDataSource;

  constructor(_dataSource: AuthenticationDataSource) {
    this.dataSource = _dataSource;
  }

  /**
   * Obtener funcion `getAuthenticationToken` del origen de datos
   * @param code - codigo para intercambiar por el token de acceso
   * @returns Funcion `getAuthenticationToken` de la instacia del repositorio
   */
  async getAuthenticationToken(code: string) {
    return this.dataSource.getAuthenticationToken(code);
  }

}

export default AuthenticationRepositoryImpl;
