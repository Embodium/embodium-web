import { component$, Slot } from "@builder.io/qwik";
import { FlexGrid, Column, Row } from "@embodium/qwik-carb-grid";

export const Layout = component$(() => {
  return (
    <FlexGrid style="background-color: goldenrod" narrow>
      <Row>
        <Column></Column>
        <Column>
          <Row>
            <Column></Column>
          </Row>
          <Row>
            <Column>
              <Slot />
            </Column>
          </Row>
        </Column>
      </Row>
    </FlexGrid>
  );
});
