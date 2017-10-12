let target = {
  ACCOUNT_SELECTED: 'EXCHANGE.ACCOUNT_SELECTED',
  SOURCE_TOKEN_SELECTED: 'EXCHANGE.SOURCE_TOKEN_SELECTED',
  SOURCE_AMOUNT_SPECIFIED: 'EXCHANGE.SOURCE_AMOUNT_SPECIFIED',
  DEST_TOKEN_SELECTED: 'EXCHANGE.DEST_TOKEN_SELECTED',
  MIN_CONVERSION_RATE_SPECIFIED: 'EXCHANGE.MIN_CONVERSION_RATE_SPECIFIED',
  MIN_AMOUNT_SPECIFIED: 'EXCHANGE.MIN_AMOUNT_SPECIFIED',
  RECIPIENT_SPECIFIED: 'EXCHANGE.RECIPIENT_SPECIFIED',
  GAS_SPECIFIED: 'EXCHANGE.GAS_SPECIFIED',
  GAS_PRICE_SPECIFIED: 'EXCHANGE.GAS_PRICE_SPECIFIED',
  ERROR_THREW: 'EXCHANGE.ERROR_THREW',
  EXCHANGE_FORM_EMPTIED: 'EXCHANGE.EXCHANGE_FORM_EMPTIED',
  EXCHANGE_FORM_RESET_STEP: 'EXCHANGE.EXCHANGE_FORM_RESET_STEP',
  EXCHANGE_FORM_NEXT_STEP: 'EXCHANGE.EXCHANGE_FORM_NEXT_STEP',
  EXCHANGE_FORM_STEP_SPECIFIED: 'EXCHANGE.EXCHANGE_FORM_STEP_SPECIFIED',
  EXCHANGE_FORM_PREVIOUS_STEP: 'EXCHANGE.EXCHANGE_FORM_PREVIOUS_STEP',
  EXCHANGE_FORM_SUGGEST_RATE: 'EXCHANGE.EXCHANGE_FORM_SUGGEST_RATE',
  EXCHANGE_FORM_APPROVAL_TX_BROADCAST_PENDING: 'EXCHANGE.EXCHANGE_FORM_APPROVAL_TX_BROADCAST_PENDING',
  EXCHANGE_FORM_APPROVAL_TX_BROADCAST_FUFILLED: 'EXCHANGE.EXCHANGE_FORM_APPROVAL_TX_BROADCAST_FUFILLED',
  EXCHANGE_FORM_APPROVAL_TX_BROADCAST_REJECTED: 'EXCHANGE.EXCHANGE_FORM_APPROVAL_TX_BROADCAST_REJECTED',
  CROSS_SEND_SELECTED: 'EXCHANGE.CROSS_SEND_SELECTED',
  CROSS_SEND_DESELECTED: 'EXCHANGE.CROSS_SEND_DESELECTED',
  ADVANCE_SELECTED: 'EXCHANGE.ADVANCE_SELECTED',
  ADVANCE_DESELECTED: 'EXCHANGE.ADVANCE_DESELECTED',
  EXCHANGE_FORM_TX_BROADCAST_PENDING: 'EXCHANGE.EXCHANGE_FORM_TX_BROADCAST_PENDING',
  EXCHANGE_FORM_TX_BROADCAST_FULFILLED: 'EXCHANGE.EXCHANGE_FORM_TX_BROADCAST_FULFILLED',  
  EXCHANGE_FORM_TX_BROADCAST_REJECTED: 'EXCHANGE.EXCHANGE_FORM_TX_BROADCAST_REJECTED'
}
let handler = {
  get: (target, key) => {
    if (target.hasOwnProperty(key)) return target[key];
    else throw new Error(`Fired a wrong actionname: ${key}. Available Actions: ${Object.keys(target)}`);
  }
}
const proxy = new Proxy(target, handler)
export default proxy