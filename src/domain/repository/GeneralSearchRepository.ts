import GeneralSearch from "../model/GeneralSearch";

/** Repositorio del modelo GeneralSearch */
export default interface GeneralSearchRepository {

    /**
     * Hacer una busqueda con el servicio de spotify
     * @param query - parametro de busqueda sobre la API
     * @returns (void)
     */
    getGeneralSearch(query: string): Promise<GeneralSearch>;
}