import "./App.css";
import { FieldButton } from "./features/field/components/fieldButton/FieldButton";
import { Field } from "./features/field/Field";
import { Text } from "./app/components/text/Text";
function App() {
  return (
    <div>
      <Text size="l" strong>
        Крестики-нолики
      </Text>
      <Field rows={3} cols={3} />
    </div>
  );
}

export default App;
