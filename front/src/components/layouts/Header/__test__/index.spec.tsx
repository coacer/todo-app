import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Link } from "react-router-dom";

import Header from "../";

describe('<Header />', () => {
  it('displays nav list', () => {
    const wrapper: ShallowWrapper<
      undefined,
      undefined
    > = shallow(<Header />);

    expect(wrapper.find(Link).length).toBe(2);
    expect(wrapper.find('.nav-home').text()).toBe('Home');
    expect(wrapper.find('.nav-new').text()).toBe('New');
  });
});
