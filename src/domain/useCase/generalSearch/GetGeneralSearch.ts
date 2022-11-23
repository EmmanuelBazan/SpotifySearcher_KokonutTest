import GeneralSearch from "../../model/GeneralSearch";
import GeneralSearchRepository from "../../repository/GeneralSearchRepository";

/** Interfaz para el caso de uso `GetGeneralSearch` */
interface IgetGeneralSearch {

    /**
     * Realizar busqueda con el servicio de Spotify
     * @param query - pametro para realizar la busqueda
     * @returns Promise de tipo `GeneralSearch`
     */
    invoke(query: string): Promise<GeneralSearch>
}

/** Caso de uso que implementa de `IgetGeneralSearch` */
class GetGeneralSearch implements IgetGeneralSearch {

    private repository: GeneralSearchRepository;

    constructor(_repository: GeneralSearchRepository) {
        this.repository = _repository;
    }

    /**
     * Realizar busqueda con el servicio de Spotify
     * @param query - parametro de busqueda sobre la API
     * @returns Funcion `getGeneralSearch` de la instancia de repositorio
     */
    invoke(query: string): Promise<GeneralSearch> {
        return this.repository.getGeneralSearch(query);
    }

}

export default GetGeneralSearch;