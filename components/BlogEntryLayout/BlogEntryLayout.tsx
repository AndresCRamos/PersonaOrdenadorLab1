import { Center, Container, Stack, Title } from "@mantine/core";
import React from "react";


interface BlogEntryLayoutProps {
    children: React.ReactNode;
    title: string;
}

 
const BlogEntryLayout: React.FC<BlogEntryLayoutProps> = ({children, title}) => {
    return <Container>
          <Stack>
            <Center>
                <Title>{title}</Title>
            </Center>
            {children}
          </Stack>
        </Container>
}



 
export default BlogEntryLayout;