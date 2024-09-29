import { useCallback, useMemo } from "react";
import { FieldButton } from "./components/fieldButton/FieldButton";
import styles from "./Field.module.scss";

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

export function Field({ rows, cols, ...rest }: FieldProps) {
  const rowsArray = useMemo(() => [...Array(rows).keys()], [rows]);
  const colsArray = useMemo(() => [...Array(rows).keys()], [cols]);

  return (
    <div className={styles.field} style={fieldStyle({ rows, cols })} {...rest}>
      {rowsArray.map((r) => {
        return colsArray.map((c) => {
          return <FieldButton key={`${r}-${c}`} />;
        });
      })}
    </div>
  );
}
