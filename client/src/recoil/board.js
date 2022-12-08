import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const boardState = atom({
  key: "boardState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const PathState = atom({
  key: "PathState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const ClickState = atom({
  key: "ClickState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const commentState = atom({
  key: "commentState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});