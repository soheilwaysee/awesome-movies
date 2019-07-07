import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import SideBar from '../../components/SideBar';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

describe('SideBar Component ', () => {
  it('renders SideBar Component', async () => {
    afterEach(cleanup);
    const SideBarWithRouter = () => (
      <MemoryRouter initialEntries={['/movie/favorites']} initialIndex={0}>
        <SideBar />
      </MemoryRouter>
    );
    const { findAllByTestId, findByText, container } = render(
      <SideBarWithRouter showSideBar setShowSideBar={() => undefined} />
    );
    const links = await findAllByTestId('link');
    expect(links).toHaveLength(6);
    const favorite = await findByText('Favorites');
    expect(favorite).toHaveClass('link active');
    expect(container.firstChild).toMatchSnapshot();
  });
});
