import * as Types from "../constants/ActionTypes";

const listsInitialState = {
  product: [
    {
      id: "001",
      title: "ReactJS",
      details: "ABC-XYZ"
    },
    {
      id: "002",
      title: "HTML",
      details: "XYZ-ABC"
    }
  ],
  product_edit: { id: "" }
};
const lists = (state = listsInitialState, action) => {
  switch (action.type) {
    case Types.ADD_LIST:
      //   console.log(action);
      let id = "00" + (state.product.length + 1);
      let item = { id, title: action.title, details: action.details };
      let createState = {
        product: [item, ...state.product]
      };
      console.log(createState);

      return createState;
    case Types.DELETE_LIST:
      var products = state.product;
      let index = products.findIndex(item => {
        return item.id === action.id;
      });

      products.splice(index, 1);

      let newState = {
        product: [...products]
      };
      return newState;
    
    default:
      return state;
  }
};

export default lists;
