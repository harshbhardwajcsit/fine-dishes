import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import RecipeList from "../components/pages/recipeList";
import {Provider} from 'react-redux';
import configureStore from "../redux/store";

configure({adapter: new Adapter()});

test('for ingredient selection trigger', () => {
    const onFilterApply = jest.fn();
    const event = {
        target: {value: 'the-value'}
    };
    const component = shallow(
        <Provider store={configureStore()}>
            <RecipeList selectIngredient={onFilterApply}/>
        </Provider>
    );
    component.find('Autocomplete').simulate('change', event);
    expect(onFilterApply).toBeCalledWith('the-value');
})


