/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
jest.mock('./KeyboardNavigationEventListener');

import KeyboardNavigationEventListener from './KeyboardNavigationEventListener';
import { getMode, subscribe, unsubscribe } from './keyboardNavigation';

describe('keyboardNavigation', () => {
  let callback: jest.Mock;

  beforeEach(() => {
    callback = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getMode()', () => {
    beforeEach(() => {
      jest.spyOn(KeyboardNavigationEventListener.prototype, 'getMode').mockReturnValue('fake mode');
    });

    it('calls getMode on KeyboardNavigationEventListener', () => {
      expect(getMode()).toBe('fake mode');
    });
  });

  describe('subscribe()', () => {
    beforeEach(() => {
      jest
        .spyOn(KeyboardNavigationEventListener.prototype, 'subscribe')
        .mockImplementation(cb => cb('new fake mode'));
      subscribe(callback);
    });

    it('is passed to KeyboardNavigationEventListener', () => {
      expect(callback).toHaveBeenCalledWith('new fake mode');
    });
  });

  describe('unsubscribe()', () => {
    beforeEach(() => {
      jest
        .spyOn(KeyboardNavigationEventListener.prototype, 'unsubscribe')
        .mockImplementation(cb => cb('another fake mode'));
      unsubscribe(callback);
    });

    it('is passed to KeyboardNavigationEventListener', () => {
      expect(callback).toHaveBeenCalledWith('another fake mode');
    });
  });
});
