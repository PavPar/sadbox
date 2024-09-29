export type FieldRowValue = "X" | "0" | null;

export type FieldKey = number;
export type FieldRow = Map<FieldKey, FieldRowValue>;
export type Field = Map<FieldKey, FieldRow>;

export type FieldPosition = {
  col: FieldKey;
  row: FieldKey;
};

export type CreateNewFieldPayload = {
  cols: number;
  rows: number;
  value?: FieldRowValue;
};

export function createNewField({
  cols,
  rows,
  value,
}: CreateNewFieldPayload): Field {
  const field: Field = new Map();

  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    const row: FieldRow = new Map();
    for (let colIdx = 0; colIdx < cols; colIdx++) {
      row.set(colIdx, value || null);
    }
    field.set(rowIdx, row);
  }

  return field;
}

export function setFieldValueAt(
  field: Field,
  position: FieldPosition,
  value: FieldRowValue
): Field {
  const newField = new Map(field);
  const row = newField.get(position.row);
  row?.set(position.col, value);
  return newField;
}
