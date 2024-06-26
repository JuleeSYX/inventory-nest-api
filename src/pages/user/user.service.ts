import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser(data: any){
        const model = {
            status: 'Success',
            data: data,
            message: 'Get user successful.'
        }
        return model;
    }
}
