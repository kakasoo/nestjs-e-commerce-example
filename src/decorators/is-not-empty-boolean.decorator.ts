import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty } from 'class-validator';
import { ParseOptionalBoolean } from './is-optional-boolean.decorator';

export function IsNotEmptyBoolean() {
  return applyDecorators(IsNotEmpty(), ParseOptionalBoolean(), IsBoolean());
}
