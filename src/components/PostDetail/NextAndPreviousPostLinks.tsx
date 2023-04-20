import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import COLORS from 'utils/constants/colors';

type Props = {
  previousPost?: {
    title: string;
    slug: string;
  };
  nextPost?: {
    title: string;
    slug: string;
  };
};

const NextAndPreviousPostLinks = ({ previousPost, nextPost }: Props) => {
  return (
    <Container>
      <PreviousContainer>
        {previousPost && (
          <StyledLink to={previousPost.slug}>
            <IoIosArrowBack size={20} />
            <TextContainer>
              <span style={{ fontSize: '12px', color: COLORS.GRAY_BOLD }}>
                Previous
              </span>
              <div>{previousPost.title}</div>
            </TextContainer>
          </StyledLink>
        )}
      </PreviousContainer>
      <NextContainer>
        {nextPost && (
          <StyledLink to={nextPost.slug}>
            <TextContainer>
              <span style={{ fontSize: '12px', color: COLORS.GRAY_BOLD }}>
                Next
              </span>
              <div>{nextPost.title}</div>
            </TextContainer>
            <IoIosArrowForward size={20} />
          </StyledLink>
        )}
      </NextContainer>
    </Container>
  );
};

export default NextAndPreviousPostLinks;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0;
`;

const LinkContainer = styled.div`
  flex: 1;
`;

const PreviousContainer = styled(LinkContainer)`
  text-align: start;
`;

const NextContainer = styled(LinkContainer)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  text-align: end;
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
