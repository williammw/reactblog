import _ from 'lodash';
import jsonplaceholder from "../apis/jsonplaceholder";

// version1
// export const fetchPost =  () => {
//     return async function (dispatch, getState){
//         const response = await  jsonplaceholder.get('/posts');
//         dispatch({
//             type: 'FETCH_POSTS', 
//             payload: response
//         })
//     }
// };

// same as version1, just shortform
export const fetchPost =  () => async dispatch => {
        const response = await  jsonplaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS', 
            payload: response.data
        })
}

export const fetchUser = (id) => async dispatch => {    
        const response = await jsonplaceholder.get(`/users/${id}`);
        dispatch({
            type : 'FETCH_USER',
            payload : response.data
        })
}