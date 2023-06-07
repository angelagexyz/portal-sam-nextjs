import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  SelectProps,
  TreeSelect,
  Upload,
} from "antd";
import { FormInstance } from "antd/es/form/Form";
import { Dispatch, Ref, SetStateAction, useState } from "react";
import Uploader from "../common/Uploader";
import Image, { StaticImageData } from "next/image";

interface IBasicFormProps {
  formFields: IFormField[] | ((form: FormInstance<any>) => IFormField[]);
  handleSubmit: (
    event: any,
    form: FormInstance<any>,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => void;
  submitButtonProperties?: ISubmitButtonProperties;
  layoutAlignment?: "vertical" | "horizontal" | "inline";
  children?: React.ReactNode;
  buttonProperties?: any;
  handleBack: (event: any) => void;
  isHandleBackACtive?: boolean;
}

export interface ISubmitButtonProperties {
  loading?: any;
  label?: string;
  position?:
    | "auto"
    | "baseline"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "left"
    | "normal"
    | "revert"
    | "right"
    | "self-end"
    | "self-start"
    | "start"
    | "stretch"
    | "unset";
}

export interface IFormSection {
  header: string;
  section: IFormField[];
}

export interface IFormField {
  key: string;
  label?: string | JSX.Element;
  placeholder?: string;
  inputType:
    | "input"
    | "text-area"
    | "password"
    | "number"
    | "select"
    | "date"
    | "tree-select"
    | "upload"
    | "header"
    | "table-info"
    | "list"
    | "text";
  disabled: boolean;
  required: boolean;
  initialValue?: string | number | Blob | Blob[];
  style?: any;
  inputData?: {
    options?: SelectProps["options"];
    dateFormat?: string;
    prefix?: string;
    formatter?: (
      value: string | number | undefined,
      info: {
        userTyping: boolean;
        input: string;
      }
    ) => string;
  };
  sample?: string;
  sampleType?: string;
  sampleText?: string;
  sampleImage?: string;
  listitems?: string[];
  inputProperties?: any;
  reference?: Ref<any>;
  content?: string;
}

function generateInitialValues(formFields: IFormField[]): {
  [index: string]: string | number | Blob | Blob[];
} {
  let initialValues: { [index: string]: string | number | Blob | Blob[] } = {};
  formFields?.forEach((field: IFormField) => {
    if (field.initialValue) {
      initialValues[field.key] = field.initialValue;
    }
  });
  return initialValues;
}

function getFormFields(
  formFields: IBasicFormProps["formFields"],
  form: FormInstance
): IFormField[] {
  if (typeof formFields === "object") {
    return formFields;
  } else {
    return formFields(form);
  }
}

function getUploadValue(e: any) {
  return e.target.files;
}

// ! refactorizar a funcion normal con export default
export const BasicForm = (props: IBasicFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formInstance] = Form.useForm();
  const initialValues = generateInitialValues(
    getFormFields(props.formFields, formInstance)
  );
  const formItems: JSX.Element[] = getFormFields(
    props.formFields,
    formInstance
  )?.map<JSX.Element>((formField: IFormField, idx) => {
    const {
      key,
      label,
      placeholder,
      inputType,
      disabled,
      required,
      inputData: inputProperties,
      sample,
      sampleType,
      sampleImage,
      sampleText,
      listitems,
      content,
    } = formField;
    let inputElement, optionalInputElement;
    if (inputType === "input") {
      inputElement = (
        <Input
          placeholder={placeholder}
          disabled={disabled}
          prefix={inputProperties?.prefix}
          style={formField.style}
          ref={formField.reference}
        />
      );
    }
    if (inputType === "text-area") {
      inputElement = (
        <Input.TextArea
          placeholder={placeholder}
          disabled={disabled}
          ref={formField.reference}
          style={formField.style}
        />
      );
    }
    if (inputType === "password") {
      inputElement = (
        <Input.Password
          placeholder={placeholder}
          disabled={disabled}
          ref={formField.reference}
          style={formField.style}
        />
      );
    }
    if (inputType === "number") {
      inputElement = (
        <InputNumber
          placeholder={placeholder}
          disabled={disabled}
          prefix={inputProperties?.prefix}
          formatter={inputProperties?.formatter}
          ref={formField.reference}
          style={formField.style}
        />
      );
    }
    if (inputType === "upload") {
      inputElement = (
        <div style={{ display: "flex" }}>
          {sample == undefined ? (
            <></>
          ) : sampleType == "image" ? (
            <Image alt={key} src={sample as string} width={600} height={600} />
          ) : (
            <a
              download
              target="_blank"
              href={sample}
              style={{
                display: "flex",
                width: "300px",
                margin: "auto",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={sampleImage} width={60} alt={sampleText} />
              <p>{sampleText}</p>
            </a>
          )}
          <Uploader />
        </div>
      );
    }
    if (inputType === "header") {
      inputElement = (
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          {label}
        </h1>
      );
    }
    if (inputType === "list") {
      inputElement = (
        <>
          <h3
            style={{
              whiteSpace: "pre",
              marginBottom: "10px",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            {label}
          </h3>
          <ul>
            {listitems?.map((item) => (
              <li style={{ whiteSpace: "pre" }}>{item}</li>
            ))}
          </ul>
        </>
      );
    }
    if (inputType === "text") {
      inputElement = (
        <>
          <h4
            style={{
              whiteSpace: "pre",
              marginBottom: "10px",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            {label}
          </h4>
          <p style={{ whiteSpace: "pre" }}>{content}</p>
        </>
      );
    }
    if (inputType === "select") {
      inputElement = (
        <Select
          {...formField.inputProperties}
          options={inputProperties?.options}
          placeholder={placeholder}
          disabled={disabled}
          ref={formField.reference}
          style={formField.style}
          showSearch
        />
      );

      /* optionalInputElement = (
        <Input
          placeholder={placeholder}
          disabled={disabled}
          prefix={inputProperties?.prefix}
          style={formField.style}
          ref={formField.reference}
        />
      ); */
    }
    if (inputType === "date") {
      inputElement = (
        <DatePicker
          placeholder={placeholder}
          disabled={disabled}
          format={inputProperties?.dateFormat}
          ref={formField.reference}
          style={formField.style}
        />
      );
    }
    return (
      <>
        {inputType == "header" || inputType == "list" || inputType == "text" ? (
          inputElement
        ) : inputType == "upload" ? (
          <Form.Item
            key={key}
            label={label}
            name={key}
            rules={[{ required, message: "Este campo es requerido" }]}
            getValueFromEvent={getUploadValue}
          >
            {inputElement}
          </Form.Item>
        ) : (
          <Form.Item
            key={key}
            label={label}
            name={key}
            rules={[{ required, message: "Este campo es requerido" }]}
          >
            {inputElement}
          </Form.Item>
        )}
        {/* {inputProperties?.optionalOptions?.includes(
          formInstance.getFieldValue(key)
        ) ? (
          <> </>
        ) : (
          <></>
        )} */}
      </>
    );
  });
  function handleOnFinish(event: any) {
    event.preventDefault();
    props.handleSubmit(event, formInstance, setLoading);
  }
  function handleOnBack(event: any) {
    props.handleBack(event);
  }

  return (
    <Form
      form={formInstance}
      style={{ display: "grid" }}
      name="basic"
      onSubmitCapture={handleOnFinish}
      initialValues={initialValues}
      layout={props.layoutAlignment || "horizontal"}
    >
      {formItems?.map((formItem) => formItem)}
      {props?.children}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.isHandleBackACtive ? (
          <Button
            style={{
              justifySelf: props.submitButtonProperties?.position || "",
            }}
            type="primary"
            onClick={handleOnBack}
          >
            Back
          </Button>
        ) : (
          ""
        )}
        <Button
          style={{
            justifySelf: props.submitButtonProperties?.position || "",
            marginLeft: "auto",
          }}
          type="primary"
          htmlType="submit"
          loading={props.submitButtonProperties?.loading || loading}
          {...props.buttonProperties}
        >
          {props.submitButtonProperties?.label || "Guardar"}
        </Button>
      </div>
    </Form>
  );
};
