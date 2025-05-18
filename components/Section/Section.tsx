import { Title, TitleOrder } from "@mantine/core";

interface SectionProps {
  title?: string;
  order?: TitleOrder;
  children: React.ReactNode;
}

const Section = ({ title, order, children }: SectionProps) => {
  return (
    <section>
      {title && <Title order={order}>{title}</Title>}
      {children}
    </section>
  );
};

export default Section;
