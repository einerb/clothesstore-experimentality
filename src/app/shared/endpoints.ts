import { environment } from '../../environments/environment';

export const Endpoint = {
  PRODUCT: {
    BASE: (siteId: string, categoryId: string, limit: number, sort: string) =>
      environment.apiHost +
      `sites/${siteId}/search?category=${categoryId}&limit=${limit}&sort=${sort}`,
    SEARCH: (siteId: string, categoryId: string, search: string, sort: string) =>
      environment.apiHost +
      `sites/${siteId}/search?q=${search}&category=${categoryId}&sort=${sort}`,
  },
};
