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
  cursor: pointer;
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
  cursor: pointer;
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
export const ModalWrapperCss = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;
export const ModalContentCss = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 15px 0;
  width: 40%;
  border-radius: 1%;
  @media (max-width: 750px) {
    width: 80%;
  }
`;
export const ModalTop = styled.div`
  width: 100%;
  svg {
    float: right;
    fill: #d3d3d3;
    width: 4%;
    height: 4%;
    padding-right: 3%;
    cursor: pointer;
  }
  margin-bottom: 6.5%;
`;
export const ModalImage = styled.div`
  img {
    max-height: 300px;
    width: 100%;
  }
`;
export const ModalText = styled.div``;
export const ModalFooterCss = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 5%;
`;
export const ModalAvatar = styled.div`
  img {
    border-radius: 50%;
    height: 50px;
  }
  margin-right: 3%;
`;
export const ModalAuthorCss = styled.p`
  color: #d3d3d3;
  margin-top: 14px;
`;
export const ModalTitleCss = styled.h2`
  font-family: "Lato-Bold";
  padding: 0 5% 0 5%;
  margin-bottom: 3%;
`;
export const ModalSubtitleCss = styled.p`
  font-family: "Lato-Regular";
  padding: 0 5% 0 5%;
  color: #d3d3d3;
  margin-bottom: 5%;
`;
export const MissingAvatar = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 35px;
  margin-right: 3%;
`;
