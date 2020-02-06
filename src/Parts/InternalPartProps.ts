import PartProps from "./PartProps";
import { HTMLAttributes } from "react";

export default interface InternalPartProps extends PartProps, HTMLAttributes<string> {
    partName: string;
}
