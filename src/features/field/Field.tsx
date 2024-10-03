import { useCallback, useEffect, useMemo, useState } from "react";
import { FieldButton } from "./components/fieldButton/FieldButton";
import styles from "./Field.module.scss";
import {
  createNewField,
  FieldRowValue,
  getFieldValueAt,
  setFieldValueAt,
} from "./api/FieldActionsHandler";
import { Text } from "../../app/components/text/Text";

type BaseElementProps = React.ComponentPropsWithoutRef<"div">;
export type FieldProps = { rows: number; cols: number } & BaseElementProps;

//TODO: improve
function fieldStyle({
  cols,
  rows,
}: Pick<FieldProps, "rows" | "cols">): React.CSSProperties {
  return {
    gridTemplateColumns: `repeat(${cols},1fr)`,
    gridTemplateRows: `repeat(${rows},1fr)`,
  };
}

function inverseFieldValue(currentValue: FieldRowValue): FieldRowValue {
  switch (currentValue) {
    case "X":
      return "0";
    case "0":
      return "X";
    default:
      return null;
  }
}

export function Field({ rows, cols, ...rest }: FieldProps) {
  const rowsArray = useMemo(() => [...Array(rows).keys()], [rows]);
  const colsArray = useMemo(() => [...Array(rows).keys()], [cols]);

  const [fieldState, setFieldState] = useState(
    createNewField({ cols: 3, rows: 3 })
  );

  const [fieldValue, setFieldValue] = useState<FieldRowValue>(null);

  useEffect(() => {
    if (fieldValue === null) {
      setFieldValue("X");
      return;
    }
    setFieldValue(inverseFieldValue(fieldValue));
  }, [fieldState]);

  return (
    <div className={styles.field} style={fieldStyle({ rows, cols })} {...rest}>
      {rowsArray.map((r) => {
        return colsArray.map((c) => {
          return (
            <FieldButton
              key={`${r}-${c}`}
              onClick={() => {
                setFieldState(
                  setFieldValueAt(fieldState, { col: c, row: r }, fieldValue)
                );
              }}
            >
              {<Text>{getFieldValueAt(fieldState, { row: r, col: c })}</Text>}
            </FieldButton>
          );
        });
      })}
    </div>
  );
}
