import { userAction } from "@/actions/userAction";

export const authReducer = (state, action) => {
  console.log(state, action, userAction.addMyData)
    switch (action.type) {
      case userAction.addMyData:
        return { ...state, user: action.payload };
      case userAction.deleteMyData:
        return { ...state, user: action.payload };
  
      default:
        return state;
    }
  };