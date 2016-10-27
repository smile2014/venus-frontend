import { BaseModel } from './base.model';

export class TextModel extends BaseModel<string> {
  controlType = 'textbox';
  type:string;

  constructor(options:{} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
