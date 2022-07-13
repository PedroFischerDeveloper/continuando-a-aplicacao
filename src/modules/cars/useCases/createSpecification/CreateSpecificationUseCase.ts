import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string
}

class CreateSpecificationUseCase {
    
    constructor(private SpecifictaionRepository: ISpecificationRepository) {

    }

    execute({name, description}: IRequest): void {
        
        const specificationAlredyExists = this.SpecifictaionRepository.findByName(name);

        if(specificationAlredyExists)
            throw new Error("Specification alredy exists!");

        this.SpecifictaionRepository.create({
            name, 
            description
        });
    }   
}

export {CreateSpecificationUseCase}