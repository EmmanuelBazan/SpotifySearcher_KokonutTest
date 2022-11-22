import GeneralSearch from "../../domain/model/GeneralSearch";
import GeneralSearchRepository from "../../domain/repository/GeneralSearchRepository";
import SpotiAppDataSource from "../dataSource/SpotiAppDataSource";

class GeneralSearchRepositoryImpl implements GeneralSearchRepository {
    dataSource: SpotiAppDataSource;

    constructor(_dataSource: SpotiAppDataSource){
        this.dataSource = _dataSource;
    }

    async getGeneralSearch(query: string): Promise<GeneralSearch> {
        return this.dataSource.getGeneralSearch(query);
    }
}

export default GeneralSearchRepositoryImpl