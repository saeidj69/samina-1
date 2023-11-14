import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index

// import React, { useState } from 'react';
// import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button } from 'antd';
// import { Key } from 'react';

// interface Item {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
// }

// interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
//   editing: boolean;
//   dataIndex: string;
//   title: any;
//   inputType: 'number' | 'text';
//   record: Item;
//   index: number;
//   handleInsertRow: (key: Key) => void;
//   save: () => void;
//   cancel: () => void;
//   edit: (record: Item) => void;
// }

// const EditableCell: React.FC<EditableCellProps> = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   handleInsertRow,
//   save,
//   cancel,
//   edit,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{ margin: 0 }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`,
//             },
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children // render children directly
//       )}
//       <span>
//         {editing ? (
//           <>
//             <Button onClick={save} style={{ marginRight: 8 }}>
//               Save
//             </Button>
//             <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//               <Button type="link">Cancel</Button>
//             </Popconfirm>
//           </>
//         ) : (
//           <>
//             <Button onClick={() => handleInsertRow(record.key)} style={{ marginRight: 8 }}>
//               Insert Below
//             </Button>
//             <Typography.Link disabled={editing} onClick={() => edit(record)}>
//               {/* Use Fragment to wrap multiple children */}
//               <>
//                 {children}
//               </>
//             </Typography.Link>
//           </>
//         )}
//       </span>
//     </td>
//   );
// };

// const App: React.FC = () => {
//   const [form] = Form.useForm();
//   const [data, setData] = useState<Item[]>(() => {
//     const initialData: Item[] = [];
//     for (let i = 0; i < 100; i++) {
//       initialData.push({
//         key: i.toString(),
//         name: `Edward ${i}`,
//         age: 32,
//         address: `London Park no. ${i}`,
//       });
//     }
//     return initialData;
//   });
//   const [editingKey, setEditingKey] = useState('');

//   const isEditing = (record: Item) => record.key === editingKey;

//   const edit = (record: Partial<Item> & { key: React.Key }) => {
//     form.setFieldsValue({ name: '', age: '', address: '', ...record });
//     setEditingKey(record.key);
//   };

//   const cancel = () => {
//     setEditingKey('');
//   };

//   const save = async (key: React.Key) => {
//     try {
//       const row = (await form.validateFields()) as Item;

//       const newData = [...data];
//       const index = newData.findIndex((item) => key === item.key);
//       if (index > -1) {
//         const item = newData[index];
//         newData.splice(index, 1, {
//           ...item,
//           ...row,
//         });
//         setData(newData);
//         setEditingKey('');
//       } else {
//         newData.push(row);
//         setData(newData);
//         setEditingKey('');
//       }
//     } catch (errInfo) {
//       console.log('Validate Failed:', errInfo);
//     }
//   };

//   const handleInsertRow = (key: React.Key) => {
//     const rowIndex = data.findIndex((item) => item.key === key);
//     const newRow: Item = {
//       key: (data.length + 1).toString(),
//       name: 'New Name',
//       age: 0,
//       address: 'New Address',
//     };

//     // Insert the new row below the selected row
//     const newData = [...data.slice(0, rowIndex + 1), newRow, ...data.slice(rowIndex + 1)];

//     // Update the state with the new data
//     setData(newData);

//     // Update the selected row keys to include the new row
//     setEditingKey(newRow.key);
//   };

//   const columns = [
//     {
//       title: 'name',
//       dataIndex: 'name',
//       width: '25%',
//       editable: true,
//     },
//     {
//       title: 'age',
//       dataIndex: 'age',
//       width: '15%',
//       editable: true,
//     },
//     {
//       title: 'address',
//       dataIndex: 'address',
//       width: '40%',
//       editable: true,
//     },
//     {
//       title: 'operation',
//       dataIndex: 'operation',
//       render: (_: any, record: Item) => {
//         const editable = isEditing(record);
//         return (
//           <EditableCell
//             editing={editable}
//             dataIndex="operation"
//             title="operation"
//             inputType="text"
//             record={record}
//             index={0} // You can set it to 0 as it doesn't matter for this column
//             handleInsertRow={handleInsertRow}
//             save={() => save(record.key)}
//             cancel={cancel}
//             edit={() => edit(record)}
//           />
//         );
//       },
//     },
//   ];

//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record: Item) => ({
//         record,
//         inputType: col.dataIndex === 'age' ? 'number' : 'text',
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//         handleInsertRow,
//         save: () => save(record.key),
//         cancel,
//         edit: () => edit(record),
//       }),
//     };
//   });

//   return (
//     <Form form={form} component={false}>
//       <Table
//         components={{
//           body: {
//             cell: EditableCell,
//           },
//         }}
//         bordered
//         dataSource={data}
//         columns={mergedColumns}
//         rowClassName="editable-row"
//         pagination={{
//           onChange: cancel,
//         }}
//       />
//     </Form>
//   );
// };

// export default App;
