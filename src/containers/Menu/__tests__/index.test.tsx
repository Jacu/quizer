import React from 'react';
import StartPage from "../";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { generateURL, initQuiz, init } from "../../../store/actions";

const initialState = {
    startPage: {
        settings: {
            apiURL: 'url',
        },
        loading: false,
        dataFetched: false,
    },
};

jest.mock('../../../store/actions', () => ({
    actionTypes: {},
    generateURL: jest.fn(() => ({ type: 'type' })),
    initQuiz: jest.fn(() => ({ type: 'type' })),
    init: jest.fn(() => ({ type: 'type' })),
}));

jest.mock('../../../components/SettingPanel', () => () => <div>MOCKED SETTING PANEL</div>);

const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('StartPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        store.clearActions();
    });

    it('should render with props', () => {
        const { asFragment } = render(<Provider store={store}><StartPage /></Provider>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should init when no data', () => {
        render(<Provider store={store}><StartPage /></Provider>);
        expect(init).toHaveBeenCalledTimes(1);
    });

    it('should NOT init when data available', () => {
        const mockStoreLoading = mockStore({ startPage: { ...initialState.startPage, dataFetched: true } });
        render(<Provider store={mockStoreLoading}><StartPage /></Provider>);
        expect(init).not.toHaveBeenCalled();
    });

    it('should not render button when loading', () => {
        const mockStoreLoading = mockStore({ startPage: { ...initialState.startPage, loading: true } });
        const { queryByText } = render(<Provider store={mockStoreLoading}><StartPage /></Provider>);
        expect(queryByText('Start')).toBeNull();
    });

    it('should not render setting panel when loading', () => {
        const mockStoreLoading = mockStore({ startPage: { ...initialState.startPage, loading: true } });
        const { queryByText } = render(<Provider store={mockStoreLoading}><StartPage /></Provider>);
        expect(queryByText('MOCKED SETTING PANEL')).toBeNull();
    });

    it('should generateURL on Start click', () => {
        const { getByText } = render(<Provider store={store}><StartPage /></Provider>);
        fireEvent.click(getByText('Start'));
        expect(generateURL).toHaveBeenCalledTimes(1);
    });

    it('should initQuiz on Start click', () => {
        const { getByText } = render(<Provider store={store}><StartPage /></Provider>);
        fireEvent.click(getByText('Start'));
        expect(initQuiz).toHaveBeenCalledTimes(1);
    });

    it('should initQuiz on Enter', () => {
        const { container } = render(<Provider store={store}><StartPage /></Provider>);
        fireEvent.keyDown(container.firstChild!,{key: 'Enter', code: 'Enter'})
        expect(generateURL).toHaveBeenCalledTimes(1);
        expect(initQuiz).toHaveBeenCalledTimes(1);
    });
});