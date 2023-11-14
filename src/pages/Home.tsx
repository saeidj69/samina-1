import React, { useState } from "react";
import PanelLayout from "../components/layout/panelLayout";
import { useTranslation } from "react-i18next";
import Tables from "../components/tables";

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  userGroup: string;
  mobile: string;
  email: string;
}

export const Home = () => {
  const { t } = useTranslation();

  // const data: DataType[] = [];
  // for (let i = 0; i < 46; i++) {
  //   data.push({
  //     key: i,
  //     firstName: `حمزه ${i}`,
  //     lastName: `قریشی ${i}`,
  //     userGroup: "Admin",
  //     mobile: "09372303904",
  //     email: "hamzeh.ux@gmail.com",
  //   });
  // }

  // handleEdit
  const handleEdit = () => {
    console.log("Edit");
  };

  // handleDelete
  const handleDelete = () => {
    console.log("Delete");
  };

  return (
    <PanelLayout>
      <div>{t("title")}</div>
      <p>tables component</p>
      <div style={{ margin: "20px auto", width: "60%" }}>
        {/* <TableComponent
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        /> */}
        <Tables />
      </div>
    </PanelLayout>
  );
};
