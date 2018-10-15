import { fetchCardsList, fetchCardDetails } from '../api/cardsService';
import { showSpinner, hideSpinner } from './layoutActions';

import {
    CARDS_GET_LIST,
    CARDS_GET_DETAILS
} from './constants';

const extractCardsListInfo = response => ({
    serverTotal: response.NumberOfProducts,
    list: response.Products.map(product => ({
        id: product.MoonpigProductNo,
        title: product.Title,
        imageUrl: product.ProductImage.Link.Href
    }))
});

const extracCardDetailsInfo = response => ({
    title: response.Title,
    buyUrl: response.ProductUrl,
    imageUrls: response.ImageUrls.map(image => image.ImageUrl)
});

export const getCardsList = () => {
    return dispatch => {
        dispatch(showSpinner())
        fetchCardsList().then(response => {
            dispatch({
                type: CARDS_GET_LIST,
                payload: extractCardsListInfo(response)
            })
            dispatch(hideSpinner())
        }).catch(error => {
            dispatch(hideSpinner())
            console.error(error)
        })
    }
};

export const getCardDetails = id => {
    return dispatch => {
        dispatch(showSpinner())
        fetchCardDetails(id).then(response => {
            dispatch({
                type: CARDS_GET_DETAILS,
                payload: extracCardDetailsInfo(response)
            })
            dispatch(hideSpinner())
        }).catch(error => {
            dispatch(hideSpinner())
            console.error(error)
        })
    }
}