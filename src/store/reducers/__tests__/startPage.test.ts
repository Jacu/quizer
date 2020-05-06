import startPageReducer from '../startPage';
import * as actions from '../../actions/startPage';


const mockIniatialCategoriesSetting = {
    values: [{ name: 'Any Category', id: 0 }], 
    selected: { name: 'Any Category', id: 0 },
}

const initialState = {
    loading: false,
    dataFetched: false,
    settings: {
        amount: {
            values: [5, 10, 15, 20, 50],
            selected: 5,
        },
        category: mockIniatialCategoriesSetting,
        difficulty: {
            values: ['Easy', 'Medium', 'Hard', 'Any'],
            selected: 'Any',
        },
        type: {
            values: ['ABCD', 'True/False', 'Any'],
            selected: 'Any',
        },
        apiURL: "https://opentdb.com/api.php?amount=5&category=0&type=0&dificulty=0",
    }
}

const mockAxiosError = {
    config: {},
    isAxiosError: false,
    name: 'error',
    message: 'error',
}

describe('startPage reducer', () => {
    it('FETCH_CATEGORIES_START should set loading to true', () => {
        expect(startPageReducer(undefined,actions.fetchCategoriesStart()).loading).toBeTruthy();
    });

    it('FETCH_CATEGORIES_SUCCESS', () => {
        const fetchedCategory = { name: 'newCategory', id: 666 }
        expect(startPageReducer(undefined,actions.fetchCategoriesSuccess([fetchedCategory])).settings.category.values)
            .toEqual(mockIniatialCategoriesSetting.values.concat([fetchedCategory]));
    });

    it('FETCH_CATEGORIES_FAIL', () => {
        expect(startPageReducer(undefined,actions.fetchCategoriesFail(mockAxiosError)).loading).toBeFalsy();
    });

    it('SET_QUESTION_QUANTITY', () => {
        const newQuantity = 126;
        expect(startPageReducer(undefined,actions.setQuestionQuantity(newQuantity)).settings.amount.selected).toBe(newQuantity);
    });

    it('SET_QUESTION_CATEGORY', () => {
        const mockNewCategory = { name: 'new mock category', id: 8 };
        expect(startPageReducer(undefined,actions.setQuestionCategory(mockNewCategory)).settings.category.selected).toBe(mockNewCategory);
    });

    it('SET_QUESTION_TYPE', () => {
        const mockType = 'mockType';
        expect(startPageReducer(undefined,actions.setQuestionType(mockType)).settings.type.selected).toBe(mockType);
    });

    it('SET_QUESTION_DIFFICULTY', () => {
        const mockDifficulty = 'mockDifficulty';
        expect(startPageReducer(undefined,actions.setQuestionDifficulty(mockDifficulty)).settings.difficulty.selected).toBe(mockDifficulty);
    });

    it('GENERATE_URL', () => {
        const mockCategory = { name: 'new mock category', id: 8 };
        let expectedApi = 'https://opentdb.com/api.php?amount=5&category=0&type=0&dificulty=0';
        let state = startPageReducer(undefined,actions.generateURL());
        expect(state.settings.apiURL).toBe(expectedApi);
        state = startPageReducer(state,actions.setQuestionDifficulty('Easy'));
        state = startPageReducer(state,actions.setQuestionType('ABCD'));
        state = startPageReducer(state,actions.setQuestionQuantity(10));
        state = startPageReducer(state,actions.fetchCategoriesSuccess([mockCategory]));
        state = startPageReducer(state,actions.setQuestionCategory(mockCategory));
        expectedApi = 'https://opentdb.com/api.php?amount=10&category=8&type=multiple&dificulty=easy';
        expect(startPageReducer(state,actions.generateURL()).settings.apiURL).toBe(expectedApi);
    });

    it('RESET_START_PAGE', () => {
        expect(startPageReducer(undefined,actions.reset())).toEqual(initialState);
    });
});