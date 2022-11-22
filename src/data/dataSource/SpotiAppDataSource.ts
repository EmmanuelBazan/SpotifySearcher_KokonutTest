import GeneralSearch from "../../domain/model/GeneralSearch";

export default interface SpotiAppDataSource {
    getGeneralSearch(query: string): Promise<GeneralSearch>;
}