import { JSX } from "react";

import type { ToogThemPropObje } from "./ObjectTypes";
export type ToogThemElem = (params: ToogThemPropObje) => JSX.Element;

import type { ItemImagPropObje } from "./ObjectTypes";
export type ItemImagElem = (props: ItemImagPropObje) => JSX.Element;
