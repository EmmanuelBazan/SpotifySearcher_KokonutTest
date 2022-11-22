import GeneralSearch from "../model/GeneralSearch";

export default interface GeneralSearchRepository {
    getGeneralSearch(query: string): Promise<GeneralSearch>;
}