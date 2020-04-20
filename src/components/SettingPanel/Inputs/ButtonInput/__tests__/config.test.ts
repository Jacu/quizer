import { getIcon } from '../config';
import { faQuestion, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

describe('getIcon', () => {
    it('should provide correct icon', () => {
        expect(getIcon('True/False')).toBe(faCheckSquare);
    });

    it('should render default icon', () => {
        expect(getIcon('unknow icon')).toBe(faQuestion);
    });
});