export const initialState = {
  giftChoice: null,
}

export function setGiftChoice(state, choice) {
  return { ...state, giftChoice: choice }
}
