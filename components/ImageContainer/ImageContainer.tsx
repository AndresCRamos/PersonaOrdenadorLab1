import { Container, Image } from "@mantine/core";

interface ImageContainerProps {
    path:string
}
 
const ImageContainer = ({path}:ImageContainerProps) => {
    return <>
        <Container size={"xs"}>
            <Image src={"/app-red-lab1/"+path} alt="" />
        </Container>;
    </>
}
 
export default ImageContainer;