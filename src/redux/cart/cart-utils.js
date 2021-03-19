export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExists = cartItems.find((item) => item.id === itemToAdd.id);

  if (itemExists) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const itemExists = cartItems.find((item) => item.id === cartItemToRemove.id);

  if (itemExists.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((item) =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
