import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, FormInstance, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  IOperativeSystem,
  IProductData,
  generateAIXOSDataFields,
  generateExtendAcuCobolDataFields,
  generateHpUxOSDataFields,
  generateLiantDataFields,
  generateLinuxOSDataFields,
  generateMFCobolDataFields,
  generateOtherProductsDataFields,
  generateSolarisOSDataFields,
  generateVisualCobolDataFields,
  generateWindowsOSDataFields,
} from "@/constants/coboldata";
import { BasicForm, IFormField } from "./BasicForm.component";

interface ICreateProductModal {
  props: {
    type: string;
    dataSource: IProductData[];
    setDataSource: Dispatch<SetStateAction<IProductData[]>>;
  };
}

const CreateProductModal: React.FC<ICreateProductModal> = ({ props }) => {
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
    setDataSource([...dataSource, { producttype: type, ...(form?.getFieldsValue() as any) }]);
    setLoading(false);
    setOpen(false);
  }

  function generateDataFields(formInstance: FormInstance<any>){
    switch(type){
      case 'MF COBOL & Old Enterprise':
        return generateMFCobolDataFields(formInstance)
      case 'Extend (AcuCOBOL)':
        return generateExtendAcuCobolDataFields(formInstance)
      case 'Liant (RM/COBOL)':
        return generateLiantDataFields(formInstance)
      case 'Visual COBOL & New Enterprise':
        return generateVisualCobolDataFields(formInstance)
      case 'Other Products':
        return generateOtherProductsDataFields(formInstance)
        
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
        style={{minWidth: 'fit-content'}}
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

export default CreateProductModal;
