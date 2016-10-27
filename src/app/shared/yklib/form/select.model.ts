import { BaseModel } from './base.model';

export class SelectModel extends BaseModel<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options:{} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}