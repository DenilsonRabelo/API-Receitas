import { Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
    getHello(): string {
        return 'Aceita um café? \n Acesse a documentação para saber mais sobre as rotas disponíveis';
    }
}
