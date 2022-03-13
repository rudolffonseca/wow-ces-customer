// returns true if there is a token in the store "auth"
export const hasToken = (state: any) => {
  if (state.authStore.token) {
    return true;
  } else {
    return false;
  }
};

//return email from the store.
export const getEmail = (state: any): string => {
  return state.authStore.email;
};

export const getMessage = (state: any): string => {
  return state.authStore.message;
};
