import { Affix, Button, Container, Space, Stack, Title } from "@mantine/core";
import Link from "next/link";
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
    <>
      <Container>
        <Stack gap={"lg"}>
          <Title ta={"center"}>{title}</Title>
          {children}
        </Stack>
      </Container>
      <Space h={"xl"} />
      <Space h={"lg"} />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Button component={Link} href={`/`}>
          Volver
        </Button>
      </Affix>
    </>
  );
};

export default BlogEntryLayout;
