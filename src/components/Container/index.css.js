import styled from "styled-components";

export const ContainerWrapperCss = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  grid-gap: 30px;
  grid-auto-flow: row;
  padding: 200px 300px;
`;

export const PostWrapperCss = styled.div`
  width: 600px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 3px 3px #dddddd;
`;
export const ContentWrapperCss = styled.div`
  width: 600px;
`;
export const ContentTitleCss = styled.h2`
  font-family: "Lato-Bold";
  padding: 0 30px 0 30px;
  margin-bottom: 50px;
`;
export const ContentSubtitleCss = styled.p`
  font-family: "Lato-Regular";
  padding: 0 30px 0 30px;
  color: #d3d3d3;
  margin-bottom: 20px;
`;
export const ContentFooterCss = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  color: #d3d3d3;
  margin-bottom: 20px;
`;
export const ContentAuthorCss = styled.p``;
export const ContentDateCss = styled.p``;
export const BallsWrapperCss = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 30px 0 30px;
  margin-bottom: 20px;
`;
export const BlueBallCss = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: blue;
  margin-right: 5px;
`;
export const OrangeBallCss = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: orange;
`;

export const ImageTextCss = styled.h4`
  color: white;
  font-family: "Lato-Bold";
  font-size: 30px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

export const ImageWrapperCss = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  &:hover {
      img{
          filter:brightness(20%);
      }
      .imageText{
          display:block;
      }
  }
  }
`;
