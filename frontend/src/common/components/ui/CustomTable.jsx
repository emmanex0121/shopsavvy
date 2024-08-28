import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "../../../index.css";

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    render: () => (
      <img
        src="https://via.placeholder.com/50"
        alt="Product"
        style={{ width: 50, height: 50 }}
      />
    ), // Sample image rendering
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (price) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price),
  },
  {
    title: "Product Description",
    dataIndex: "productDescription",
  },
  {
    title: "Created By",
    dataIndex: "createdBy",
  },
  {
    title: "Created Date",
    dataIndex: "createdDate",
    render: (date) => dayjs(date).format("MMMM D, YYYY"),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    price: 32,
    productDescription: "New York No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    // createdDate: "2024-08-18T10:20:30Z",
  },
  {
    key: "2",
    name: "Jim Green",
    price: 42,
    productDescription: "London No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    createdDate: "2024-08-18T10:20:30Z",
  },
  {
    key: "3",
    name: "Joe Black",
    price: 32,
    productDescription: "Sydney No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    createdDate: "2024-08-18T10:20:30Z",
  },
  {
    key: "4",
    name: "Disabled User",
    price: 99,
    productDescription: "Sydney No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    createdDate: "2024-08-15T10:20:30Z",
  },
  {
    key: "5",
    name: "Disabled User",
    price: 99,
    productDescription: "Sydney No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    createdDate: "2024-08-15T10:20:30Z",
  },
  {
    key: "6",
    name: "Disabled User",
    price: 99,
    productDescription: "Sydney No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    createdDate: "2024-08-12T10:20:30Z",
  },
  {
    key: "7",
    name: "Disabled User",
    price: 99,
    productDescription: "Sydney No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    createdDate: "2024-08-10T10:20:30Z",
  },
  {
    key: "8",
    name: "Disabled User",
    price: 99,
    productDescription: "Sydney No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    createdDate: "2024-08-01T10:20:30Z",
  },
  {
    key: "4",
    name: "Disabled User",
    price: 99,
    productDescription: "Sydney No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    createdDate: "2024-07-22T10:20:30Z",
  },
  {
    key: "9",
    name: "Disabled User",
    price: 99,
    productDescription: "Sydney No. 1 Lake Park",
    createdBy: "Phoenix kheed",
    createdDate: "2024-06-19T10:20:30Z",
  },
];

const CustomTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Handlers for edit and delete actions
  const handleEdit = () => {
    console.log("Edit clicked");
    alert("Edit button clicked!");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
    alert("Delete button clicked!");
  };

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys); // Update selected row keys
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Disable checkbox for 'Disabled User'
      name: record.name,
    }),
  };

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          className="custom-button"
          icon={<EditOutlined />}
          onClick={handleEdit}
          disabled={selectedRowKeys.length === 0} // Disable only when no rows are selected
        >
          Edit
        </Button>
        <Button
          type="danger"
          className="custom-button"
          icon={<DeleteOutlined />}
          onClick={handleDelete}
          disabled={selectedRowKeys.length === 0} // Disable only when no rows are selected
        >
          Delete
        </Button>
      </Space>

      <Table
        className="custom-checkbox"
        rowSelection={{
          type: "checkbox", // Force checkbox type
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default CustomTable;
