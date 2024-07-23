import aisin from "../assets/images/slider/AISIN.webp";
import comp from "../assets/images/slider/ComputerDiagnost.webp";
import dsg from "../assets/images/slider/DSG.webp";
import dvs from "../assets/images/slider/DVS.webp";
import dvsLight from "../assets/images/slider/DVS_light.webp";
import podveska from "../assets/images/slider/Podveska.webp";
import to from "../assets/images/slider/TO.webp";
import cond from "../assets/images/slider/cond.webp";
import torm from "../assets/images/slider/tormoznie_kolodki.webp";

export type TImageNames = "aisin" | "comp" | "dsg" | "dvs" | "dvsLight" | "podveska" | "to" | "cond" | "torm";

export const sliderImage = (name: TImageNames): string => {
  switch (name) {
    case "aisin":
      return aisin;
    case "comp":
      return comp;
    case "dsg":
      return dsg;
    case "dvs":
      return dvs;
    case "dvsLight":
      return dvsLight;
    case "podveska":
      return podveska;
    case "to":
      return to;
    case "cond":
      return cond;
    case "torm":
      return torm;
  }
};
