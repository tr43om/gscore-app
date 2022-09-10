import { store } from "./store";
import { useDispatch } from "react-redux";

export * from "./ducks";

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
