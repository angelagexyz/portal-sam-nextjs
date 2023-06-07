export interface IQuestions {
    title: string;
    questions: {
      name: string;
      label: string;
      options: string[];
    }[];
  }
  
  export const GlobalAssetQuestions: IQuestions = {
    title: "Global position software asset management",
    questions: [
      {
        name: "softwareinventorytoolsimplemented",
        label:
          "Has your company implemented any software inventory tools and/or installation controls?",
        options: ["Yes", "No"],
      },
      {
        name: "softwareinventorytoolsused",
        label:
          "What software inventory tool(s) does your company use for Workstations?",
        options: [
          "Unknown",
          "Microsoft SCCM",
          "IBM Tivoli",
          "Snow",
          "Altiris",
          "Lansweeper",
          "OCS",
          "Landesk",
          "Others",
        ],
      },
      {
        name: "workstationsinventoriedpercentage",
        label: "Percentage of Workstations Inventoried:",
        options: [
          "Unknown",
          ">10%",
          "10%~20%",
          "20%~30%",
          "30%~40%",
          "40%~50%",
          "50%~60%",
          "60%~70%",
          "70%~80%",
          "80%~90%",
          "90%~100%",
          "100%",
        ],
      },
      {
        name: "softwareinventorytoolsservers",
        label:
          "What software inventory tool(s) does your company use for Servers?",
        options: [
          "Unknown",
          "Microsoft SCCM",
          "IBM Tivoli",
          "Snow",
          "Altiris",
          "Lansweeper",
          "OCS",
          "Landesk",
          "Others",
        ],
      },
      {
        name: "pcserverspercentage",
        label: "Percentage of PCs Servers:",
        options: [
          "Unknown",
          ">10%",
          "10%~20%",
          "20%~30%",
          "30%~40%",
          "40%~50%",
          "50%~60%",
          "60%~70%",
          "70%~80%",
          "80%~90%",
          "90%~100%",
          "100%",
        ],
      },
      {
        name: "softwareinstallationsmanager",
        label:
          "Who manages the software installations and deployment of SAS products within your company?",
        options: ["Unknown", "IT Department", "Other Unit"],
      },
    ],
  };

  export const ITInfraQuestions: IQuestions = {
    title: "IT Infrastructure",
    questions: [
      {
        name: "serverslocated",
        label:
          "Where are the servers with SAS products located?",
        options: ["Unknown", "On a Datacenter", "On your facilities", "Other"],
      },
      {
        name: "softwareinventorytoolsused",
        label:
          "What software inventory tool(s) does your company use for Workstations?",
        options: [
          "Unknown",
          "Microsoft SCCM",
          "IBM Tivoli",
          "Snow",
          "Altiris",
          "Lansweeper",
          "OCS",
          "Landesk",
          "Others",
        ],
      },
      {
        name: "workstationsinventoriedpercentage",
        label: "Percentage of Workstations Inventoried:",
        options: [
          "Unknown",
          ">10%",
          "10%~20%",
          "20%~30%",
          "30%~40%",
          "40%~50%",
          "50%~60%",
          "60%~70%",
          "70%~80%",
          "80%~90%",
          "90%~100%",
          "100%",
        ],
      },
      {
        name: "softwareinventorytoolsservers",
        label:
          "What software inventory tool(s) does your company use for Servers?",
        options: [
          "Unknown",
          "Microsoft SCCM",
          "IBM Tivoli",
          "Snow",
          "Altiris",
          "Lansweeper",
          "OCS",
          "Landesk",
          "Others",
        ],
      },
      {
        name: "pcserverspercentage",
        label: "Percentage of PCs Servers:",
        options: [
          "Unknown",
          ">10%",
          "10%~20%",
          "20%~30%",
          "30%~40%",
          "40%~50%",
          "50%~60%",
          "60%~70%",
          "70%~80%",
          "80%~90%",
          "90%~100%",
          "100%",
        ],
      },
      {
        name: "softwareinstallationsmanager",
        label:
          "Who manages the software installations and deployment of SAS products within your company?",
        options: ["Unknown", "IT Department", "Other Unit"],
      },
    ],
  };