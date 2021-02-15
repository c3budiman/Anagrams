import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'


test('renders page without crash', () => {
  render(<App />);
  const linkElement = screen.getByText(/Anagram checker/i);
  expect(linkElement).toBeInTheDocument();
});


test('type some words, click add, and calculate the anagram', () => {
  const dom = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const wordsInput = getById(dom.container, 'words');
  const ButtonAdd = getById(dom.container, 'addWords');
  const anagramJson = getById(dom.container, 'anagramJson');

  userEvent.type(wordsInput, 'kata');
  userEvent.click(ButtonAdd);

  userEvent.type(wordsInput, 'taka');
  userEvent.click(ButtonAdd);

  userEvent.type(wordsInput, 'aw');
  userEvent.click(ButtonAdd);

  expect(anagramJson).toHaveTextContent('[["kata","taka"],["aw"]]')
});