import { userAction } from "@/actions/userAction";

export const authReducer = (state, action) => {
    switch (action.type) {
      case userAction.addMyData:
        console.log(action.payload)
        console.log(action)
        return { ...state, user: action.payload };
      case userAction.deleteMyData:
        return { ...state, user: action.payload };
  
      default:
        return state;
    }
  };