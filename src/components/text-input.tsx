import { FieldAttributes, useField } from "formik";
import React from "react";

// useField field object type has values that aren't in HTMLInputField props.
// We create an intersection type so we can spread them on our <input /> element.
type FormikInputField = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  FieldAttributes<string>;

type TextInputProps = {
  label?: string;
  labelLocation?: "top" | "left";
  optional?: boolean;
  containerClass?: string;
  includeErrorText?: boolean;
  icon?: string;
  placeholder?: string;
  autoComplete?: string;
  isPassword?: boolean;
} & FieldAttributes<{}>;

export const TextInput: React.FC<TextInputProps> = ({
  label,
  optional = false,
  labelLocation = "top",
  containerClass,
  includeErrorText = true,
  icon,
  placeholder = "",
  autoComplete,
  isPassword,
  ...props
}) => {
  // const [field, { error, touched }] = useField(props);
  // const errorText = error && touched ? error : "";
  // const containerClassName = `TextInputContainer Label${capitalizeFirstLetter(
  //   labelLocation
  // )} ${containerClass} ${!includeErrorText ? "NoErrorText" : ""}`;
  // const inputClassName = `TextInput ${props.className ? props.className : ""} ${
  //   errorText ? "Error" : ""
  // } ${icon ? "WithIcon" : ""}`;

  // const inputStyle = icon ? { backgroundImage: `url(${icon}` } : null;

  // return (
  //   <div className={`${containerClassName} `}>
  //     <label className="Label" htmlFor={field.name}>
  //       {label}{" "}
  //       {optional ? <span className="OptionalLabel">- optional</span> : null}
  //     </label>
  //     <div className="InputErrorContainer">
  //       <input
  //         {...(field as FormikInputField)}
  //         className={inputClassName}
  //         style={inputStyle}
  //         placeholder={placeholder}
  //         autoComplete={autoComplete ? autoComplete : "off"}
  //         type={isPassword ? "password" : "text"}
  //       />
  //       {includeErrorText ? <p className="ErrorText">{errorText}</p> : null}
  //     </div>
  //   </div>
  // );
  return null;
};
