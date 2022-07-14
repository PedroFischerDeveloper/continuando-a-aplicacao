import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}

    async execute({name, description}: IRequest): Promise<void> {

        const areadyExists = await this.categoryRepository.findByName(name);
    
        if(areadyExists)
            throw new Error("Category alredy exists!");
    
    
        this.categoryRepository.create({name, description});
    }
}


export { CreateCategoryUseCase }