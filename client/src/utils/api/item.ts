import { AxiosResponse } from 'axios';
import { IMainItem, IListItem, IItemState } from 'types/item';
import { ISearchState, AutoCompleteKeyword } from 'types/search';
import client from './client';

export const getMainItem = (): Promise<AxiosResponse> => client.get<IMainItem>('/api/items/main');

export const getListItem = ({ categoryId, pageId, type, search }: IItemState): Promise<AxiosResponse> => {
  let url = '/api/items?';
  const arr = [];
  if (categoryId) arr.push(`categoryId=${categoryId}&`);
  if (pageId) arr.push(`pageId=${pageId}&`);
  if (type) arr.push(`type=${type}&`);
  if (search) arr.push(`search=${search}&`);
  url += arr.join('');
  url = url.slice(0, url.length - 1);
  return client.get<IListItem>(url);
};

export const getAutoComplete = ({ keyword }: ISearchState): Promise<AxiosResponse<AutoCompleteKeyword>> =>
  client.get(`/api/search?keyword=${keyword}`);
