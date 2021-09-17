type MarkStdin = {
  _: ["mark"];
  easy?: boolean | boolean[];
  hard?: boolean | boolean[];
  done?: boolean | boolean[];
  circle?: number | number[];
  date?: string | string[];
  file: string;
  $0: string;
};
export default function ({
  _,
  easy,
  hard,
  done,
  circle,
  date,
  file,
  $0,
}: MarkStdin) {
  // Todo
}
