import BlogEntryLayout from "@/components/BlogEntryLayout/BlogEntryLayout";
import Section from "@/components/Section/Section";
import { Code, Container, Text } from "@mantine/core";

const JSBLog = () => {
  const jsCode = `document.querySelector("button").addEventListener("click", () => {
  alert("¡Hola mundo!");
});
`;
  const nextCode = `export default function HomePage() {
  return <h1>Bienvenido al blog</h1>;
}`;
  const tsCode = `function suma(a: number, b: number): number {
  return a + b;
}
`;
  return (
    <BlogEntryLayout title="Interactividad Moderna con JavaScript, Next.js y TypeScript">
      <Section>
        <Text>
          Una página web sin JavaScript es como un auto sin volante: puede lucir
          bien, pero no responde. JavaScript es lo que da vida a tus interfaces:
          interactividad, dinamismo y comunicación con servidores. Next.js y
          TypeScript lo elevan aún más.
        </Text>
      </Section>
      <Section title="¿Qué hace JavaScript?" order={2}>
        <Text>
          JavaScript permite responder a eventos (como clics o teclas),
          manipular el DOM, cargar datos sin recargar la página (fetch), validar
          formularios, y mucho más.
        </Text>
        <Container size={"xs"}>
          <Code block>{jsCode}</Code>
        </Container>
        <Text>
          Pero en proyectos modernos no usamos solo JS puro: usamos frameworks
          como Next.js para escalar y organizar la lógica de forma profesional.
        </Text>
        {/*TODO: Imagen sugerida Descripción: Un esquema visual mostrando cómo el
        navegador interactúa con componentes de React, cómo Next.js los
        renderiza y cómo el código se divide entre cliente y servidor.*/}
      </Section>
      <Section title="¿Por qué usar Next.js?" order={2}>
        <Text>
          Next.js es un framework basado en React que facilita la creación de
          apps web modernas. Sus ventajas:
        </Text>
        <ul>
          <li>
            Rendimiento optimizado (carga inicial rápida + navegación tipo SPA)
          </li>
          <li>Rutas automáticas y estructura clara</li>
          <li>Soporte para rendering híbrido (server/client) </li>
          <li>API routes para lógica del backend </li>
          <li>Soporte nativo para TypeScript</li>
        </ul>
        <Container size={"xs"}>
          <Code block>{nextCode}</Code>
        </Container>
      </Section>
      <Section title="¿Y qué es TypeScript?" order={2}>
        <Text>
          TypeScript es un super-conjunto de JavaScript que añade tipado
          estático. Es decir, ayuda a evitar errores antes de ejecutar el
          código.
        </Text>
        <Container size={"xs"}>
          <Code block>{tsCode}</Code>
        </Container>
        <Text>
          Esto hace el código mas fácil de mantener, y la experiencia en
          editores como VS Code, mostrando sugerencias y advertencias al
          instante.
        </Text>
      </Section>
      <Section title="Buenas practicas" order={2}>
        <ul>
          <li>Usa funciones puras y componentes pequeños.</li>
          <li>Separa lógica de presentación.</li>
          <li>
            Tipa tus props y datos externos con interfaces o tipos
            personalizados.
          </li>
          <li>Usa hooks (useState, useEffect, etc.) de forma declarativa.</li>
        </ul>
      </Section>
      <Section title="En Resumen" order={2}>
        <Text>
          JavaScript es la base de la interactividad, Next.js la plataforma para
          construir interfaces modernas, y TypeScript el guardián que evita
          errores silenciosos. Juntos, forman una poderosa combinación para
          desarrollar aplicaciones web robustas, escalables y agradables de
          usar.
        </Text>
      </Section>
    </BlogEntryLayout>
  );
};

export default JSBLog;
