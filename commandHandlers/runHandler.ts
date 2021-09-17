type RunStdin = {
  _: ["run"];
  directory: string;
  $0: string;
};
export default function ({ _, directory, $0 }: RunStdin) {
  // Todo
}
