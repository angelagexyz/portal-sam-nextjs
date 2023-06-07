import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, FormInstance, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  IOperativeSystem,
  generateAIXOSDataFields,
  generateHpUxOSDataFields,
  generateLinuxOSDataFields,
  generateSolarisOSDataFields,
  generateWindowsOSDataFields,
} from "@/constants/coboldata";
import { BasicForm, IFormField } from "./BasicForm.component";

interface ICreateOperativeSystemModal {
  props: {
    type: string;
    dataSource: IOperativeSystem[];
    setDataSource: Dispatch<SetStateAction<IOperativeSystem[]>>;
  };
}

const CreateOperativeSystemModal: React.FC<ICreateOperativeSystemModal> = ({ props }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { dataSource, setDataSource, type} = props;

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  function handleAddOS(
    formOutput: {
      [key: string]: string | number | null | undefined;
    },
    form: FormInstance<any> | undefined,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) {
    setLoading(true);
    console.log(form?.getFieldsValue());
    
    /* delete formOutput.header1;
    delete formOutput.header2;
    delete formOutput.header3;
    delete formOutput.header4; */
    setDataSource([...dataSource, { ostype: type, ...(form?.getFieldsValue() as any) }]);
    setLoading(false);
    setOpen(false);
  }

  function generateDataFields(formInstance: FormInstance<any>){
    switch(type){
      case 'Windows':
        return generateWindowsOSDataFields(formInstance)
      case 'Linux':
        return generateLinuxOSDataFields(formInstance)
      case 'HP - UX':
        return generateHpUxOSDataFields(formInstance)
      case 'AIX':
        return generateAIXOSDataFields(formInstance)
      case 'Solaris':
        return generateSolarisOSDataFields(formInstance)

    }
  }

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>
        Add {type}
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[]}
        width={1000}
        //style={{minWidth: 'fit-content'}}
        destroyOnClose
      >
        <>
          <BasicForm
            layoutAlignment="vertical"
            formFields={(formInstance) =>
              generateDataFields(formInstance) as IFormField[]
            }
            handleSubmit={(event, form, setLoading) => {
                handleAddOS(event, form, setLoading);
            }}
            submitButtonProperties={{ label: "Add", position: "center" }}
            handleBack={() => {}}
          />
        </>
      </Modal>
    </>
  );
};

export default CreateOperativeSystemModal;
