import { ROUTES } from './constants/routes';

export const isPostDetailUrl = (path: string) => {
  if (path === ROUTES.HOME) return false;
  return !Object.values(ROUTES).includes(path.substring(0, path.length - 1));
};
