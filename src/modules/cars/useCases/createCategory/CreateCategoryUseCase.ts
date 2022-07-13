import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}

    execute({name, description}: IRequest) {

        const areadyExists = this.categoryRepository.findByName(name);
    
        if(areadyExists)
            throw new Error("Category alredy exists!");
    
    
        this.categoryRepository.create({name, description});
    }
}


export { CreateCategoryUseCase }