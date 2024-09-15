export type ParaProps = {
  text?: string;
};

export function Para({ text, ...props }: ParaProps) {
  return <p {...props}>{text}</p>;
}
