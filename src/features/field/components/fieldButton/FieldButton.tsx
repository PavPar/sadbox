import styles from "./FieldButton.module.scss";
// import styles from "./test.module.css";
// import "./test.css";
export type FieldButtonProps = {} & React.ComponentPropsWithoutRef<"button">;

export function FieldButton({ ...rest }: FieldButtonProps) {
  // return <button className="button" {...rest}></button>;
  return <button className={styles.fieldButton} {...rest}></button>;
}
