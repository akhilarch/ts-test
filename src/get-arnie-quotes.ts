import { httpGet } from './mock-http-interface';

type TResult = { 'Arnie Quote'?: string, 'FAILURE'?: string };

export const getArnieQuotes = async (urls: string[]): Promise<TResult[]> => {
  let result: TResult;

  const quotes = urls.map((url) => {
    return httpGet(url)
      .then((response) => {
        if (response.status === 200) {
          result = { 'Arnie Quote': JSON.parse(response.body).message };
        } else {
          result = { 'FAILURE': JSON.parse(response.body).message };
        }
        return result;
      });
  });
  return Promise.all(quotes);
};

