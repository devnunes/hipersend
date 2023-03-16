/// <reference types="vite/client" />
// interface Props {
//   children: React.ReactNode;
// }

type Day = "Dom" | "Seg" | "Ter" | "Quar" | "Quin" | "Sex" | "Sab";
interface Iday {
  day: Day;
  acronym: string;
  value: false;
}
type IdayChecks = IDay[];
