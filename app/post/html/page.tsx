import BlogEntryLayout from "@/components/BlogEntryLayout/BlogEntryLayout";
import Section from "@/components/Section/Section";
import { Container, Image, Text } from "@mantine/core";

export default function Page() {
  return (
    <BlogEntryLayout title="HTML 5 Semántico: La Base Significativa de la Web">
      <Section>
        <Text>
          HTML no es solo etiquetas y estructuras: es comunicación clara entre
          desarrolladores, navegadores y tecnologías de asistencia. Usar HTML
          semántico es escribir código que tiene sentido.
        </Text>
      </Section>
      <Section title="¿Qué es el HTML semántico?" order={2}>
        <Text>
          El HTML semántico utiliza etiquetas que describen el propósito del
          contenido, no solo su apariencia.
        </Text>
        <Text>
          Por ejemplo, en lugar de escribir todo dentro de un {"<div>"}, usamos
          etiquetas como:
        </Text>
        <ul>
          <li>{"<header>"} para encabezados del sitio o sección</li>
          <li>{"<nav>"} para menús de navegación</li>
          <li>{"<main>"} para el contenido principal</li>
          <li>{"<article>"} para una publicación independiente</li>
          <li>{"<footer>"} para el pie de página</li>
        </ul>
        <Text>
          Esto hace que el código sea más legible, fácil de mantener y
          accesible.
        </Text>
        <Container size={"xs"}>
          <Image src={"/semantic_html.png"} alt="" />
        </Container>
      </Section>
      <Section title="¿Por qué es importante?" order={2}>
        Accesibilidad: tecnologías como lectores de pantalla dependen de estas
        etiquetas para interpretar el contenido correctamente.
        <ul>
          <li>
            SEO: los motores de búsqueda priorizan estructuras bien definidas
            para indexar mejor el contenido.
          </li>
          <li>
            Mantenimiento: otros desarrolladores (o tú en 6 meses) entenderán
            más fácilmente qué hace cada parte.
          </li>
        </ul>
      </Section>
      <Section title="Buenas prácticas" order={2}>
        <Text>
          No uses etiquetas semánticas solo por “verse bien”, úsalas con
          propósito. Acompaña el HTML semántico con roles y atributos aria
          cuando sea necesario. Revisa el árbol del documento en herramientas
          como el inspector de tu navegador para verificar la estructura lógica.
          En Resumen Usar HTML semántico es como escribir con puntuación y
          gramática correctas: todo el mundo lo agradece, especialmente tus
          futuros yo y los usuarios que dependen de tecnologías asistidas.
        </Text>
      </Section>
    </BlogEntryLayout>
  );
}
