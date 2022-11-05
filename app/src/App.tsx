import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import { Main } from './component/main/Main';

export const App: React.FC = () => (
  <RecoilRoot>
    <Main/>
  </RecoilRoot>
);