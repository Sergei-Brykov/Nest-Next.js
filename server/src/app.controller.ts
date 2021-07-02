import {Controller, Get} from "@nestjs/common"

@Controller('/api')
export class AppController {
    @Get()
    getAllUsers() {
        return 'gett all users'
    }
}