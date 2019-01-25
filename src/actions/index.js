import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';

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


export const fetchPostsAndUsers = () => async (dispatch, getState) => {    
    await dispatch(fetchPost());    
    // method 1
    // const userIds = _.uniq(_.map(getState().posts, 'userId'))
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // method 2
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); //value == execute
};

// same as version2, just shortform
export const fetchPost =  () => async dispatch => {
    const response = await  jsonplaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
};
/* good approach (2) :: memoize 1 time, prevent duplicate call */
export const fetchUser = (id) => async dispatch  => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({type : 'FETCH_USER', payload : response.data});
}




//not working
// export const fetchUser = 
//     function (id) {
//         return _.memoize (async function (dispatch) {    
//             const response = await jsonplaceholder.get(`/users/${id}`);
//             dispatch({type : 'FETCH_USER', payload : response.data });
//         });
//     }


/* good approach (1) :: memoize 1 time, prevent duplicate call */
// export const fetchUser = (id) =>  dispatch  => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonplaceholder.get(`/users/${id}`);
//     dispatch({type : 'FETCH_USER', payload : response.data});
// });
