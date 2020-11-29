import React from 'react';
import Search from './search';
import { shallow, mount, render } from 'enzyme';

describe("Search", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Search />);
  });
});
  
  