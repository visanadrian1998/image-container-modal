import React, { useState, useEffect } from "react";
import {
  ContainerWrapperCss,
  PostWrapperCss,
  ContentWrapperCss,
  ContentTitleCss,
  ContentSubtitleCss,
  ContentFooterCss,
  ContentAuthorCss,
  ContentDateCss,
  BallsWrapperCss,
  BlueBallCss,
  OrangeBallCss,
  ImageWrapperCss,
  ImageTextCss,
  ModalWrapperCss,
  ModalContentCss,
  ModalTop,
  ModalImage,
  ModalAuthorCss,
  ModalAvatar,
  ModalFooterCss,
  ModalTitleCss,
  ModalSubtitleCss,
} from "./index.css";
import { ReactComponent as Close } from "./svg/cross-sign.svg";
const Container = () => {
  const [apiInfo, setApiInfo] = useState([]);
  const [isOpen, setModalIsOpen] = useState(0);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((res) => res.json())
      .then((data) => {
        setApiInfo(data);
      });
  }, []);
  return (
    <ContainerWrapperCss>
      {apiInfo.map((postInfo) => {
        const actualDate = new Date(1970, 0, 1);
        actualDate.setSeconds(postInfo.date);
        const month = actualDate.toLocaleString("default", {
          month: "short",
        });
        const day = actualDate.getDate();
        const year = actualDate.getFullYear();

        return (
          <>
            <PostWrapperCss>
              <ImageWrapperCss>
                <img src={postInfo.thumbnail.small} alt={postInfo.id} />
                <ImageTextCss
                  className="imageText"
                  onClick={() => setModalIsOpen(postInfo.id)}
                >
                  Learn More
                </ImageTextCss>
              </ImageWrapperCss>
              <ContentWrapperCss>
                <BallsWrapperCss>
                  <BlueBallCss />
                  <OrangeBallCss />
                </BallsWrapperCss>
                <ContentTitleCss onClick={() => setModalIsOpen(postInfo.id)}>
                  {postInfo.title}
                </ContentTitleCss>
                <ContentSubtitleCss>{postInfo.content}</ContentSubtitleCss>
                <ContentFooterCss>
                  <ContentAuthorCss>
                    {postInfo.author.name} - {postInfo.author.role}
                  </ContentAuthorCss>
                  <ContentDateCss>
                    {month} {day},{year}
                  </ContentDateCss>
                </ContentFooterCss>
              </ContentWrapperCss>
            </PostWrapperCss>
            {isOpen === postInfo.id && (
              <ModalWrapperCss>
                <ModalContentCss>
                  <ModalTop>
                    <Close onClick={() => setModalIsOpen(0)} />
                  </ModalTop>
                  <ModalImage>
                    <img src={postInfo.thumbnail.large} alt={postInfo.id} />
                  </ModalImage>
                  <ModalTitleCss>{postInfo.title}</ModalTitleCss>
                  <ModalSubtitleCss>{postInfo.content}</ModalSubtitleCss>
                  <ModalFooterCss>
                    <ModalAvatar>
                      <img src={postInfo.author.avatar} alt="avatar" />
                    </ModalAvatar>
                    <ModalAuthorCss>
                      {postInfo.author.name} - {postInfo.author.role}
                    </ModalAuthorCss>
                  </ModalFooterCss>
                </ModalContentCss>
              </ModalWrapperCss>
            )}
          </>
        );
      })}
    </ContainerWrapperCss>
  );
};
export default Container;
