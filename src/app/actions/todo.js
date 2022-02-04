import { TODO } from "./actionTypes"

export function request(url, payload) {
    return {
      url,
      payload,
      type: TODO.REQUEST
    };
  }
  
  export function success(data, payload) {
    return {
      data,
      payload,
      type: TODO.SUCCESS
    };
  }
  
  export function failure(errorMessage) {
    return {
      errorMessage,
      type: TODO.FAILURE
    };
  }
  