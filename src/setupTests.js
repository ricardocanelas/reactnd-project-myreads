import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JestFetchMock from 'jest-fetch-mock'

configure({ adapter: new Adapter() });

global.fetch = JestFetchMock


class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = value.toString();
    }
  
    removeItem(key) {
      delete this.store[key];
    }
};
  
global.localStorage = new LocalStorageMock;