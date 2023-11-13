import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";

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
    },
    {
      title: t("LastName"),
      dataIndex: "lastName",
    },
    {
      title: t("UserGroup"),
      dataIndex: "userGroup",
    },
    {
      title: t("Mobile"),
      dataIndex: "mobile",
    },
    {
      title: t("Email"),
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>action</a>,
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
      scroll={{ x: '80%' }}
    />
  );
};

export default Tables;
