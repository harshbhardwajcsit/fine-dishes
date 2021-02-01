import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import RecipeList from "../components/pages/recipeList";
import {Provider} from 'react-redux';
import configureStore from "../redux/store";

configure({adapter: new Adapter()});

test('for component rendering', () => {

    const component = shallow(
        <Provider store={configureStore()}>
            <RecipeList/>
        </Provider>
    );

    expect(component.exists()).toBeTruthy();
})



