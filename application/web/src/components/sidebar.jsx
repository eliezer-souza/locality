import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledSidebarItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;

  :last-child {
    justify-content: flex-end;
  }
`;

const SidebarItem = React.memo(({ component }) => {
  console.log(component);

  if (Array.isArray(component)) {
    return (
      <div>
        {component.map((c, i) => (
          <StyledSidebarItem key={i}>{c}</StyledSidebarItem>
        ))}
      </div>
    );
  }

  return <StyledSidebarItem>{component}</StyledSidebarItem>;
});

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  width: 70px;
  background-color: ${theme('colors.primary.dark')};
`;

const Sidebar = React.memo(
  ({ startComponent, halfComponent, endComponent }) => {
    return (
      <StyledSidebar>
        <SidebarItem component={startComponent} />
        <SidebarItem component={halfComponent} />
        <SidebarItem component={endComponent} />
      </StyledSidebar>
    );
  },
);

export default Sidebar;
