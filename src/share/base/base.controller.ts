// This file to define base response return from controller
import { Controller } from '@nestjs/common';

type ResponseOption = {
  statusCode: number;
  message: string;
};

@Controller()
export class BaseController {
  protected statusCode: number;
  protected message: string;

  contructor() {
    this.statusCode = 200;
    this.message = 'response api success';
  }

  // method transform data from controller
  response<T>(data: T, options: ResponseOption) {
    const { statusCode, message } = options;
    return {
      statusCode: statusCode ?? this.statusCode,
      message: message ?? this.message,
      data: data,
    };
  }
}
