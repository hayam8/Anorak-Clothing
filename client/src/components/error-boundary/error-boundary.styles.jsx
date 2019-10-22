import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  background-color: #ffebef;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #ccccff;
`;

export const ErrorImageSubtext = styled.h2`
  font-size: 14px;
  color: #ccccff;
`;
