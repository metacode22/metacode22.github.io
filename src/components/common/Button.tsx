import styled from '@emotion/styled';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Button = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Button;

const Container = styled.div``;
