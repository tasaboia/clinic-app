import styles from './UIInput.module.css'
import { Slot } from '@radix-ui/react-slot';
import { IIconProps, IPropsInput, IRootProps } from './types';


export function UIInput( props: IPropsInput) {
  return (
    <InputRoot>
    
      <input style={{height: 30}} className={styles.input} {...props}/>

    </InputRoot>
  )
}

function InputRoot (props: IRootProps) {
  return (
    <div  {...props} style={{borderRadius: 10, padding: 5, alignItems: "baseline"}} >{props.children}</div>
  )
}

function IconInput (props: IIconProps) {
  return <Slot  className={styles.icon}>{props.children}</Slot>
}

export const CustomTextInput = {
  Root: InputRoot,
  Input: UIInput,
  Icon: IconInput,
}
