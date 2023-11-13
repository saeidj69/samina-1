import React from "react";
import { Table, Space, Button } from "antd";

import { useTranslation } from "react-i18next";

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  userGroup: string;
  mobile: string;
  email: string;
}

interface TableComponentProps {
  data: DataType[];
  handleEdit: (record: DataType) => void;
  handleDelete: (record: DataType) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  handleEdit,
  handleDelete,
}) => {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("FirstName"),
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: t("LastName"),
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: t("UserGroup"),
      dataIndex: "userGroup",
      key: "userGroup",
    },
    {
      title: t("Mobile"),
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: t("Email"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: DataType) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="primary" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table<DataType>
      dataSource={data}
      columns={columns}
      rowKey={(record) => record.key.toString()} // Change 'id' to your unique identifier
    />
  );
};

export default TableComponent;
