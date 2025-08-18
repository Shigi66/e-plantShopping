import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; //Desestructura los detalles del producto desde la carga útil de la acción
            //Verifica si el artículo ya existe en el carrito comparando los nombres
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
              //Si el artículo ya existe en el carrito, incrementa su cantidad
              existingItem.quantity++;
            } else {
              // Si el artículo no existe, agrégalo al carrito con cantidad 1
              state.items.push({ name, image, cost, quantity: 1 });
            }
          
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Desestructura el nombre del producto y la nueva cantidad desde la acción
      // Busca el artículo en el carrito que coincida con el nombre dado
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
      itemToUpdate.quantity = quantity; // Si se encuentra el artículo, actualiza su cantidad al nuevo valor
}

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
