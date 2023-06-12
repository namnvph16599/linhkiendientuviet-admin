export const RESPONSE_CODES = {
  EXPIRED_SESSION: -2,
  CLIENT_ERROR: -1,
  UNKNOWN_ERROR: 1,

  /**
   * 2xxx Success code
   */
  SUCCESS: 2000,

  /**
   4xxx Permission code
   */
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401,
  PERMISSION_DENIED: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOW: 405,

  /**
   * transaction code
   */

  TRANSACTION: 3047,
  GAS_BNB: 3044
};
