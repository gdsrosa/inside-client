import React from 'react';
import { render } from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Root from './root';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

const renderApp = RootComponent => {
  render(
    <LocaleProvider locale={enUS}>
      <RootComponent />
    </LocaleProvider>,
    BootstrapedElement
  );
};

renderApp(Root);

registerServiceWorker();
