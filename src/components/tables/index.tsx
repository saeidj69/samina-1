import React, { useState } from "react";
import { Table, Button } from "antd";
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

  const [data, setData] = useState<DataType[]>(() => {
    const initialData: DataType[] = [];
    for (let i = 0; i < 46; i++) {
      initialData.push({
        key: i,
        firstName: `حمزه ${i}`,
        lastName: `قریشی ${i}`,
        userGroup: "Admin",
        mobile: "09372303904",
        email: "hamzeh.ux@gmail.com",
      });
    }
    return initialData;
  });

  const columns: ColumnsType<DataType> = [
    {
      title: t("firstName"),
      dataIndex: "firstName",
      width: 150,
    },
    {
      title: t("lastName"),
      dataIndex: "lastName",
      width: 150,
    },
    {
      title: t("userGroup"),
      dataIndex: "userGroup",
      width: 150,
    },
    {
      title: t("mobile"),
      dataIndex: "mobile",
      width: 150,
    },
    {
      title: t("email"),
      dataIndex: "email",
      width: 200,
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <span style={{ display: "flex", flexDirection: "row-reverse" }}>
          <a style={{ marginRight: 10 }}>
            <img src={deleteIcon} alt="delete" />
          </a>
          <a style={{ marginRight: 10 }}>
            <img src={editIcon} alt="edit" />
          </a>
          <Button onClick={() => handleInsertRow(record.key)}>
            Insert Below
          </Button>
          <a>
            <img src={dragIcon} alt="drag" />
          </a>
        </span>
      ),
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleInsertRow = (key: React.Key) => {
    const rowIndex = data.findIndex((item) => item.key === key);
    const newRow: DataType = {
      key: data.length,
      firstName: "New First Name",
      lastName: "New Last Name",
      userGroup: "New User Group",
      mobile: "New Mobile",
      email: "new.email@example.com",
    };

    // Insert the new row below the selected row
    const newData = [...data.slice(0, rowIndex + 1), newRow, ...data.slice(rowIndex + 1)];

    // Update the state with the new data
    setData(newData);

    // Update the selected row keys to include the new row
    setSelectedRowKeys([newRow.key]);
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
