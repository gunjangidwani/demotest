import { httpClient } from './httpClient';
import { Api } from './api';

export function apiFactory(http) {
  return {
    spacesX: Api(http)
  };
}

const http = httpClient('https://api.spaceXdata.com/v3/launches?limit=100');
export const api = apiFactory(http);
