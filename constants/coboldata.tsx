import {
  IFormField,
  IFormSection,
} from "@/components/form/BasicForm.component";
import { Button, Divider, Form, FormInstance, Space } from "antd";
import windowsproperties from "@/assets/windowsproperties.png";
import windowsprocessors from "@/assets/windowsprocessors.png";
import linuxproperties from "@/assets/linuxproperties.png";
import linuxprocessors from "@/assets/linuxprocessors.png";
import hpuxproperties from "@/assets/hpuxproperties.png";
import aixproperties from "@/assets/aixproperties.png";
import solarisproperties from "@/assets/solarisproperties.png";
import solarisprocessors from "@/assets/solarisprocessors.png";
import appdiagram from "@/assets/appdiagram.jpg";
import mfcobolfiles from "@/assets/mfcobolfiles.png";
import mfcobolfiles2 from "@/assets/mfcobolfiles2.png";
import extendacucobolfiles from "@/assets/extendacucobolfiles2.png";
import extendacucobolfiles2 from "@/assets/extendacucobolfiles2.png";
import visualcobolfiles from "@/assets/visualcobolfiles2.png";
import visualcobolfiles2 from "@/assets/visualcobolfiles2.png";
import mfcobolversion from "@/assets/mfcobolversion.png";
import mfcobolversion2 from "@/assets/mfcobolversion2.png";
import extendacucobolversion from "@/assets/extendacucobolversion.png";
import extendacucobolversion2 from "@/assets/extendacucobolversion2.png";
import visualcobolversion from "@/assets/visualcobolversion.png";
import visualcobolversion2 from "@/assets/visualcobolversion2.png";
import otherproductsversion from "@/assets/otherproductsversion.png";
import otherproductsversion2 from "@/assets/otherproductsversion2.png";
import mfcobollicense from "@/assets/mfcobollicense.png";
import mfcobollicense2 from "@/assets/mfcobollicense2.png";
import otherproductslicensedata from "@/assets/otherproductslicensedata.png";
import otherproductslicensedata2 from "@/assets/otherproductslicensedata2.png";
import logoexcel from "@/assets/logoexcel.png";
import txticon from "@/assets/txticon.png";

export function generateCobolAplicationDataFields(
  form: FormInstance,
  entry?: ICobolApplicationData
): IFormField[] {
  return [
    {
      key: "header1",
      label: "General Questions",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header1,
    },
    {
      key: "isbuiltwithmicro",
      label:
        "Q1. Please tell us about your application(s) built with or running Micro Focus COBOL software (the application(s)”)",
      inputType: "input",
      disabled: false,
      required: true,
      initialValue: entry?.isbuiltwithmicro,
    },
    {
      key: "name",
      label: "Q2. Name of the COBOL Application",
      inputType: "input",
      disabled: false,
      required: true,
      style: { width: "100%" },
      initialValue: entry?.name,
    },
    {
      key: "licensecountry",
      label:
        "Q3. In which country did you purchase the licenses for this application?",
      inputType: "input",
      disabled: false,
      required: true,
      style: { width: "100%" },
      inputProperties: {
        allowClear: true,
      },
      initialValue: entry?.licensecountry,
    },
    {
      key: "developedby",
      label: "Q4. Who developed the application (in-house, 3rd party…)?",
      inputType: "input",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.developedby,
    },
    {
      key: "developedbyoptional",
      label:
        "Q5. If the application was not developed in-house, please describe who developed it and provide the name of the company",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.developedbyoptional,
    },
    {
      key: "appnature",
      label:
        "Q6. Please describe the nature, function and objective(s) of the application (not only high level). Describe the basic functionality, the modules and the environment. To avoid misunderstandings in further conversations, please detail the information.",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.appnature,
    },
    {
      key: "internetmonitored",
      label:
        "Q7. Is there usage via the internet, e.g. web-interfaces or processing of transactions through the internet and how is this monitored?",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.internetmonitored,
    },
    {
      key: "header2",
      label: "Application Functionality Details",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header1,
    },
    {
      key: "functionality",
      label: "Q8. Select the functionality that is applicable to you",
      inputType: "select",
      inputData: {
        options: [
          {
            label: "Unattended Processing",
            value: "unattended-processing",
          },
          { label: "Automated Processing", value: "automated-processing" },
          { label: "Batch Processing", value: "batch-processing" },
          { label: "Schedulers", value: "schedulers" },
          { label: "Import or Exports", value: "import-exports" },
          { label: "Other", value: "other" },
        ],
      },
      disabled: false,
      required: false,
      initialValue: entry?.functionality,
    },
    {
      key: "functionalityDescription",
      label: "Q9. Please give a brief description of it",
      inputType: "text-area",
      disabled: false,
      required: true,
      initialValue: entry?.functionalityDescription,
    },
    {
      key: "isfunctionalitytested",
      label:
        "Q10. If there are changes to the unattended processes/functionalities above, do you test them in a test environment?",
      inputType: "select",
      inputData: {
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      disabled: false,
      required: true,
      style: { width: "100%" },
      initialValue: entry?.isfunctionalitytested,
    },
    {
      key: "header3",
      label: "Application Diagram / Application Menu Structure",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header1,
    },
    {
      key: "appDiagram",
      label:
        "Q11. Help us to understand how the application is structured. If possible, please send us an Application Diagram for the main functions of your application in any of the following formats of your choice: Excel, Images, PDF or Visio. (The diagram should include how users interact with the COBOL application, directly or indirectly, and how the application communicates with other systems or databases).If you don't have an architecture diagram, please provide screenshots of the menu structure",
      inputType: "upload",
      sampleType: "image",
      sample: appdiagram.src,
      disabled: false,
      required: false,
      initialValue: entry?.appDiagram,
    },
  ];
}

export function generateCobolUsersAplicationDataFields(
  form: FormInstance,
  entry?: ICobolUsersApplication
): IFormField[] {
  return [
    {
      key: "header1",
      label: "COBOL Internal Usage 1 - Related to COBOL Application 1",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header1,
    },
    {
      key: "appUsage",
      label: "Q1. Please fill out the spreadsheet below",
      inputType: "upload",
      sampleType: "application/vnd.ms-excel",
      sampleText: "COBOL Users Application",
      sampleImage: logoexcel.src,
      sample:
        "https://docs.google.com/spreadsheets/d/1NoWQ0d04TEcT1xENJnHkLAobOQ7fm5n9/edit?usp=drive_link&ouid=105071192825809692121&rtpof=true&sd=true",
      disabled: false,
      required: false,
      initialValue: entry?.appUsage,
    },
  ];
}

export function generateCobolAplicationDistributionFields(
  form: FormInstance,
  entry?: ICobolApplicationDistribution
): IFormField[] {
  return [
    {
      key: "header1",
      label: "Introduction",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header1,
    },
    {
      key: "list1",
      label: "Please answer this sheet:",
      inputType: "list",
      disabled: false,
      listitems: [
        " - if you are a Software House or an Independent Software Vendor (ISV) who sells a COBOL application to your customers",
        " - if you are a System Integrator/Reseller who sells or provides a service via a COBOL application to your customers",
        " - if you are delivering the COBOL application to other companies/entities in your organization/holding",
        " - if you are delivering the COBOL application to other companies external to your organization",
      ],
      required: false,
      initialValue: entry?.list1,
    },
    {
      key: "header2",
      label: 'Definition of "Customers" or "Other Companies"',
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header2,
    },
    {
      key: "customersdefinition",
      label:
        'Q1. If you provide any services with Micro Focus COBOL products to external entities, please explain in detail who you consider as your "Customers" or as "Other Companies" who benefit from your services/applications: (Example : We are a Software House/Service Provider and our customers use our COBOL ERP application, OR we are a service provider and we provide a COBOL application service to some employees in another company, but this company as a legal entity belongs to the same holding as we do.) Please answer below:',
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.customersdefinition,
    },
    {
      key: "header3",
      label:
        'Distribution Details (current "service provider" vs. "customer" situation)',
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header3,
    },
    {
      key: "distributedappnames",
      label:
        "Q2. If you distribute one or more applications to your customers, or to other companies, please enter the name of the application(s):",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      inputProperties: {
        allowClear: true,
      },
      initialValue: entry?.distributedappnames,
    },
    {
      key: "hosttype",
      label:
        "Q3. If you distribute an application to your customers, do you use an",
      inputType: "select",
      inputData: {
        options: [
          { label: "Internal Host Environment", value: "internal-host" },
          {
            label: "A cloud solution offered by a service provider",
            value: "cloud-solution",
          },
          {
            label:
              "Is the application hosted by the external customer at their own site",
            value: "external-customer",
          },
          { label: "FTP/CD/Download", value: "ftp" },
          { label: "Other", value: "other" },
        ],
      },
      disabled: false,
      required: false,
      initialValue: entry?.hosttype,
    },
    {
      key: "hosttypedescription",
      label: "Q4. Please describe briefly the answer above",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.hosttypedescription,
    },
    {
      key: "appdistribution",
      label:
        "Q5. Please describe in a few sentences how your application is distributed to external customers based on the kind of answer above",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.appdistribution,
    },
    {
      key: "ishotedprovided",
      label: "Q6. Do you provide Hosted/SaaS to your customers?",
      inputType: "select",
      inputData: {
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.ishotedprovided,
    },
    {
      key: "hotedprovideddescription",
      label:
        "Q7. If “Yes”, please provide a brief description on this (i.e.: How the hosting is arranged, how customers access the service, do you provide your own host environment or do you use cloud services etc.)",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.hotedprovideddescription,
    },
    {
      key: "header4",
      label: "Customer Details",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header4,
    },
    {
      key: "customerdetails",
      label: "Q8. Please fill out the spreadsheet below",
      inputType: "upload",
      sampleType: "application/vnd.ms-excel",
      sampleText: "Customer Details",
      sampleImage: logoexcel.src,
      sample:
        "https://docs.google.com/spreadsheets/d/1rKKtvQAoLxKLAkNMmkNux9pxcD1xd5MQ/edit?usp=drive_link&ouid=105071192825809692121&rtpof=true&sd=true",
      disabled: false,
      required: false,
      initialValue: entry?.customerdetails,
    },
  ];
}

export function generateCobolEnvironmentFields(
  form: FormInstance,
  entry?: ICobolEnvironment
): IFormField[] {
  return [
    {
      key: "workstation",
      label: "Q1. Please fill out the spreadsheet below",
      inputType: "upload",
      sampleType: "application/vnd.ms-excel",
      sampleText: "COBOL Environment",
      sampleImage: logoexcel.src,
      sample:
        "https://docs.google.com/spreadsheets/d/1orN-JVVzEGFTnBTxSaoiZNslg-WhMxi-/edit?usp=drive_link&ouid=105071192825809692121&rtpof=true&sd=true",
      disabled: false,
      required: false,
      initialValue: entry?.workstation,
    },
    {
      key: "header1",
      label: "Contingency / Backup Environments",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header1,
    },
    {
      key: "backuptype",
      label: "Q2. What kind of backup do you use?",
      inputType: "input",
      disabled: false,
      required: false,
      initialValue: entry?.backuptype,
    },
    {
      key: "backuptypedetail",
      label:
        'Q3. If the backup method you use is "other", please name the backup method',
      inputType: "text-area",
      disabled: false,
      required: true,
      style: { width: "100%" },
      initialValue: entry?.backuptypedetail,
    },
    {
      key: "disasterrecoverydescription",
      label:
        "Q4. Please give us a brief description of your disaster recovery process should the production environment fail",
      inputType: "text-area",
      disabled: false,
      required: true,
      style: { width: "100%" },
      initialValue: entry?.disasterrecoverydescription,
    },
    {
      key: "header2",
      label: "Management of Micro Focus Products",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header2,
    },
    {
      key: "isinstallationmanagedbyyou",
      label:
        "Q5. Is the Micro Focus Products Installation managed by your company on your servers?",
      inputType: "select",
      inputData: {
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      disabled: false,
      required: true,
      style: { width: "100%" },
      initialValue: entry?.isinstallationmanagedbyyou,
    },
    {
      key: "microfocusinstallationdetail",
      label:
        "Q6. If the Micro Focus installations are NOT managed internally, who manages them? Please provide type of service provider and company name",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.microfocusinstallationdetail,
    },
    {
      key: "productslocation",
      label: "Q7. Where are the devices with Micro Focus Products located?",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.productslocation,
    },
    {
      key: "hosteddatacenterlocation",
      label:
        "Q8. If the Micro Focus products are hosted in a 3rd party datacenter or by a cloud provider, please provide company name and location",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.hosteddatacenterlocation,
    },
    {
      key: "septupifspread",
      label:
        "Q9. If devices with Micro Focus products are spread across internal and external environments, please give a brief description of the setup",
      inputType: "text-area",
      disabled: false,
      required: false,
      style: { width: "100%" },
      initialValue: entry?.septupifspread,
    },
    {
      key: "header3",
      label: "Management of Infrastructure",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: entry?.header3,
    },
    {
      key: "itinfrastructure",
      label: "Q10. Who Manages your IT infrastructure?",
      inputType: "text-area",
      disabled: false,
      required: true,
      style: { width: "100%" },
      inputProperties: {
        allowClear: true,
      },
      initialValue: entry?.itinfrastructure,
    },
    {
      key: "itinfrastructuredetail",
      label:
        "Q11. If your IT Infrastructure is NOT managed internally, please provide the company name?",
      inputType: "text-area",
      disabled: false,
      required: true,
      style: { width: "100%" },
      inputProperties: {
        allowClear: true,
      },
      initialValue: entry?.itinfrastructuredetail,
    },
  ];
}

export function generateWindowsOSDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "type",
      label: "Windows",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "windows",
    },
    {
      key: "properties",
      label:
        'Q1. Instructions: Please send us an image from Windows System Properties: To open Windows System Properties you can: Press the keys Windows Key + Pause/Break OR right click "This PC" (or Computer) icon and select Properties',
      inputType: "upload",
      sampleType: "image",
      sample: windowsproperties.src,
      disabled: false,
      required: false,
      initialValue: entry?.properties,
    },
    {
      key: "processors",
      label:
        "Q2. Instructions: Open a command prompt and execute the command: echo %COMPUTERNAME% && wmic cpu get NumberOfCores, NumberOfLogicalProcessors/Format:List. To open the command prompt you can: Press the keys Windows Key + R, then type cmd, then hit Ok.",
      inputType: "upload",
      sampleType: "image",
      sample: windowsprocessors.src,
      disabled: false,
      required: false,
      initialValue: entry?.processors,
    },
  ];
}
export function generateLinuxOSDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "type",
      label: "Linux",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "Linux",
    },
    {
      key: "list1",
      label:
        "Q1. Instructions: Please send us an image from the output for the following commands (execute as root user). Execute in this order:",
      inputType: "list",
      disabled: false,
      listitems: [
        "# hostname",
        "# uname -a",
        '# lscpu | grep "Architecture|Socket|Core|Hypervisor|Model"',
        '# grep "processor|model name" /proc/cpuinfo',
      ],
      required: false,
      initialValue: entry?.list1,
    },
    {
      key: "properties",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: linuxproperties.src,
      disabled: false,
      required: false,
      initialValue: entry?.properties,
    },
    {
      key: "list1",
      label:
        "Q2. Instructions: Please send us an image from the output for the following commands (execute as root user). Execute in this order:",
      inputType: "list",
      disabled: false,
      listitems: ["# hostname", "# uname -a", "# machinfo", "# mpsched -S"],
      required: false,
      initialValue: entry?.list1,
    },
    {
      key: "processors",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: linuxprocessors.src,
      disabled: false,
      required: false,
      initialValue: entry?.processors,
    },
  ];
}
export function generateHpUxOSDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "type",
      label: "HP - UX",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "HP - UX",
    },
    {
      key: "list1",
      label:
        "Q1. Instructions: Please send us an image from the output for the following commands, but you will first need to login with root user account.\n Execute in this order:",
      inputType: "list",
      disabled: false,
      listitems: ["# hostname", "# uname -a", "# machinfo", "# mpsched -S"],
      required: false,
      initialValue: entry?.list1,
    },
    {
      key: "properties",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: hpuxproperties.src,
      disabled: false,
      required: false,
      initialValue: entry?.properties,
    },
  ];
}
export function generateAIXOSDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "type",
      label: "AIX",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "AIX",
    },
    {
      key: "list1",
      label:
        "Q1. Instructions: Please send us an image from the output for the following command, but you will first need to login with root user account:",
      inputType: "list",
      disabled: false,
      listitems: ["# lparstat -i"],
      required: false,
      initialValue: entry?.list1,
    },
    {
      key: "properties",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: aixproperties.src,
      disabled: false,
      required: false,
      initialValue: entry?.properties,
    },
  ];
}
export function generateSolarisOSDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "type",
      label: "Solaris",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "Solaris",
    },
    {
      key: "list1",
      label:
        "Q1. Instructions: Please send us an image from the output for the following command, but you will first need to login with root user account.\n Execute in this order:",
      inputType: "list",
      disabled: false,
      listitems: [
        "# hostname",
        "# uname -a",
        "# kstat cpu_info|grep core_id|sort -u|wc -l",
        "# psrinfo -pv",
      ],
      required: false,
      initialValue: entry?.list1,
    },
    {
      key: "properties",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: solarisproperties.src,
      disabled: false,
      required: false,
      initialValue: entry?.properties,
    },
    {
      key: "list2",
      label: `Q2. Oracle Solaris Zones (Follow these steps if applicable).
      
Instructions: Please send us an image from the output for the following commands (execute as root user). Execute in this order:`,
      inputType: "list",
      disabled: false,
      listitems: [
        `Dedicated CPU
      To check or validate the number of dedicated-cpus assigned to the zone use the following and note the ncpus setting:
      root:~# zonecfg -z dedicated-zone info dedicated-cpu
      `,
        `Capped CPU
      To check or validate the number of capped-cpus specified to the zone use the following and note the ncpus setting:
      root:~# zonecfg -z capped-zone info capped-cpu
      `,
        `Resource Pool
      For each zone that is a hard partition examine the pool association of the zone, in the output below it is orapool:
      root:~# zonecfg -z orazone1 info pool
      pool: orapool
      `,
        `Next examine the poolcfg information of the orapool setting for pset.max is the value to note:
      root:~# poolcfg -c 'info pool orapool'`,
      ],
      required: false,
      initialValue: entry?.list2,
    },
    {
      key: "processors",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: solarisprocessors.src,
      disabled: false,
      required: false,
      initialValue: entry?.processors,
    },
  ];
}

export interface ICobolApplicationData extends IKeyAsString {
  isbuiltwithmicro: string;
  name: string;
  licensecountry: string;
  developedby: string;
  developedbyoptional?: string;
  appnature?: string;
  internetmonitored?: string;
  details: string;
  detailsoptional?: string;
  testprocesses: string;
  diagram?: Blob | Blob[];
}

export interface ICobolUsersApplication extends IKeyAsString {
  appUsage: Blob | Blob[];
}

export interface ICobolApplicationDistribution extends IKeyAsString {
  customersdefinition: string;
  distributedappnames: string;
  hosttype: string;
  hosttypedescription: string;
  appdistribution?: string;
  ishotedprovided?: string;
  hotedprovideddescription?: string;
  customerdetails?: Blob | Blob[];
}

export interface ICobolApplication extends IKeyAsString {
  isbuiltwithmicro?: string;
  name?: string;
  licensecountry?: string;
  developedby?: string;
  developedbyoptional?: string;
  appnature?: string;
  internetmonitored?: string;
  details?: string;
  detailsoptional?: string;
  testprocesses?: string;
  diagram?: Blob | Blob[];
  appUsage?: Blob | Blob[];
  customersdefinition?: string;
  distributedappnames?: string;
  hosttype?: string;
  hosttypedescription?: string;
  appdistribution?: string;
  ishotedprovided?: string;
  hotedprovideddescription?: string;
  customerdetails?: Blob | Blob[];
}

export interface ICobolEnvironment extends IKeyAsString {
  workstation: Blob | Blob[];
  backuptype: string;
  backuptypedetail?: string;
  disasterrecoverydescription: string;
  isinstallationmanagedbyyou: string;
  microfocusinstallationdetail?: string;
  productslocation: string;
  hosteddatacenterlocation: string;
  septupifspread?: string;
  itinfrastructure: string;
  itinfrastructuredetail?: string;
}

export interface IOperativeSystem extends IKeyAsString {
  ostype: string;
  properties: Blob[];
  processors?: Blob[];
}

export interface IProductData extends IKeyAsString {
  producttype: string;
  productfiles: Blob[];
  productfiles2?: Blob[];
  productversion: Blob[];
  productversion2?: Blob[];
  licendata?: Blob[];
  licendataoptional?: Blob[];
  licendata2?: Blob[];
  licensedataoptional2?: Blob[];
}

export interface IKeyAsString {
  [key: string]: any;
}

export function generateMFCobolDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "producttype",
      label: "MF COBOL & Old Enterprise Products",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "MF COBOL & Old Enterprise Products",
    },
    {
      key: "text1",
      label: "Finding Product Files - Instructions for Windows",
      inputType: "text",
      content: `Please scan for the file names starting on line 8 above on every machine in your network with Cobol installed
      Start a command prompt using Administrator rights (repeat it in every machine in your network with Cobol installed): 
      echo %COMPUTERNAME% && cd c:/ && dir apptrack.exe cblviom.dll cobol.exe run.exe cblrtsm.dll /b /s`,
      disabled: false,
      required: false,
      initialValue: "text1",
    },
    {
      key: "productfiles",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: mfcobolfiles.src,
      disabled: false,
      required: false,
      initialValue: entry?.productfiles,
    },
    {
      key: "text2",
      label: "Finding Product Files - Instructions for Linux and Unix",
      inputType: "text",
      content: `Please scan for the file names starting on line 8 above on every machine in your network with Cobol installed
      Login with root user (repeat it in every machine in your network with Cobol installed): 
      find / \u005C( -name apptrack -o -name cobrun -o -name cob \u005C)
      `,
      disabled: false,
      required: false,
      initialValue: "text2",
    },
    {
      key: "productfiles2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: mfcobolfiles2.src,
      disabled: false,
      required: false,
      initialValue: entry?.productfiles2,
    },
    {
      key: "text3",
      label: "Product Version - Instructions for Windows",
      inputType: "text",
      content: `Login with administrator user (repeat it in every machine in your network) and execute the following commands:
      # Open the Windows Command Prompt
      Press Windows Key + R and then type cmd and press Enter key
      
      # CHANGE THE DEFAULT COBOL INSTALLATION PATH IF NEEDED
      # Server 5.1 = Product Name
      "C:\u005CProgram Files (x86)\u005CMicro Focus\u005CServer 5.1\u005CBin\u005C"run;exit
      
      "C:\u005CProgram Files (x86)\u005CMicro Focus\u005CServer 5.1\u005CBin\u005C"MFSupportInfo.exe
      `,
      disabled: false,
      required: false,
      initialValue: "text3",
    },
    {
      key: "productversion",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: mfcobolversion.src,
      disabled: false,
      required: false,
      initialValue: entry?.productversion,
    },
    {
      key: "text4",
      label: "Product Version - Instructions for Linux and Unix",
      inputType: "text",
      content: `Login with root user (repeat it in every machine in your network) and execute the following commands:
      # CHANGE THE DEFAULT COBOL INSTALLATION PATH IF NEEDED
      export COBDIR=/opt/microfocus/cobol
      
      # NO NEED TO CHANGE THESE ENVIRONMENT VARIABLES BELOW
      export PATH=\u0024{PATH}:\u0024{COBDIR}/bin
      export LMFCOMM=/tmp
      export LD_LIBRARY_PATH=\u0024{COBDIR}/lib:\u0024{LD_LIBRARY_PATH}
      export SHLIB_PATH=\u0024{COBDIR}/lib:\u0024{SHLIB_PATH}
      export LIBPATH=\u0024{COBDIR}/lib:\u0024{LIBPATH}
      
      cat \u0024{COBDIR}/etc/cobver
      
      mfsupport
      `,
      disabled: false,
      required: false,
      initialValue: "text4",
    },
    {
      key: "productversion2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: mfcobolversion2.src,
      disabled: false,
      required: false,
      initialValue: entry?.productversion2,
    },
    {
      key: "text5",
      label: "License Data - Instructions for Windows",
      inputType: "text",
      content: `Login with administrator user (repeat it in every machine in your network) and execute the following commands:
      # Open the Windows Command Prompt
      Press Windows Key + R and then type cmd and press Enter key
      
      # CHANGE THE DEFAULT COBOL INSTALLATION PATH TO MATCH THE VERSION YOU HAVE INSTALLED
      # Server 5.1 = Product Name
      "C:\u005CProgram Files (x86)\u005CServer 5.1\u005CBin\u005C"apptrack.exe > %COMPUTERNAME%.LicenseDetails.txt
      
      # The command above will wait for additional commands, Press the Key 1 and then press the Key 9 multiple times until the prompt return to its normal state.
      `,
      disabled: false,
      required: false,
      initialValue: "text5",
    },
    {
      key: "licendata",
      label: "",
      inputType: "upload",
      sampleType: "txt",
      sampleText: "WIN64.LicenseDetails.txt",
      sampleImage: txticon.src,
      sample:
        "https://drive.google.com/file/d/1XN_F-j8PZWwFS-ZGtEF_Lp0z0H2Bj8HL/view?usp=drive_link",
      disabled: false,
      required: false,
      initialValue: entry?.licendata,
    },
    {
      key: "text6",
      label: "",
      inputType: "text",
      content: `***WORKAROUND FOR PROBLEMS ONLY*** 
      If during the execution of the command above, the content of the file generated is similar to the sample below, follow this steps:
      # OPEN THE LICENSE FOLDER
      C:\u005Cmfaslmf
      # COMPRESS THE LICENSE FILE USING ANY TOOL (Winzip, Winrar, 7-Zip, Etc)
      mfasdb 

      Please save the file with the hostname in its name.
      Send the generated file to us please.`,
      disabled: false,
      required: false,
      initialValue: "text6",
    },
    {
      key: "licensedataoptional",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: mfcobollicense.src,
      disabled: false,
      required: false,
      initialValue: entry?.licensedataoptional,
    },
    {
      key: "text7",
      label: "License Data - Instructions for Linux and Unix",
      inputType: "text",
      content: `Login with root user (repeat it in every machine in your network) and execute the following commands:
      # CHANGE THE DEFAULT COBOL INSTALLATION PATH TO MATCH THE VERSION YOU HAVE INSTALLED
      export COBDIR=/opt/microfocus/cobol
      
      # NO NEED TO CHANGE THESE ENVIRONMENT VARIABLES BELOW
      export PATH=\u0024{PATH}:\u0024{COBDIR}/bin
      export LMFCOMM=/tmp
      export LD_LIBRARY_PATH=\u0024{COBDIR}/lib:\u0024{LD_LIBRARY_PATH}
      export SHLIB_PATH=\u0024{COBDIR}/lib:\u0024{SHLIB_PATH}
      export LIBPATH=\u0024{COBDIR}/lib:\u0024{LIBPATH}
      
      # COLLECT LICENSE DETAILS
      echo -e "\u005Cn1\u005Cn\u005Cn\u005Cn\u005Cn\u005Cn\u005Cn\u005Cn\u005C2\u005Cn9\u005Cn" | \u0024{COBDIR}/aslmf/apptrack > \u0024{HOSTNAME}.LicenseDetails.txt
      `,
      disabled: false,
      required: false,
      initialValue: "text7",
    },
    {
      key: "licendata2",
      label: "",
      inputType: "upload",
      sampleType: "txt",
      sampleText: "rhelcyro.LicenseDetails.txt",
      sampleImage: txticon.src,
      sample:
        "https://drive.google.com/file/d/1RDAEAw8yRcCmcGL4_lp631LucBJXEDB_/view?usp=drive_link",
      disabled: false,
      required: false,
      initialValue: entry?.licendata2,
    },
    {
      key: "text8",
      label: "",
      inputType: "text",
      content: `***WORKAROUND FOR PROBLEMS ONLY*** 
      If during the execution of the command above, the content of the file generated is similar to the sample below, follow this steps:
      # NAVIGATE TO THE LICENSE FOLDER
      cd /var/mfaslmf 
      # COMPRESSING THE LICENSE FILE
      tar cvf \u0024{HOSTNAME}.mfasdb.tar mfasdb 

     This will create a .tar file. 
     Send the generated file to us please.`,
      disabled: false,
      required: false,
      initialValue: "text8",
    },
    {
      key: "licensedataoptional2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: mfcobollicense2.src,
      disabled: false,
      required: false,
      initialValue: entry?.licensedataoptional2,
    },
  ];
}

export function generateExtendAcuCobolDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "producttype",
      label: "Extend Products (AcuCOBOL)",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "Extend Products (AcuCOBOL)",
    },
    {
      key: "text1",
      label: "Finding Product Files - Instructions for Windows",
      inputType: "text",
      content: `Please scan for the file names starting on line 8 above on every machine in your network with Cobol installed: 
      Start a command prompt using Administrator rights (repeat it in every machine in your network  with Cobol installed): 
      echo %COMPUTERNAME% && cd c:/ && dir acubench* acurcl* acuserve* acusql* ccbl32* wrun32* xvision* /b /s 
      `,
      disabled: false,
      required: false,
      initialValue: "text1",
    },
    {
      key: "productfiles",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: extendacucobolfiles.src,
      disabled: false,
      required: false,
      initialValue: entry?.productfiles,
    },
    {
      key: "text2",
      label: "Finding Product Files - Instructions for Linux and Unix",
      inputType: "text",
      content: `Please scan for the file names starting on line 8 above on every machine in your network with Cobol installed:
      Login with root user (repeat it in every machine in your network with Cobol installed): 
      find / \u005C( -name acubench -o -name acurcl -o -name acuserve -o -name acusql -o -name ccbl32 -o -name wrun32 -o -name xvision \u005C)
      `,
      disabled: false,
      required: false,
      initialValue: "text2",  
    },
    {
      key: "productfiles2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: extendacucobolfiles2.src,
      disabled: false,
      required: false,
      initialValue: entry?.productfiles2,
    },
    {
      key: "text3",
      label: "Product Version and License Data - Instructions for Windows",
      inputType: "text",
      content: `Login with administrator user (repeat it in every machine in your network) and execute the following commands:
      # Open the Windows Command Prompt
      Press Windows Key + R and then type cmd and press Enter key
      
      # CHANGE THE DEFAULT COBOL INSTALLATION PATH TO MATCH THE VERSION YOU HAVE INSTALLED
      # If your version is 9.0.0 or higher: 
        # 10.2.1 = Product Version
        # For 32-bit systems:
          cd C:\u005CProgramData\u005CMicro Focus\u005Cextend\u005C10.2.1\u005C
        # For 64-bit systems:
          cd C:\u005CProgramData\u005CMicro Focus\u005Cextend\u005C10.2.1\u005Cx64
      
      # If your version is up to version 9.0.0: 
        # 810 = Product Version
        # For 32-bit systems:
          cd C:\u005CProgram Files (x86)\u005CAcucorp\u005CAcucbl810\u005CAcuGT\u005Cbin
        #For 64-bit systems:
          cd C:\u005CProgram Files\u005CAcucorp\u005CAcucbl810\u005CAcuGT\u005Cbin
      
      # Locate any files named ccbl*, acurcl*, xvision* or wrun* and compress all of them in a .zip file with the name of your machine.
      # Please send us the compressed file from each installation.
      `,
      disabled: false,
      required: false,
      initialValue: "text3",
    },
    {
      key: "productversion",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: extendacucobolversion.src,
      disabled: false,
      required: false,
      initialValue: entry?.productversion,
    },
    {
      key: "text4",
      label: "Product Version and License Data - Instructions for Linux and Unix",
      inputType: "text",
      content: `Login with root user (repeat it in every machine in your network) and execute the following commands:
      # Collect Licenses Details in use
      
      echo BEGIN LICENSE CHECK > \u0024{HOSTNAME}.aculicense.txt
      find / \u005C( -name '*.[123aciko]lc' -o -name xvision.elc \u005C) -exec echo "---" \u005C; -print -exec cat '{}' \u005C; >> \u0024{HOSTNAME}.aculicense.txt
      echo --- >> \u0024{HOSTNAME}.aculicense.txt
      echo LICENSE CHECK COMPLETE >> \u0024{HOSTNAME}.aculicense.txt
      
      # The execution may take quite a bit of time depending on the size of the system and the speed of the processor.
      
      # Please send us the *.aculicense.txt file(s) from each installation.
      `,
      disabled: false,
      required: false,
      initialValue: "text4",
    },
    {
      key: "productversion2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: extendacucobolversion2.src,
      disabled: false,
      required: false,
      initialValue: entry?.productversion2,
    }
  ];
}

export function generateLiantDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "producttype",
      label: "Liant Products (RM/COBOL)",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "Liant Products (RM/COBOL)",
    },
    {
      key: "text1",
      label: "Finding Product Files - Instructions for Windows",
      inputType: "text",
      content: `Please scan for the file names starting on line 8 above on every machine in your network with Cobol installed: 
      Start a command prompt using Administrator rights (repeat it in every machine in your network with Cobol installed): 
      echo %COMPUTERNAME% && cd c:/ && dir rmcobol.exe runcobol.exe /b /s `,
      disabled: false,
      required: false,
      initialValue: "text1",
    },
    {
      key: "productfiles",
      label: "",
      inputType: "upload",
      sampleType: "image",
      disabled: false,
      required: false,
      initialValue: entry?.productfiles,
    },
    {
      key: "text2",
      label: "Finding Product Files - Instructions for Linux and Unix",
      inputType: "text",
      content: `Please scan for the file names starting on line 8 above on every machine in your network with Cobol installed
      Login with root user (repeat it in every machine in your network with Cobol installed): 
      find / \u005C( -name acubench -o -name rmcobol -o -name runcobol \u005C)
      `,
      disabled: false,
      required: false,
      initialValue: "text2",
    },
    {
      key: "productfiles2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      disabled: false,
      required: false,
      initialValue: entry?.productfiles2,
    },
    {
      key: "text3",
      label: "Product Version and License Data - Instructions for Windows",
      inputType: "text",
      content: `Login with administrator user (repeat it in every machine in your network) and execute the following commands:
      a. Open the Windows Command Prompt
      Press Windows Key + R and then type cmd and press Enter key
      
      b. For the product RM/COBOL Runtime System (before RM/COBOL v12)
          1. From a command prompt, “cd” to the RM/COBOL Runtime System installation directory
          2. Execute the following command: runcobol x v
          3. Take a screenshot of the output and paste it below in the appropriate field.
      
      c. For the product RM/COBOL v12 and above:
          1. From a command prompt, “cd” to the “SupportTools” subdirectory of the RM/COBOL Runtime System installation
          2. Execute the following command: suptool1 productview
          3. Take a screenshot of the output and paste it below in the appropriate field.
      
      d. For the product Relativity Designer: 
          1. Launch the Relativity Designer (Start --> Programs --> Liant --> Relativity --> Designer)
              a. On Windows 7 (Start --> All Programs --> RMCOBOL --> Relativity v12 --> Designer)
          2. Bring up the About Relativity Designer Menu Item(Help --> About)
          3. Take a screenshot of the About Relativity Designer Menu Item Dialog that is displayed and paste it below in the appropriate field.
      
      e. For the product Relativity Data Manager:
          1. Launch the Relativity Data Manager Monitor Viewer (Start --> Programs --> Liant --> Relativity --> Relativity Manager Monitor Viewer)
              a. On Windows 7 (Start --> All Programs --> RMCOBOL --> Relativity v12 --> Data Manager Monitor Viewer)
          2. Click on the “Licenses” button in the Data Manager Monitor Viewer interface
          3. Send us a screenshot of the Data Manager Monitor License display and paste it below in the appropriate field.      
      `,
      disabled: false,
      required: false,
      initialValue: "text3",
    },
    {
      key: "productversion",
      label: "",
      inputType: "upload",
      sampleType: "image",
      disabled: false,
      required: false,
      initialValue: entry?.productversion,
    },
    {
      key: "text4",
      label: "Product Version and License Data - Instructions for Linux and Unix",
      inputType: "text",
      content: `Login with root user (repeat it in every machine in your network) and execute the following commands:
      # CHANGE THE LICENSE VAULT LOCATION IF NEEDED
      LICENSE_VAULT="/usr/rmcobol/license.vlt"
      
      # CHANGE THE DEFAULT COBOL INSTALLATION PATH IF NEEDED
      export DEFAULT_DIR=/usr/rmcobol
      cd \u0024{DEFAULT_DIR}
      
      # Validating the Version of Development Product
      rmcobol
      
      # Validating the Version of Deployment Product
      runcobol
      
      # Displaying the License Vault information
      \u0024{DEFAULT_DIR}/SupportTools/suptool1 productview \u0024{LICENSE_VAULT}
      
      # Please, take a screenshot for the outputs and paste it below in the appropriate field.`,
      disabled: false,
      required: false,
      initialValue: "text4",
    },
    {
      key: "productversion2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      disabled: false,
      required: false,
      initialValue: entry?.productversion2,
    }
  ];
}

export function generateVisualCobolDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "producttype",
      label: "Visual COBOL & New Enterprise Products",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "Visual COBOL & New Enterprise Products",
    },
    {
      key: "text1",
      label: "Finding Product Files - Instructions for Windows",
      inputType: "text",
      content: `Please scan for the file names starting on line 8 above on every machine in your network with COBOL installed: 

      Start a command prompt using Administrator rights (repeat for every machine in your network with COBOL installed): 
      echo %COMPUTERNAME% && cd c:/ && dir cblviom.dll cobol.exe run.exe cesadmintool.exe cblrtsm.dll /b /s 
      `,
      disabled: false,
      required: false,
      initialValue: "text1",
    },
    {
      key: "productfiles",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: visualcobolfiles.src,
      disabled: false,
      required: false,
      initialValue: entry?.productfiles,
    },
    {
      key: "text2",
      label: "Finding Product Files - Instructions for Linux and Unix",
      inputType: "text",
      content: `Please scan for the file names starting on line 8 above on every machine in your network with Cobol installed
      Login with root user (repeat it in every machine in your network with Cobol installed): 
      find / \u005C( -name cesadmintool.sh -o -name cobrun -o -name cob \u005C)
      `,
      disabled: false,
      required: false,
      initialValue: "text2",
    },
    {
      key: "productfiles2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: visualcobolfiles2.src,
      disabled: false,
      required: false,
      initialValue: entry?.productfiles2,
    },
    {
      key: "text3",
      label: "Product Version - Instructions for Windows",
      inputType: "text",
      content: `Log in with administrator user (repeat for every machine in your network) and execute the following commands:
      # Open the Windows Command Prompt
      Press Windows Key + R and then type cmd and press Enter key
      
      # Execute the utility MFSupportInfo.exe:
      "C:\u005CProgram Files (x86)\u005CMicro Focus\u005CVisual COBOL\u005CBin\u005C"MFSupportInfo.exe
      
      # Select --> File --> Save --> Select a folder to save the report --> click Save. 
      # Please add the *.xml generated`,  
      disabled: false,
      required: false,
      initialValue: "text3",
    },
    {
      key: "productversion",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: visualcobolversion.src,
      disabled: false,
      required: false,
      initialValue: entry?.productversion,
    },
    {
      key: "text4",
      label: "Product Version - Instructions for Linux and Unix",
      inputType: "text",
      content: `Log in with root user (repeat it in every machine in your network) and execute the following commands:
      # CHANGE THE DEFAULT COBOL INSTALLATION PATH IF NEEDED
      export COBDIR=/opt/microfocus/VisualCOBOL
      
      # NO NEED TO CHANGE THE ENVIRONMENT VARIABLES BELOW
      export PATH=\u0024{PATH}:\u0024{COBDIR}/bin
      export LMFCOMM=/tmp
      export LD_LIBRARY_PATH=\u0024{COBDIR}/lib:\u0024{LD_LIBRARY_PATH}
      export SHLIB_PATH=\u0024{COBDIR}/lib:\u0024{SHLIB_PATH}
      export LIBPATH=\u0024{COBDIR}/lib:\u0024{LIBPATH}
      
      cat \u0024{COBDIR}/etc/cobver
      
      mfsupport
      # Please add the generated mfpoll.txt file`,
      disabled: false,
      required: false,
      initialValue: "text4",
    },
    {
      key: "productversion2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: visualcobolversion2.src,
      disabled: false,
      required: false,
      initialValue: entry?.productversion2,
    },
    {
      key: "text5",
      label: "License Data - Instructions for Windows",
      inputType: "text",
      content: `Log in with administrator user (repeat for every machine in your network) and execute the following commands:
      # Open the Windows Command Prompt
      Press Windows Key + R and then type cmd and press Enter key
      
      # COLLECT LICENSE DETAILS - Copy and paste the command bellow on the Command Prompt opened
      "C:\u005CProgram Files (x86)\u005CCommon Files\u005CSafeNet Sentinel\u005CSentinel RMS License Manager\u005CWinNT\u005C"CesAdminTool.exe
      #      Take a screenshot of Summary Tab.
      
      # Please add the file lservrc.log (if the file is bigger than 10mb it will also create files called lservrc.log.xxx).
      #      When on Windows XP the PATH is C:\u005CDocuments and Settings\u005CAll Users\u005CApplication Data\u005CMicro Focus 
      #      When on Windows 7 or Higher the PATH is C:\u005CProgramData\u005CMicro Focus
      `,
      disabled: false,
      required: false,
      initialValue: "text5",
    },
    {
      key: "licendata",
      label: "",
      inputType: "upload",
      sampleType: "txt",
      sampleText: "lservrc.log",
      sampleImage: txticon.src,
      sample:
        "https://drive.google.com/file/d/1EAY0uRSKy9oFIgT_cBiWiksuAOYKsKgT/view?usp=drive_link",
      disabled: false,
      required: false,
      initialValue: entry?.licendata,
    },
    {
      key: "text6",
      label: "License Data - Instructions for Linux and Unix",
      inputType: "text",
      content: `Log in with root user (repeat for machine in your network) and execute the following commands:
      # CHANGE THE DEFAULT COBOL INSTALLATION PATH TO MATCH THE VERSION YOU HAVE INSTALLED
      export COBDIR=/opt/microfocus/VisualCOBOL
      
      # NO NEED TO CHANGE THE ENVIRONMENT VARIABLES BELOW
      export PATH=\u0024{PATH}:\u0024{COBDIR}/bin
      export LMFCOMM=/tmp
      export LD_LIBRARY_PATH=\u0024{COBDIR}/lib:\u0024{LD_LIBRARY_PATH}
      export SHLIB_PATH=\u0024{COBDIR}/lib:\u0024{SHLIB_PATH}
      export LIBPATH=\u0024{COBDIR}/lib:\u0024{LIBPATH}
      
      # COLLECT LICENSE DETAILS
      echo -e "8\u005Cn1\u005Cn\u005Cn2\u005Cn\u005Cn3\u005Cn\u005Cn4\u005Cn\u005Cn99\u005Cn99\u005Cn" | /var/microfocuslicensing/bin/cesadmintool.sh > \u0024{HOSTNAME}.LicenseDetails.txt
      # Please add the generated file`,
      disabled: false,
      required: false,
      initialValue: "text6",
    },
    {
      key: "licendata2",
      label: "",
      inputType: "upload",
      sampleType: "txt",
      sampleText: "rhelcyro.LicenseDetails.txt",
      sampleImage: txticon.src,
      sample:
        "https://drive.google.com/file/d/1WsFUHrYbHUytJQ84yZ697TDHWBFdkgba/view?usp=drive_link",
      disabled: false,
      required: false,
      initialValue: entry?.licendata2,
    }
  ];
}

export function generateOtherProductsDataFields(
  form: FormInstance,
  entry?: IOperativeSystem
): IFormField[] {
  return [
    {
      key: "producttype",
      label: "Other Products",
      inputType: "header",
      disabled: false,
      required: false,
      initialValue: "Other Products",
    },
    {
      key: "text1",
      label: "Q1. Finding Product Files",
      inputType: "text",
      content: `Please scan for the file names starting on line 8 above on every machine in your network with Cobol installed: 
      Start a command prompt using Administrator rights (repeat it in every machine in your network with Cobol installed): 
      echo %COMPUTERNAME% && cd c:/ && dir revolve.exe trconfig.dll pathfinder.dll mfamigrt.exe apsmacro.dll esanalysiswindowsservice.exe wb.exe cobol.exe mfecl.exe RescueAdmin.exe RescueNT.exe /b /s 
      `,
      disabled: false,
      required: false,
      initialValue: "text1",
    },
    {
      key: "productfiles",
      label: "",
      inputType: "upload",
      sampleType: "image",
      disabled: false,
      required: false,
      initialValue: entry?.productfiles,
    },
    {
      key: "workstation",
      label: "Q2. Please fill out the spreadsheet below",
      inputType: "upload",
      sampleType: "application/vnd.ms-excel",
      sampleText: "Other Products spreadsheet",
      sampleImage: logoexcel.src,
      sample:
        "https://docs.google.com/spreadsheets/d/1xV_na4s90gO0Kl7bhS2kLKBXhHQ60DIl/edit?usp=drive_link&ouid=105071192825809692121&rtpof=true&sd=true",
      disabled: false,
      required: false,
      initialValue: entry?.workstation,
    },
    {
      key: "text2",
      label: "Q3. Product Version - First Method",
      inputType: "text",
      content: `Login with administrator user (repeat it in every machine in your network) and execute the following commands:
      # Open the Windows Command Prompt
      Press Windows Key + R and then type cmd and press Enter key
      
      # CHANGE THE DEFAULT PRODUCT INSTALLATION PATH IF NEEDED
      # Enterprise Analyzer = Product Name
      # Execute the utility MFSupportInfo.exe:
      "C:\u005CProgram Files (x86)\u005CMicro Focus\u005CEnterprise Analyzer\u005CBin\u005C"MFSupportInfo.exe
      
      # Select --> File --> Save --> Select a folder to save the report --> click Save 
      # Please add the *.xml generated`,
      disabled: false,
      required: false,
      initialValue: "text2",
    },
    {
      key: "productversion",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: otherproductsversion.src,
      disabled: false,
      required: false,
      initialValue: entry?.productversion,
    },
    {
      key: "text3",
      label: "Q4. Product Version - Second Method",
      inputType: "text",
      content: `Login with administrator user (repeat it in every machine in your network) and execute the following commands:
      # Open the Windows Command Prompt
      Press Windows Key + R and then type cmd and press Enter key
      
      # CHANGE THE DEFAULT PRODUCT INSTALLATION PATH IF NEEDED
      # Mainframe Express = Product Name
      "C:\u005CProgram Files (x86)\u005CMicro Focus\u005CMainframe Express\u005CBin\u005C"MFSupportInfo.exe
      # Please add the generated mfpoll.txt file`,
      disabled: false,
      required: false,
      initialValue: "text3",
    },
    {
      key: "productversion2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample: otherproductsversion2.src,
      disabled: false,
      required: false,
      initialValue: entry?.productversion2,
    },
    {
      key: "text4",
      label: "Q5. License Data - First Method",
      inputType: "text",
      content: `Login with administrator user (repeat it in every machine in your network) and execute the following commands:
      # Open the Windows Command Prompt
      Press Windows Key + R and then type cmd and press Enter key
      
      # COLLECT LICENSE DETAILS - Copy and paste the command bellow on the Command Prompt opened
      "C:\u005CProgram Files (x86)\u005CCommon Files\u005CSafeNet Sentinel\u005CSentinel RMS License Manager\u005CWinNT\u005C"CesAdminTool.exe
      #      Take a screenshot from Summary\u2019s Tab.
      
      # Please add the file lservrc.log (if the file is bigger than 10mb it will also create files called lservrc.log.xxx).
      #      When on Windows XP the PATH is C:\u005CDocuments and Settings\u005CAll Users\u005CApplication Data\u005CMicro Focus 
      #      When on Windows 7 or Higher the PATH is C:\u005CProgramData\u005CMicro Focus
      `,
      disabled: false,
      required: false,
      initialValue: "text4",
    },
    {
      key: "licendata",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample:  otherproductslicensedata.src,
      disabled: false,
      required: false,
      initialValue: entry?.licendata,
    },
    {
      key: "text5",
      label: "Q6. License Data - Second Method",
      inputType: "text",
      content: `Login with administrator  user (repeat it in every machine in your network) and execute the following commands:
      # Click on Windows Key, go to [Start -> Programs -> Micro Focus -> Open the Product folder and Select [License Management System],
      sometimes you may have a [Configuration] before the [License Management System] folder.`,
      disabled: false,
      required: false,
      initialValue: "text5",
    },
    {
      key: "licendata2",
      label: "",
      inputType: "upload",
      sampleType: "image",
      sample:  otherproductslicensedata2.src,
      disabled: false,
      required: false,
      initialValue: entry?.licendata2,
    }
  ];
}
