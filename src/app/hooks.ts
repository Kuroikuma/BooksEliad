import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

// Import inferred types from store
import type { RootState, AppDispatch } from "./store";

// Define custom typed hooks as recommended by Redux Toolkit documentation
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
