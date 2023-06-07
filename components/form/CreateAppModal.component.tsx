import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, FormInstance, Modal, Tabs } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { BasicForm } from "./BasicForm.component";
import {
    ICobolApplication,
  ICobolApplicationData,
  generateCobolAplicationDataFields,
  generateCobolAplicationDistributionFields,
  generateCobolUsersAplicationDataFields,
} from "@/constants/coboldata";

interface ICreateAppModal {
  props: {
    dataSource: ICobolApplication[];
    setDataSource: Dispatch<SetStateAction<ICobolApplication[]>>;
  };
}

const CreateAppModal: React.FC<ICreateAppModal> = ({ props }) => {
  const TabPane = Tabs.TabPane;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState<string>("1");
  const {dataSource, setDataSource} = props;
  const [appInfo, setAppInfo] = useState<ICobolApplication>()

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
    setActiveIndex("1")
    setOpen(false);
  };
  function handleApplication(
    formOutput: {
      [key: string]: string | number | null | undefined;
    },
    form: FormInstance<any> | undefined,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) {
      setLoading(true);
      delete formOutput.header1;
      delete formOutput.header2;
      delete formOutput.header3;
      setAppInfo(form?.getFieldsValue() as ICobolApplicationData);
      setActiveIndex("2");
      setLoading(false);
  }
  function handleApplicationUsage(
    formOutput: {
      [key: string]: string | number | null | undefined;
    },
    form: FormInstance<any> | undefined,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) {
      setLoading(true);
      delete formOutput.header1;
      setAppInfo({...appInfo, ...form?.getFieldsValue() as any});
      setActiveIndex("3");
      setLoading(false);
  }
  function handleApplicationDistribution(
    formOutput: {
      [key: string]: string | number | null | undefined;
    },
    form: FormInstance<any> | undefined,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) {
      setLoading(true);
      delete formOutput.header1;
      delete formOutput.header2;
      delete formOutput.header3;
      delete formOutput.header4;
      setDataSource([...dataSource, {...appInfo, ...form?.getFieldsValue() as any}])
      setActiveIndex("1");
      setLoading(false);
      setOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>
        Add
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[]}
        width={1000}
        destroyOnClose
      >
        <Tabs style={{ paddingBottom: 20 }} activeKey={activeIndex}>
          <TabPane
            key="1"
            tab="Application"
            disabled={activeIndex != "1"}
            children={
              <BasicForm
                layoutAlignment="vertical"
                formFields={(formInstance) =>
                  generateCobolAplicationDataFields(formInstance)
                }
                handleSubmit={(event, form, setLoading) => {
                  handleApplication(event, form, setLoading);
                }}
                submitButtonProperties={{ label: "Continue", position: 'center' }}

                handleBack={() => {}}
              />
            }
          />

          <TabPane
            key="2"
            tab="Application Usage"
            disabled={activeIndex != "2"}
            children={
              <BasicForm
                layoutAlignment="vertical"
                formFields={(formInstance) =>
                  generateCobolUsersAplicationDataFields(formInstance)
                }
                handleSubmit={(event, form, setLoading) => {
                    handleApplicationUsage(event, form, setLoading);
                }}
                submitButtonProperties={{ label: "Continue" }}
                handleBack={() => {}}
              />
            }
          />

          <TabPane
            key="3"
            tab="External Distribution"
            disabled={activeIndex != "3"}
            children={
              <BasicForm
                layoutAlignment="vertical"
                formFields={(formInstance) =>
                  generateCobolAplicationDistributionFields(formInstance)
                }
                handleSubmit={(event, form, setLoading) => {
                    handleApplicationDistribution(event, form, setLoading);
                }}
                submitButtonProperties={{ label: "Save" }}
                handleBack={() => {}}
              />
            }
          />
        </Tabs>
      </Modal>
    </>
  );
};

export default CreateAppModal;
