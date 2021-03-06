import * as React from 'react';
import styled from 'styled-components';
import { html } from '../frags';

const StyledDiv = styled.div`
  background: white;
  font-family: Georgia;
  padding: 2.5em 5em 3em 5em;
  box-shadow: 3px 3px 3px #aaa;
  margin-bottom: 60px;
  position: relative;
  &::before {
    content: 'RENDERED';
    position: absolute;
    top: 6px;
    right: 4px;
    font-size: 12px;
    font-family: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
    color: rgba(0, 0, 0, 0.2);
  }
`;

const Html: React.FC<{ id: string }> = ({ id }) => (
  <StyledDiv className="rendered-adoc html">
    <div className="body" dangerouslySetInnerHTML={{ __html: html(id) }} />
  </StyledDiv>
);

export default Html;
