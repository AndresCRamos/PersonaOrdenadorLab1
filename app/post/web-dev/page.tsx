import BlogEntryLayout from "@/components/BlogEntryLayout/BlogEntryLayout";
import Section from "@/components/Section/Section";
import { Container, Image, Text } from "@mantine/core";

const HTMLBlog = () => (
  <BlogEntryLayout title="Desarrollo Web: Más Allá de lo Visual">
    <Section>
      <Text>
        El desarrollo web es el arte y la ingeniería de construir experiencias
        en línea. Aunque muchas veces se asocia solo con el diseño visual de un
        sitio, en realidad combina múltiples disciplinas: estructura, estilo,
        interacción y rendimiento.
      </Text>
      <Text>Una Metáfora para Empezar Piensa en una casa:</Text>
      <ul>
        <li>HTML es la estructura — paredes, puertas, techos.</li>
        <li>CSS es la decoración — colores, materiales, distribución.</li>
        <li>
          JavaScript es lo que le da vida — luces automáticas, timbres
          inteligentes.
        </li>
      </ul>

      <Text>
        Todo esto funciona en conjunto para ofrecer una experiencia coherente,
        intuitiva y funcional al usuario.
      </Text>
      <Container size={"xs"} pt={"md"}>
        <Image src={"/build.jpg"} alt="" radius={"lg"} />
      </Container>
    </Section>
    <Section title="El Rol del Frontend" order={2}>
      <Text>
        El frontend es lo que el usuario ve e interactúa directamente. Aquí es
        donde herramientas como React y frameworks como Next.js entran en juego,
        permitiéndonos construir interfaces dinámicas, rápidas y modernas. Sin
        embargo, un buen frontend no se trata solo de verse bien: debe cargar
        rápido, ser accesible y funcionar bien en distintos dispositivos.
      </Text>
    </Section>
    <Section title="El Rol del Backend" order={2}>
      <Text>
        Aunque no se ve, el backend sostiene toda la lógica de negocio, el
        manejo de usuarios, almacenamiento de datos y comunicación con otros
        sistemas. Frameworks como Express, Django o APIs en la nube hacen
        posible esta capa esencial del desarrollo web.
      </Text>
    </Section>
    <Section title="En Resumen" order={2}>
      <Text>
        Desarrollar para la web implica comprender cómo estas capas trabajan
        juntas. No se trata solo de “hacer páginas bonitas”, sino de construir
        experiencias útiles, rápidas y accesibles para todo tipo de usuarios.
      </Text>
    </Section>
  </BlogEntryLayout>
);
export default HTMLBlog;
