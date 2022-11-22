import GeneralSearch from "../../model/GeneralSearch";
import GeneralSearchRepository from "../../repository/GeneralSearchRepository";

interface IgetGeneralSearch {
    invoke(query: string): Promise<GeneralSearch>
}

class GetGeneralSearch implements IgetGeneralSearch {

    private repository: GeneralSearchRepository;

    constructor(_repository: GeneralSearchRepository) {
        this.repository = _repository;
    }

    invoke(query: string): Promise<GeneralSearch> {
        return this.repository.getGeneralSearch(query);
    }
}

export default GetGeneralSearch;