import ButtonInput from './ButtonInput';
import CategoryInput from './CategoryInput';
import SliderInput from './SliderInput';

export interface IInput<T> {
    label: string,
    options: T[],
    selected: T,
    onChange: (newInput: T) => void,
}

export {
    ButtonInput,
    CategoryInput,
    SliderInput,
}