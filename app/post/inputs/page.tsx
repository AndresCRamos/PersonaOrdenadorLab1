import BlogEntryLayout from "@/components/BlogEntryLayout/BlogEntryLayout";
import Section from "@/components/Section/Section";
import {
  Button,
  Checkbox,
  Container,
  PasswordInput,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";

export default function Page() {
  return (
    <BlogEntryLayout title="Formularios e Inputs en HTML: Interacción Eficaz con el Usuario">
      <Section>
        <Text>
          Los formularios son el principal canal de entrada de datos en la web.
          Desde simples búsquedas hasta procesos de autenticación complejos, su
          correcta implementación es clave para la usabilidad y accesibilidad.
        </Text>
      </Section>

      <Section title="Estructura básica de un formulario" order={2}>
        <Text>
          En HTML, un formulario se define con la etiqueta {"<form>"} y contiene
          diferentes campos de entrada como {"<input>"}, {"<textarea>"},{" "}
          {"<select>"} y botones. Cada uno permite capturar distintos tipos de
          información del usuario.
        </Text>
      </Section>

      <Section title="Inputs comunes" order={2}>
        <Text>
          A continuación, se muestran algunos campos de entrada típicos, en un
          formulario sencillo
        </Text>

        <Container size="sm" mt="md">
          <form>
            <Stack gap="sm">
              <TextInput label="Nombre completo" placeholder="Juan Pérez" />
              <TextInput
                label="Correo electrónico"
                placeholder="correo@ejemplo.com"
                type="email"
              />
              <PasswordInput label="Contraseña" placeholder="••••••••" />
              <Textarea
                label="Mensaje"
                placeholder="Escribe tu mensaje aquí"
                autosize
                minRows={2}
              />
              <Select
                label="Lenguaje favorito"
                placeholder="Selecciona uno"
                data={["HTML", "CSS", "JavaScript", "Python"]}
              />
              <Checkbox label="Acepto los términos y condiciones" />
              <Button type="submit">Enviar</Button>
            </Stack>
          </form>
        </Container>
      </Section>

      <Section title="Buenas prácticas" order={2}>
        <ul>
          <li>
            Usa siempre etiquetas {"<label>"} asociadas a cada input para
            mejorar la accesibilidad.
          </li>
          <li>
            Valida la entrada tanto en el cliente (HTML5 o JS) como en el
            servidor.
          </li>
          <li>
            Utiliza atributos como <span>required</span>, <span>type</span> y
            <span>placeholder</span> correctamente para mejorar la UX.
          </li>
        </ul>
      </Section>

      <Section title="Conclusión" order={2}>
        <Text>
          HTML proporciona una base sólida para formularios funcionales y
          accesibles. Apoyarse en librerías como Mantine permite entregar una
          experiencia visual consistente y moderna, sin sacrificar
          funcionalidad.
        </Text>
      </Section>
    </BlogEntryLayout>
  );
}
