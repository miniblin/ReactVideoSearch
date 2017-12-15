import { shallow, render } from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom'
import store from '../store'
import {setSearchTerm}from '../actionCreators'


import preload from '../../data.json';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () =>{
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>)
    expect(component).toMatchSnapshot();
})

test('Search should render the correct amount of shows', () =>{
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>)
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);

})

test('Search should render the correct amount of shows based on search term With Redux', () =>{
    const searchWord= 'Black'
    store.dispatch(setSearchTerm(searchWord))
    const component = render(
        <Provider store={store}>
            <MemoryRouter>
             <Search shows={preload.shows} searchTerm={searchWord}/>
            </MemoryRouter>
        </Provider>
    )  
    const showCount = preload.shows.filter(show =>
        `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase())>=0).length

  
    expect(component.find('.show-card').length).toEqual(showCount)
})


test('Search should render the correct amount of shows based on search term Without Redux', () =>{
    const searchWord= 'Black'
    store.dispatch(setSearchTerm(searchWord))
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord}/>)  
    const showCount = preload.shows.filter(show =>
        `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase())>=0).length

  
    expect(component.find(ShowCard).length).toEqual(showCount)
})