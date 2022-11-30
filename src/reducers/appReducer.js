import { SET_ROOT_LEVEL_CATOGERY_DATA } from "../utils/constants";

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_ROOT_LEVEL_CATOGERY_DATA:
      return { ...state, rootLevelCatogeryData: action.payload };
    default:
      return state;
  }
};
