/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, shallow, ReactWrapper, ShallowWrapper } from 'enzyme';
import EditableText, { EditableTextProps } from './index';

describe('<EditableText />', () => {
  let rawComponent: React.ReactElement<EditableTextProps>;
  let component: ShallowWrapper<EditableTextProps>;
  let mountedComponent: ReactWrapper<EditableTextProps>;
  let fakeEvent: any;

  beforeEach(() => {
    fakeEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };
  });

  describe('with promptText', () => {
    beforeEach(() => {
      component = shallow(<EditableText promptText="PROMPT TEXT" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<EditableText className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with all props except promptText', () => {
    let updateCallback: jest.Mock;
    let beginCallback: jest.Mock;
    let endCallback: jest.Mock;

    beforeEach(() => {
      updateCallback = jest.fn();
      beginCallback = jest.fn();
      endCallback = jest.fn();

      rawComponent = (
        <EditableText
          text="TEXT"
          placeHolder="PLACEHOLDER"
          maxLength={120}
          onUpdate={updateCallback}
          onBeginEditing={beginCallback}
          onEndEditing={endCallback}
        />
      );
    });

    describe('shallow', () => {
      beforeEach(() => {
        component = shallow(rawComponent);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('mounted', () => {
      beforeEach(() => {
        mountedComponent = mount(rawComponent);
      });

      describe('when clicked', () => {
        beforeEach(() => {
          mountedComponent.find('button.y-editableText--clickable').simulate('click', fakeEvent);
        });

        it('enters edit mode', () => {
          expect(mountedComponent.find('.y-editableText--textfield input').length).toBe(1);
        });

        it('triggers the onBeginEditing callback', () => {
          expect(beginCallback).toHaveBeenCalledTimes(1);
        });

        describe('when text is updated', () => {
          // XXX: THIS IS BROKEN
          beforeEach(() => {
            const input = mountedComponent.find('.y-editableText--textfield input');
            input.simulate('focus');
            input.getDOMNode().nodeValue = 'abc';
            input.simulate('blur');
          });

          it('exits edit mode', () => {
            expect(mountedComponent.find('.y-editableText--textfield').length).toBe(0);
          });

          it('triggers the onEndEditing callback', () => {
            expect(endCallback).toHaveBeenCalledTimes(1);
          });

          it('triggers the update callback with the correct value', () => {
            expect(updateCallback).toHaveBeenCalledWith('abc');
          });
        });
      });
    });
  });
});
