import {
    Component,
    Input,
    Renderer,
    ElementRef,
    forwardRef
} from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CONTROL_VALUE_ACCESSOR:any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'yk-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [CONTROL_VALUE_ACCESSOR]
})

export class CheckboxComponent implements ControlValueAccessor {
  setDisabledState(isDisabled:boolean):void {
  }

  @Input() disabled:boolean;
  @Input() text:string;
  @Input() checked:boolean;
  @Input() value:any = null;

  constructor(private _renderer:Renderer, private _elementRef:ElementRef) {
  }

  onTouched:() => any = () => {
  };

  controlValueAccessorChangeFn:(value:any) => void = (value)=> {
  };

  writeValue(value:any) {
    this.checked = !!value;
  }

  registerOnChange(fn:(value:any) => void) {
    this.controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn:any) {
    this.onTouched = fn;
  }


}