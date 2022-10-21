import { InputHTMLAttributes } from "react"

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export interface IRootProps extends InputHTMLAttributes<HTMLDivElement> {}

export interface IIconProps {
    children?: React.ReactNode
  }