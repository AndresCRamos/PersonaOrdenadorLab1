import { Container, Stack, Title } from "@mantine/core";
import React from "react";

interface BlogEntryLayoutProps {
  children: React.ReactNode;
  title: string;
}

const BlogEntryLayout: React.FC<BlogEntryLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <Container>
      <Stack>
        <Title ta={"center"}>{title}</Title>
        {children}
      </Stack>
    </Container>
  );
};

export default BlogEntryLayout;
