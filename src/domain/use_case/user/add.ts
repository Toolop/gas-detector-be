import { User } from './../../../entities/user';

export interface CreateContactUseCase {
    execute(User: User): void;
}