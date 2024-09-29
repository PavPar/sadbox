import { createNewField, setFieldValueAt } from "./FieldActionsHandler";

describe("FiedActionsHandler", () => {
  describe("createNewField", () => {
    it("should create 3x3 fied filled with null values", () => {
      const field = createNewField({ cols: 3, rows: 3 });
      const fieldRows = Array.from(field, ([key, value]) => ({ key, value }));

      const clearRows = fieldRows.map((fieldRow) => {
        return Array.from(fieldRow.value, ([, value]) => value);
      }, []);

      let isRowLengthCorrect = true;
      let isValueMatched = true;
      clearRows.forEach((row) => {
        if (row.length !== 3) {
          isRowLengthCorrect = false;
          return;
        }
        const rowValueCheck = row.findIndex((val) => {
          return val !== null;
        });

        if (rowValueCheck !== -1) {
          isValueMatched = false;
        }
      }, 3);

      expect(fieldRows).toHaveLength(3);
      expect(isRowLengthCorrect).toBeTruthy();
      expect(isValueMatched).toBeTruthy();
    });

    it("should set value at position and create new field", () => {
      const originalField = createNewField({ cols: 3, rows: 3 });
      const field = setFieldValueAt(originalField, { col: 0, row: 0 }, "X");
      expect(field).not.toBe(originalField);
      expect(field.get(0)?.get(0)).toBe("X");
    });
  });
});
