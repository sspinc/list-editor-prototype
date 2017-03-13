export const ITEMS_LOADED = 'ITEMS_LOADED';

export function createAction(type, payload, ...params) {
  let extraArguments = {};

  for (const param of params) {
    extraArguments = {
      ...extraArguments,
      ...param
    };
  }

  return {
    type,
    payload,
    ...extraArguments
  };
}

