import {compose, createStore, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { useLinkClickHandler } from 'react-router-dom';

//library helpers that are triggered before an action hits a reducer
const middlewares = [logger]
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = configureStore(rootReducer, undefined, composedEnhancers);