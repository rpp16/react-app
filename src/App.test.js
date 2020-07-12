import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Hogwarts } from './views';

test('renders hogwarts link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Hogwarts");
  expect(linkElement).toBeInTheDocument();
});

test('renders subjects link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Subjects");
  expect(linkElement).toBeInTheDocument();
});

test('renders houses link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Houses");
  expect(linkElement).toBeInTheDocument();
});

test('renders shops link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Shops");
  expect(linkElement).toBeInTheDocument();
});