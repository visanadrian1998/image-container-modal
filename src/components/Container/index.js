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
} from "./index.css";
const Container = () => {
  const [apiInfo, setApiInfo] = useState([]);

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
        let actualDate = new Date(1970, 0, 1);
        actualDate.setSeconds(postInfo.date);
        const month = actualDate.toLocaleString("default", {
          month: "short",
        });
        var day = actualDate.getDate();
        var year = actualDate.getFullYear();

        return (
          <PostWrapperCss>
            <ImageWrapperCss>
              <img
                src={postInfo.thumbnail.small}
                alt={apiInfo.id}
                width="600"
                height="300"
              />
              <ImageTextCss className="imageText">Learn More</ImageTextCss>
            </ImageWrapperCss>
            <ContentWrapperCss>
              <BallsWrapperCss>
                <BlueBallCss />
                <OrangeBallCss />
              </BallsWrapperCss>
              <ContentTitleCss>{postInfo.title}</ContentTitleCss>
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
        );
      })}
    </ContainerWrapperCss>
  );
};
export default Container;
