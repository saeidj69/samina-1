import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import deleteIcon from "../../assets/images/icons/Delete.svg";
import editIcon from "../../assets/images/icons/Edit Square 2.svg";
import dragIcon from "../../assets/images/icons/Resize-2 1.svg";

import { useTranslation } from "react-i18next";

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  userGroup: string;
  mobile: string;
  email: string;
}

const Tables = () => {
  const { t } = useTranslation();

  const columns: ColumnsType<DataType> = [
    {
      title: t("FirstName"),
      dataIndex: "firstName",
      width: 150,
    },
    {
      title: t("LastName"),
      dataIndex: "lastName",
      width: 150,
    },
    {
      title: t("UserGroup"),
      dataIndex: "userGroup",
      width: 150,
    },
    {
      title: t("Mobile"),
      dataIndex: "mobile",
      width: 150,
    },
    {
      title: t("Email"),
      dataIndex: "email",
      width: 200,
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 150,
      render: () => (
        <span style={{ display: "flex", flexDirection: "row-reverse" }}>
          <a style={{ marginRight: 10 }}>
            <img src={deleteIcon} alt="delete" />
          </a>
          <a style={{ marginRight: 10 }}>
            <img src={editIcon} alt="edit" />
          </a>
          <a>
            <img src={dragIcon} alt="drag" />
          </a>
        </span>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      firstName: `حمزه ${i}`,
      lastName: `قریشی ${i}`,
      userGroup: "Admin",
      mobile: "09372303904",
      email: "hamzeh.ux@gmail.com",
    });
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      scroll={{ x: "80%" }}
    />
  );
};

export default Tables;
