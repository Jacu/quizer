import ButtonInput from './ButtonInput';
import DropdownInput from './DropdownInput';
import SliderInput from './SliderInput';

export interface IInput<T> {
    label: string,
    options: T[],
    selected: T,
    onChange: (newInput: T) => void,
}

export {
    ButtonInput,
    DropdownInput,
    SliderInput,
}