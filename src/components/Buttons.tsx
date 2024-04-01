import { useDisclosure } from "@mantine/hooks";
import {Button} from "@mantine/core";
import { DoubleHeader } from "../DoubleHeader";
import { setPriority } from "os";

function ButtonComponent() {
  return (
    <div>
      <Button variant="filled">Hello world</Button>
    </div>
  );
}

export default ButtonComponent;
