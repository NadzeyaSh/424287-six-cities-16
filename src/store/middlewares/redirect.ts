import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {reducer} from '../reducer';
import { AppRoute } from '../../const';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'REDIRECT_TO_ROUTE') {
          browserHistory.push(AppRoute.Root);
        }

        return next(action);
      };
