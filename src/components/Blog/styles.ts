import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledBlog = styled.li`
  max-width: 352px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  background-color: ${Color.White};
  list-style: none;
`;

const Image = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 16px 16px 0 0;
`;

const Description = styled.div`
  padding: 32px;
`;

const Date = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  margin-bottom: 8px;
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Medium};
`;

export { StyledBlog, Description, Image, Date, Title };
