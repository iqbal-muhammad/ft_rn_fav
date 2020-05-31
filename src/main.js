import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import App from './App';

import StaticData from './StaticData.json';
import Module from './Module.json';
import { writeConsole } from '../../../../../utils/commonFunctions';

const JSX=(props)=>{
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App {...props} />
            </PersistGate>
        </Provider>
    )
}

const exposeFunction=(data)=>{
    console.log("data",data)
}


JSX.defaultProps = {
    StaticData,
    Module,
    exposeFunction
}

export default JSX;