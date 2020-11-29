import React from 'react';
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../redux/actions'

import Card from './card'
import Search from './search'
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe("App", () => {
  it("should render my component", () => {
    const wrapper = shallow(<App />);
  });
});

