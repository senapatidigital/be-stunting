import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { VariablesService } from './variables.service';
import { Public } from 'src/common/decorator/public.decorator';

@Controller('variables')
export class VariablesController {
  constructor(private readonly variablesService: VariablesService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get()
  findAll() {
    return this.variablesService.findAll();
  }
}
