import MVDB from '../../../configs';
import { IS_ERROR, LOAD_SHOWS } from '../types';

export const topRatedShows = () => async (dispatch: any) => {

  const link = MVDB.BASE_URL + 'tv/top_rated?api_key=' + MVDB.API_KEY + '&language=en-US&page=1';
  const res = await fetch(link);
  const data = await res.json();

  if(data.status_code)
  {
    return dispatch({
      type: IS_ERROR,
      payload: {
        error: true,
        message: data.status_message,
        loaded: true
      }
    })
  } 

  return dispatch({
    type:LOAD_SHOWS,
    payload: {
      shows: data.results.slice(0, 12),
      error: false,
      message: '',
      loaded: true
    }
  })

}
