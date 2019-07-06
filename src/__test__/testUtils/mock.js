import MockAdapter from 'axios-mock-adapter';
import { instance } from '../../utils/request';
const mock = new MockAdapter(instance);

export default mock;