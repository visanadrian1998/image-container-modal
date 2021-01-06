import styled from "styled-components";

export const ContainerWrapperCss = styled.div`
  padding-left: 15%;
  padding-top: 6%;
  padding-bottom: 6%;
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: auto auto;

  grid-gap: 2.5%;
  grid-auto-flow: row;
  @media (max-width: 750px) {
    grid-template-columns: 80%;
    margin-bottom: 200px;
  }
`;

export const PostWrapperCss = styled.div`
  //width: 100%;
  border: 1px solid transparent;
  box-shadow: 0px 0px 3px 3px #dddddd;
`;
export const ContentWrapperCss = styled.div`
  width: 100%;
`;
export const ContentTitleCss = styled.h2`
  font-family: "Lato-Bold";
  padding: 0 5% 0 5%;
  margin-bottom: 8%;
`;
export const ContentSubtitleCss = styled.p`
  font-family: "Lato-Regular";
  padding: 0 5% 0 5%;
  color: #d3d3d3;
  margin-bottom: 3%;
`;
export const ContentFooterCss = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5% 0 5%;
  color: #d3d3d3;
  margin-bottom: 3%;
`;
export const ContentAuthorCss = styled.p``;
export const ContentDateCss = styled.p``;
export const BallsWrapperCss = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 5% 0 5%;
  margin-bottom: 3%;
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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

export const ImageWrapperCss = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  img{
      width:100%;
      height:200px;
  }
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
