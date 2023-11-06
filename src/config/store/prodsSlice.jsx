import { createSlice } from "@reduxjs/toolkit";

export const prodsSlice = createSlice({
  name: "prodsSlice",
  initialState: {
    code: "",
    name: "",
    brand: "",
    model: "",
    cost: "",
    price: "",
    stock: "",
  },

  reducers: {
    changeProdsCode: (state, action) => {
      return { ...state, code: action.payload };
    },
    changeProdsName: (state, action) => {
      return { ...state, name: action.payload };
    },
    changeProdsBrand: (state, action) => {
      return { ...state, brand: action.payload };
    },
    changeProdsModel: (state, action) => {
      return { ...state, model: action.payload };
    },
    changeProdsCost: (state, action) => {
      return { ...state, cost: action.payload };
    },
    changeProdsPrice: (state, action) => {
      return { ...state, price: action.payload };
    },
    changeProdsStock: (state, action) => {
      return { ...state, stock: action.payload };
    },
  },
});

export const {
  changeProdsCode,
  changeProdsName,
  changeProdsBrand,
  changeProdsModel,
  changeProdsCost,
  changeProdsPrice,
  changeProdsStock,
} = prodsSlice.actions;
export default prodsSlice.reducer;
