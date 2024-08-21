import { createReducer} from '@reduxjs/toolkit';
import { changeActiveCity, setOffersData,setOffersDataLoadingStatus, requireAuthorization } from './actions';
import { CITIES_MOCKS } from '../mock/city';
import { City } from '../types/types';
import { CardProps } from '../components/card/card';
import { OfferCards } from '../pages/offer/offer';
import { AuthorizationStatus } from '../const';

interface initialStateProps {
  currentCity: City;
  offersData: undefined | CardProps[];
  offersFullData: undefined | OfferCards[];
  isOffersDataLoading: boolean;
  authorizationStatus:string;
}

const initialState: initialStateProps = {
  currentCity: CITIES_MOCKS[0],
  offersData: undefined,
  offersFullData: undefined,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState,(builder) => {
  builder
    .addCase(changeActiveCity,(state,action)=>{
      state.currentCity = action.payload.currentCity;
    })
    .addCase(setOffersData,(state,action)=>{
      state.offersData = action.payload.offersData;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});


