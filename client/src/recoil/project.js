import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const projectState = atom({
  key: "projectState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
