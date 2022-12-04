import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const boardState = atom({
  key: "boardState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
