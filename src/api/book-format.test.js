import { formatBook } from './book-format';
import { fullInfoBookItem } from '@mock/book-data';

test('if full info, it should be return right format', () => {
  const sample = { ...fullInfoBookItem };
  const expected = {
    id: 'vHnZCwAAQBAJ',
    title: 'The Body Keeps the Score',
    subtitle: 'Brain, Mind, and Body in the Healing of Trauma',
    authors: ['Bessel A. Van der Kolk'],
    year: '2015',
    description: 'Originally published by Viking Penguin, 2014.',
    img: 'http://books.google.com/books/content?id=vHnZCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    categories: ['Medical'],
  };
  expect(formatBook(sample)).toEqual(expected);
});

test('if no imageLinks, it should be return empty url', () => {
  const sample = { ...fullInfoBookItem };
  sample.imageLinks = undefined;
  delete sample.volumeInfo.imageLinks;
  const expected = {
    id: 'vHnZCwAAQBAJ',
    title: 'The Body Keeps the Score',
    subtitle: 'Brain, Mind, and Body in the Healing of Trauma',
    authors: ['Bessel A. Van der Kolk'],
    year: '2015',
    description: 'Originally published by Viking Penguin, 2014.',
    img: '',
    categories: ['Medical'],
  };
  expect(formatBook(sample)).toEqual(expected);
});
