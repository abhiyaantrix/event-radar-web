import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from 'app/App';

const renderLayout = () => render(<App />);

describe('App', () => {
  it('renders without crashing', () => {
    renderLayout();

    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });
});
