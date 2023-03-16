/// <reference types="vite/client" />
// interface Props {
//   children: React.ReactNode;
// }

type Day = "Dom" | "Seg" | "Ter" | "Quar" | "Quin" | "Sex" | "Sab";
interface IDay {
  name: Day;
  acronym: string;
  value: boolean;
  startHour: string;
  endHour: string;
}
type IdayChecks = IDay[];
