import { httpGet } from './mock-http-interface';

type TResult = { 'Arnie Quote'?: string, 'FAILURE'?: string };

export const getArnieQuotes = async (urls: string[]): Promise<TResult[]> => {

  const quotes = urls.map((url) => {
    return httpGet(url).then((response) => {
      const result: TResult = (response.status === 200) ? { 'Arnie Quote': JSON.parse(response.body).message } : { 'FAILURE': JSON.parse(response.body).message }
      return result;
    });
  });
  return Promise.all(quotes);
};

