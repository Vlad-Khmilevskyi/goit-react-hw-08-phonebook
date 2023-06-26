import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, PageContainer } from './Layout.styles';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <Container>
        <Navigation />

      <PageContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PageContainer>

    </Container>
  );
};

export default Layout;
