import requestReducer from '../../app/reducers/request';
import mockData from '../__mocks__/mockData';

const initialState = {
  requests: [],
  request: {},
};
const request = {
  title: 'new article',
  description: 'new article begins',
};
describe('Request reducer', () => {
  it('should return default state when nothing is passed', (done) => {
    const action = {
      type: ''
    };
    const expected = {
      requests: [],
      request: {},
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when CREATE_REQUEST_SUCCESSFUL is passed', (done) => {
    const action = {
      type: 'CREATE_REQUEST_SUCCESSFUL',
      request
    };
    const expected = {
      requests: [{
        title: 'new article',
        description: 'new article begins',
      }],
      request: {},
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should load all requests when LOAD_REQUESTS_SUCCESSFUL is passed', (done) => {
    const action = {
      type: 'LOAD_REQUESTS_SUCCESSFUL',
      requests: mockData.data
    };
    const expected = {
      requests: mockData.data,
      request: {},
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should load a requests when LOAD_REQUEST_SUCCESS is passed', (done) => {
    const action = {
      type: 'LOAD_REQUEST_SUCCESS',
      request: mockData.data[0]
    };
    const expected = {
      request: mockData.data[0],
      requests: [],
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
});
