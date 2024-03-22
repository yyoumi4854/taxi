// library
import {atom} from 'recoil';

// types
import {RecordType} from '../types/types';

export const recordState = atom<RecordType[]>({
  key: 'recordState',
  default: [],
});
