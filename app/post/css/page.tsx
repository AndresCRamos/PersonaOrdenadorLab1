import BlogEntryLayout from "@/components/BlogEntryLayout/BlogEntryLayout";
import Section from "@/components/Section/Section";
import { Code, Container, Text } from "@mantine/core";

const CSSPage = () => {
  const flexCode = `display: flex; 
justify-content: space-between; 
align-items: center;`;
  const gridCode = `display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`;
  const mediaQueryCode = `@media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }
}`;
  return (
    <BlogEntryLayout title="Responsive CSS: Diseña para todos los dispositivos">
      <Section>
        <Text>
          Hoy en día, los sitios web deben lucir bien y funcionar correctamente
          en pantallas grandes, pequeñas y todo lo que haya en medio. Aquí es
          donde el diseño responsivo con CSS cobra importancia.
        </Text>
      </Section>
      <Section title="¿Qué significa “responsive”?" order={2}>
        <Text>
          Un diseño responsivo se adapta automáticamente al tamaño del
          dispositivo. No necesitas crear múltiples versiones del mismo sitio,
          solo una estructura flexible que se reorganiza según el espacio
          disponible.
        </Text>
      </Section>
      <Section title="Herramientas clave: Flexbox y Grid" order={2}>
        <Text>
          CSS nos ofrece dos potentes herramientas modernas para el layout:
        </Text>
        <ul>
          <li>
            Flexbox: Ideal para distribuir elementos en una dimensión
            (horizontal o vertical). Perfecto para menús, listas, tarjetas, etc.
            <Container size={"xs"}>
              <Code block>{flexCode}</Code>
            </Container>
          </li>
          <li>
            CSS Grid: Más potente y versátil, permite trabajar en dos
            dimensiones: filas y columnas. Ideal para layouts completos,
            dashboards, galerías.
            <Container size={"xs"}>
              <Code block>{gridCode}</Code>
            </Container>
          </li>
        </ul>
        {/* TODO: Imagen sugerida Descripción: Captura o ilustración mostrando cómo una
        misma interfaz cambia de estructura entre una pantalla de escritorio,
        una tablet y un teléfono móvil gracias a Flexbox/Grid. */}
      </Section>
      <Section title="Media Queries: Personaliza por pantalla" order={2}>
        <Text>
          Las media queries permiten aplicar estilos específicos según el ancho
          de pantalla.
        </Text>
        <Container size={"xs"}>
          <Code block>{mediaQueryCode}</Code>
        </Container>
        <Text>
          Así puedes reorganizar el contenido en pantallas más pequeñas sin
          romper el diseño.
        </Text>
      </Section>
      <Section title="Buenas prácticas" order={2}>
        <ul>
          <li>
            Usa unidades relativas como %, em, rem o fr en lugar de px cuando
            sea posible.
          </li>
          <li>
            Prueba tu diseño en distintos tamaños desde el navegador (DevTools).
          </li>
          <li>
            No ocultes contenido importante en pantallas pequeñas; es mejor
            reorganizar.
          </li>
        </ul>
      </Section>
      <Section title="En Resumen" order={2}>
        <Text>
          CSS responsivo no se trata solo de que “todo se vea bien”, sino de
          ofrecer una experiencia consistente y funcional para todos los
          usuarios, sin importar el dispositivo. Con Flexbox, Grid y media
          queries, puedes construir interfaces flexibles, modernas y elegantes.
        </Text>
      </Section>
    </BlogEntryLayout>
  );
};

export default CSSPage;
