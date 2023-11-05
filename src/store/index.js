import {combineReducers, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import heroes from "../reducers/heroes";
import filters from "../reducers/filters";
import { createStore } from "redux";
// import { configureStore } from '@reduxjs/toolkit';



// проверяет тип действия, и если это строка, он преобразует ее 
    // в объект действия, содержащий это значение в поле type.
    // если не вляется строкой ,передает его дальше.
const stringMiddleware = () => (next) => (action) => {
    if (typeof action === "string") {
        return next({
            type: action
        })
    }
    return next(action)
};
// настройка Redux для использования инструмента разработки Redux DevTools(браузерное расширение)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// объединяет редюсеры и применяет middleware(Redux Thunk и stringMiddleware)
//  для обработки действий и состояний
const store = createStore(
    combineReducers({heroes, filters}),
    composeEnhancers(applyMiddleware(ReduxThunk, stringMiddleware))
);

// const store = createStore(
//     combineReducers({heroes,filters}),
//     compose(applyMiddleware(ReduxThunk, stringMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );


  
export default store;