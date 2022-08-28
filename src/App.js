import { useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import "./App.css";

import Pages from './Routes';

const App = () => {
  useEffect(() => {
    NProgress.configure({ easing: "ease", speed: 500 });
    NProgress.start();
    NProgress.done();
  })

  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
