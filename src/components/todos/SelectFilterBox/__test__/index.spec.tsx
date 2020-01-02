import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Radio } from '@material-ui/core';

import SelectFilterBox, { SelectFilterBoxProps } from "../";

describe('<SelectFilterBox />', () => {

  const onChangeMock = jest.fn((): void => {});

  const props: SelectFilterBoxProps = {
    isFilter: false,
    // onChangeMock変数を介さないとモック使用時にエラーになる
    // propsの型指定でprops.onChangeが縛られているためモックのメソッド(.mockなど)でエラー
    // NG ↓
    // onChange: jest.fn((): void => {})
    onChange: onChangeMock
  };

  afterEach(() => {
    jest.resetAllMocks()
  });

  // jestにもcontextはあるらしいがプラグインを導入する必要があるため、だるいからdescribeで場合分けした
  describe('when isFilter flag is true', () => {
    it('should ".filter-radio" is checked and ".not-filter-radio" is not', () => {
      const wrapper: ShallowWrapper<
        SelectFilterBoxProps
      > = shallow(<SelectFilterBox {...props} isFilter={true} />);

      expect(wrapper.find(Radio).length).toBe(2);
      expect(wrapper.find('.filter-radio').props().checked).toBeTruthy();
      expect(wrapper.find('.not-filter-radio').props().checked).toBeFalsy();
    });

    it('should be called onChange if clicked', () => {
      const wrapper: ShallowWrapper<
        SelectFilterBoxProps
      > = shallow(<SelectFilterBox {...props} isFilter={true} />);

      const notFilterRadio = wrapper.find('.not-filter-radio');

      expect(notFilterRadio.props().checked).toBeFalsy();
      notFilterRadio.simulate('change');
      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock.mock.calls.length).toBe(1);
    });
  });

  describe('when isFilter flag is false', () => {

    it('should ".not-filter-radio" is checked and ".filter-radio" is not', () => {
      const wrapper: ShallowWrapper<
        SelectFilterBoxProps
      > = shallow(<SelectFilterBox {...props} isFilter={false} />);

      expect(wrapper.find(Radio).length).toBe(2);
      expect(wrapper.find('.not-filter-radio').props().checked).toBeTruthy();
      expect(wrapper.find('.filter-radio').props().checked).toBeFalsy();
    });

    it('should be called onChange if clicked', () => {
      const wrapper: ShallowWrapper<
        SelectFilterBoxProps
      > = shallow(<SelectFilterBox {...props} isFilter={false} />);

      const filterRadio = wrapper.find('.filter-radio');

      expect(filterRadio.props().checked).toBeFalsy();
      filterRadio.simulate('change');
      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock.mock.calls.length).toBe(1);
    });
  });

});
