import { TImageNames } from "../helpers/sliderImage";
export type TSliderData = {
  name: TImageNames;
  image: string;
  title: string;
  correction: string;
  price: string;
};

export const sliderData: TSliderData[] = [
  {
    name: "aisin",
    image: "src/assets/images/slider/AISIN.webp",
    title: "Ремонт AISIN",
    correction: "под ключ",
    price: "75 000",
  },
  {
    name: "comp",
    image: "src/assets/images/slider/ComputerDiagnost.webp",
    title: "Диагностика ДВС и электронного оборудования",
    correction: "",
    price: "1 000",
  },
  {
    name: "dsg",
    image: "src/assets/images/slider/DSG.webp",
    title: "Ремонт DSG dq200 / dq250",
    correction: "",
    price: "10 000",
  },
  {
    name: "dvs",
    image: "src/assets/images/slider/DVS.webp",
    title: "Капитальный ремонт ДВС TSI / MPI",
    correction: "работа",
    price: "45 000",
  },
  {
    name: "dvsLight",
    image: "src/assets/images/slider/DVS_light.webp",
    title: "Мелкий ремонт ДВС TSI / MPI",
    correction: "",
    price: "1 000",
  },
  {
    name: "podveska",
    image: "src/assets/images/slider/Podveska.webp",
    title: "Ремонт ходовой части",
    correction: "",
    price: "500",
  },
  {
    name: "to",
    image: "src/assets/images/slider/TO.webp",
    title: "Техническое обслуживание",
    correction: "",
    price: "1 000",
  },
  {
    name: "cond",
    image: "src/assets/images/slider/cond.webp",
    title: "Заправка и замена узлов кондиционера",
    correction: "",
    price: "2 000",
  },
  {
    name: "torm",
    image: "src/assets/images/slider/tormoznie_kolodki.webp",
    title: "Обслуживание тормозной системы",
    correction: "",
    price: "500",
  },
];
