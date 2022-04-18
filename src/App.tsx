import * as React from 'react';
import { hot } from 'react-hot-loader/root';
// import './styles.scss';

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => (
  <div>
    <h1>
      Hello
      {' '}
      {name}
    </h1>
  </div>
);

export default hot(App);
