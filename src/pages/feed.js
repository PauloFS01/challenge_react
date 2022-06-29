import { Box, Container } from "@mui/material";

import NvBar from "../components/NvBar";
import FeedCard from "../components/FeedCard";

const datas = [
  {
    id: 1,
    title: "title here!",
    constent: "Here comes the content",
    author: "here comes the author",
    desc: "this is desc",
  },
  {
    id: 2,
    title: "title here!",
    constent: "another content",
    author: "here comes the author",
    desc: "this is desc",
  },
  {
    id: 3,
    title: "title here!",
    constent: "One more content",
    author: "here comes the author",
    desc: "this is desc",
  },
];

export default function Home() {
  return (
    <>
      <NvBar title={"Feed"} path={"login"} pathName={"Login"} />
      <Container fixed>
        <Box sx={{ padding: 10 }}>
          {datas.map((data) => (
            <FeedCard data={data} key={data.id} />
          ))}
        </Box>
      </Container>
    </>
  );
}
