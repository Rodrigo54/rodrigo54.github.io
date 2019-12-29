import { Link } from 'gatsby';
import styled from 'styled-components';

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: #192734;
  display: flex;
  flex-flow: row nowrap;
`;

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #192734;
  color: #1fa1f2;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: #38444d;
  }
  &.previous {
    border-right: 1px solid #38444d;
    justify-content: flex-start;
    margin-right: auto;
  }
  &.next {
    justify-content: flex-end;
    margin-left: auto;
  }
  &.next:only-child {
    margin-left: auto;
    border-left: 1px solid var(--borders);
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`;
