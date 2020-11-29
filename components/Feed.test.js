import React from 'react';
import Feed from './feed';
import { shallow, mount, render } from 'enzyme';

describe("Feed", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Feed />);
  });
});
  
  