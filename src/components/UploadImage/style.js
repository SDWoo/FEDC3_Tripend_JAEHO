import styled from '@emotion/styled';

const ImageContainer = styled.div`
  width: 100%;
  height: 59%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
const ImageUploaderContainer = styled.div`
  width: 100%;
`;

const UploadImageWrapper = styled.div`
  height: 50px;
  width: 250px;
`;

const UploadDescription = styled.p`
  color: #676767;
  width: 400px;
  font-size: 15px;
  font-weight: 400;
  margin-right: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  flex-direction: column;
`;

export {
  ImageContainer,
  UploadImageWrapper,
  UploadDescription,
  TitleWrapper,
  ImageUploaderContainer,
};
