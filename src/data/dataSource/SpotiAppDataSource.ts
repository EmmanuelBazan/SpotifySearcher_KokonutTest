import GeneralSearch from "../../domain/model/GeneralSearch";

/** Interfaz que describe los metodos de nuestro origen de datos. */
export default interface SpotiAppDataSource {
    /**
     * Realizar una busqueda sobre la API de Spotify
     * 
     * @param query - los parametros de busqueda sobre la API
     * 
     * @returns Promesa con objeto de tipo `GeneralSearch`
     */
    getGeneralSearch(query: string): Promise<GeneralSearch>;
}