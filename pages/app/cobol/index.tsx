import { BasicForm } from "@/components/form/BasicForm.component";
import CreateAppModal from "@/components/form/CreateAppModal.component";
import CreateOperativeSystemModal from "@/components/form/CreateOperativeSystem.component";
import CreateProductModal from "@/components/form/CreateProductModal.component";
import {
  ICobolApplicationData,
  ICobolApplication,
  generateCobolAplicationDataFields,
  generateCobolUsersAplicationDataFields,
  generateCobolEnvironmentFields,
  ICobolEnvironment,
  IOperativeSystem,
  IProductData,
} from "@/constants/coboldata";
import {
  EditOutlined,
  HeatMapOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  FormInstance,
  Input,
  Modal,
  Space,
  Table,
  Tabs,
  Tooltip,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { ColumnsType } from "antd/es/table";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {};

interface AppDataType {
  key: string;
  title: string;
  dataIndex: string;
}

interface ProductDataType {
  mfcobol: string;
  extend: string;
  liant: string;
  visual: string;
  other: string;
}

const appDataColumns: ColumnsType<AppDataType> = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "country",
    title: "Country",
    dataIndex: "country",
  },
  {
    key: "developedby",
    title: "Developed by",
    dataIndex: "developedby",
  },
  {
    key: "actions",
    title: "Actions",
    render: (text, record: AppDataType) => {
      return (
        <Space>
          <Tooltip title="Edit">
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => {
                queryClient.setQueryData(["farm", record.farmCode], record);
                queryClient.setQueryData(["origin", record.originCode], record);
                router.push(`/app/farms/details/${record.farmCode}`);
              }}
            />
          </Tooltip>
          <Tooltip title="Ver areas">
            <Button
              type="primary"
              shape="circle"
              icon={<HeatMapOutlined />}
              onClick={() => {
                queryClient.setQueryData(["farm", record.farmCode], record);
                queryClient.setQueryData(["origin", record.originCode], record);
                router.push(`/app/farms/polygons/${record.farmCode}`);
              }}
            />
          </Tooltip>
        </Space>
      );
    },
  },
];

const oSDataColumns: ColumnsType<AppDataType> = [
  {
    key: "title",
    title: "Operative System",
    dataIndex: "title",
  },
  {
    key: "amount",
    title: "",
    dataIndex: "amount",
  },
];
const productDataColumns: ColumnsType<AppDataType> = [
  {
    key: "title",
    title: "Product",
    dataIndex: "title",
  },
  {
    key: "amount",
    title: "",
    dataIndex: "amount",
  },
];
const productStaticDataColumns: ColumnsType<ProductDataType> = [
  {
    key: "mfcobol",
    title: "MF COBOL & Old Enterprise Products",
    dataIndex: "mfcobol",
  },
  {
    key: "extend",
    title: "Extend Products (AcuCOBOL)",
    dataIndex: "extend",
  },
  {
    key: "liant",
    title: "Liant Products (RM/COBOL)",
    dataIndex: "liant",
  },
  {
    key: "visual",
    title: "Visual COBOL & New Enterprise Products",
    dataIndex: "visual",
  },
  {
    key: "other",
    title: "Other Products",
    dataIndex: "other",
  },
];

const productsDataSource = [
  {
    key: "1",
    mfcobol: (
      <div
        style={{ display: "flex", flexDirection: "column", height: "420px" }}
      >
        <p>Server Express *</p>
        <p>Application Server *</p>
        <p>Server for COBOL</p>
        <p>Server for SOA</p>
        <p>Net Express *</p>
        <p>Server for .Net</p>
        <p>Object COBOL *</p>
        <p>Studio Enterprise Edition</p>
        <p>Server Enterprise Edition</p>
      </div>
    ),
    extend: (
      <div
        style={{ display: "flex", flexDirection: "column", height: "420px" }}
      >
        <p>ACUCOBOL-GT Dev Sys</p>
        <p>AcuBench</p>
        <p>ACUCOBOL-GT Dev Suit</p>
        <p>ACUCOBOL-GT Runtime</p>
        <p>AcuSQL Runtime</p>
        <p>AcuXDBC *</p>
        <p>AcuServer</p>
        <p>AcuConnect *</p>
        <p>Acu4GL *</p>
        <p>Xcentrisity Business Information Server</p>
        <p>AcuToWeb</p>
      </div>
    ),
    liant: (
      <div
        style={{ display: "flex", flexDirection: "column", height: "420px" }}
      >
        <p>RM/COBOL Compiler</p>
        <p>RM/COBOL Runtime</p>
      </div>
    ),
    visual: (
      <div
        style={{ display: "flex", flexDirection: "column", height: "420px" }}
      >
        <p>Visual COBOL *</p>
        <p>COBOL Server</p>
        <p>COBOL 2010 Runtime</p>
        <p>Enterprise Developer *</p>
        <p>Enterprise Test Server</p>
        <p>Enterprise Server</p>
        <p>Enterprise Analyzer</p>
      </div>
    ),
    other: (
      <div
        style={{ display: "flex", flexDirection: "column", height: "420px" }}
      >
        <p>Revolve</p>
        <p>Mainframe Express</p>
        <p>Enterprise Analyzer</p>
        <p>Workbench</p>
        <p>Application Analyzer</p>
      </div>
    ),
  },
];

const Cobol = (props: Props) => {
  const [appDataSource, setAppDataSource] = useState<ICobolApplication[]>([]);
  const [operativeSystemSource, setOperativeSystemSource] = useState<
    IOperativeSystem[]
  >([]);
  const [productDataSource, setProductDataSource] = useState<IProductData[]>(
    []
  );
  const [form] = Form.useForm();
  const [activeIndex, setActiveIndex] = useState<string>("1");
  const TabPane = Tabs.TabPane;
  const [generalEnvironmentFormData, setGeneralEnvironmentFormData] =
    useState<ICobolEnvironment>();

  useEffect(() => {
    console.log(operativeSystemSource);
  }, [operativeSystemSource]);

  const onFinish = (values: any) => {
    console.log(values);
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
    //setAppInfo(formOutput as ICobolApplicationData);
    setActiveIndex("2");
    setLoading(false);
  }

  function handleChangePage(event: any, page: string) {
    setActiveIndex(page);
  }

  function handleEnvironmentData(
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
    setGeneralEnvironmentFormData(form?.getFieldsValue());
    setActiveIndex("3");
    setLoading(false);
  }

  return (
    <>
      <Card
        style={{
          background: "rgb(255,255,255,0.5)",
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <h1
          style={{
            marginBottom: "20px",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          COBOL QUESTIONNAIRE
        </h1>

        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ width: "100%" }}
          layout="vertical"
        >
          <Tabs style={{ paddingBottom: 20 }} activeKey={activeIndex}>
            <TabPane
              key="1"
              tab="Application Data"
              disabled={activeIndex != "1"}
              children={
                <>
                  <div style={{ width: "50%" }}>
                    <Form.Item
                      name="companyid"
                      label="ID (Provided in the email)"
                      rules={[{ required: true }]}
                    >
                      <Input type="string" />
                    </Form.Item>
                    <Form.Item
                      name="companyname"
                      label="Name of the company"
                      rules={[{ required: true }]}
                    >
                      <Input type="string" />
                    </Form.Item>
                    <Form.Item
                      name="applicationscount"
                      label="How many COBOL applications does your company currently have deployed?"
                      rules={[{ required: true }]}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <Space
                    direction="horizontal"
                    style={{ width: "90%", padding: "16px 16px 16px 8px" }}
                  >
                    <CreateAppModal
                      props={{
                        dataSource: appDataSource,
                        setDataSource: setAppDataSource,
                      }}
                    />
                  </Space>
                  <Table
                    columns={appDataColumns as any}
                    dataSource={
                      appDataSource?.map((e: ICobolApplication) => {
                        return {
                          key: e.name,
                          name: e.name,
                          country: e.licensecountry,
                          developedby: e.developedby,
                        };
                      }) || []
                    }
                  />
                  <Button
                    style={{
                      marginLeft: "auto",
                      display: "block",
                      marginTop: "30px",
                    }}
                    type="primary"
                    onClick={() => {
                      setActiveIndex((Number(activeIndex) + 1).toString());
                    }}
                  >
                    {" "}
                    Continue
                  </Button>
                </>
              }
            />
            <TabPane
              key="2"
              tab="General Environment/Infrastructure Data"
              disabled={activeIndex != "2"}
              children={
                <>
                  <BasicForm
                    layoutAlignment="vertical"
                    formFields={(formInstance) =>
                      generateCobolEnvironmentFields(formInstance)
                    }
                    handleSubmit={(event, form, setLoading) => {
                      handleEnvironmentData(event, form, setLoading);
                    }}
                    submitButtonProperties={{ label: "Continue" }}
                    handleBack={(event) => handleChangePage(event, "1")}
                    isHandleBackACtive={true}
                  />
                </>
              }
            />
            <TabPane
              key="3"
              tab="Environment Data per Device"
              disabled={activeIndex != "3"}
              children={
                <>
                  <h1
                    style={{
                      marginBottom: "10px",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    Please, find the button that matches your Operating System
                    and provide all the answers.
                  </h1>
                  <div style={{ margin: "10px 0px" }}>
                    {["Windows", "Linux", "HP - UX", "AIX", "Solaris"].map(
                      (type) => (
                        <CreateOperativeSystemModal
                          props={{
                            type: type,
                            dataSource: operativeSystemSource,
                            setDataSource: setOperativeSystemSource,
                          }}
                        />
                      )
                    )}
                  </div>
                  <Table
                    columns={oSDataColumns as any}
                    dataSource={
                      operativeSystemSource?.map((e: IOperativeSystem) => {
                        return {
                          key: e.ostype,
                          title: e.ostype,
                          amount: (
                            e.properties.length +
                            ((e.processors as any)?.length || 0)
                          ).toString(),
                        };
                      }) || []
                    }
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Button
                      style={{
                        display: "block",
                        marginTop: "30px",
                      }}
                      type="primary"
                      onClick={() => {
                        setActiveIndex((Number(activeIndex) - 1).toString());
                      }}
                    >
                      {" "}
                      Back
                    </Button>
                    <Button
                      style={{
                        display: "block",
                        marginTop: "30px",
                      }}
                      type="primary"
                      onClick={() => {
                        setActiveIndex((Number(activeIndex) + 1).toString());
                      }}
                    >
                      {" "}
                      Continue
                    </Button>
                  </div>
                </>
              }
            />
            <TabPane
              key="4"
              tab="Installation and License Data"
              disabled={activeIndex != "4"}
              children={
                <>
                  <div style={{ width: "50%" }}>
                    <h2>
                      Please provide a Software Discovery Report identifying
                      device names with installations of COBOL including Device
                      Name, Product Name and Product Version.{" "}
                    </h2>
                    <Form.Item
                      name="scancoverage"
                      label={
                        <div>
                          <h2>Q1. Scan Covergae</h2>
                          <p>
                            "If the scanning methodology did NOT cover the
                            entire computer network, please describe the number
                            and type of computers not covered by the scanning
                            Micro Focus reserves its right to request a scan of
                            the full environment to resolve any ambiguity"
                          </p>
                        </div>
                      }
                      rules={[{ required: true }]}
                    >
                      <TextArea />
                    </Form.Item>
                    <Form.Item
                      name="softwareremoveddescription"
                      label={
                        <div>
                          <h2>Q2. Software Removed or Uninstalled</h2>
                          <p>
                            "If the scanning methodology did NOT cover the
                            entire computer network, please describe the number
                            and type of computers not covered by the scanning
                            Micro Focus reserves its right to request a scan of
                            the full environment to resolve any ambiguity"
                          </p>
                        </div>
                      }
                      rules={[{ required: true }]}
                    >
                      <TextArea />
                    </Form.Item>
                  </div>
                  <h2
                    style={{
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    Q3. Please, find the button that matches your Products and
                    provide all the answers.
                  </h2>
                  <Table
                    columns={productStaticDataColumns as any}
                    dataSource={productsDataSource || []}
                    pagination={false}
                    style={{ marginBottom: "10px" }}
                  />
                  {[
                    "MF COBOL & Old Enterprise",
                    "Extend (AcuCOBOL)",
                    "Liant (RM/COBOL)",
                    "Visual COBOL & New Enterprise",
                    "Other Products",
                  ].map((type) => (
                    <CreateProductModal
                      props={{
                        type: type,
                        dataSource: productDataSource,
                        setDataSource: setProductDataSource,
                      }}
                    />
                  ))}
                  <Table
                    columns={productDataColumns as any}
                    dataSource={
                      productDataSource?.map((e: IProductData) => {
                        return {
                          key: e.producttype,
                          title: e.producttype,
                          amount: "10",
                        };
                      }) || []
                    }
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Button
                      style={{
                        display: "block",
                        marginTop: "30px",
                      }}
                      type="primary"
                      onClick={() => {
                        setActiveIndex((Number(activeIndex) - 1).toString());
                      }}
                    >
                      {" "}
                      Back
                    </Button>
                    <Form.Item>
                      <Button
                        style={{
                          marginTop: "30px",
                        }}
                        type="primary"
                        htmlType="submit"
                      >
                        Submit
                      </Button>
                    </Form.Item>
                  </div>
                </>
              }
            />
          </Tabs>
        </Form>
      </Card>
    </>
  );
};

export default Cobol;
