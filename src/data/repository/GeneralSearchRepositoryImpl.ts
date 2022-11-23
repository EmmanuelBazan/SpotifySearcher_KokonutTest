import GeneralSearch from "../../domain/model/GeneralSearch";
import GeneralSearchRepository from "../../domain/repository/GeneralSearchRepository";
import SpotiAppDataSource from "../dataSource/SpotiAppDataSource";

/** Implementacion del repositorio `GeneralSearchRepository` */
class GeneralSearchRepositoryImpl implements GeneralSearchRepository {
    dataSource: SpotiAppDataSource;

    constructor(_dataSource: SpotiAppDataSource){
        this.dataSource = _dataSource;
    }

    /**
     * Obtener funcion `getGeneralSearch` del origen de datos
     * @param query - parametro de busqueda sobre la API
     * @returns Funcion getGeneralSearch de la instancia del repositorio
     */
    async getGeneralSearch(query: string): Promise<GeneralSearch> {
        return this.dataSource.getGeneralSearch(query);
    }
    
}

export default GeneralSearchRepositoryImpl