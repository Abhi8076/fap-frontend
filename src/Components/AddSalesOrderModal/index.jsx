import { useState } from "react";
import { Button, DatePicker, Form, Input, message, Modal, Radio, Select, Space } from "antd";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import dayjs from 'dayjs';
import { addSaleOrder } from "../../api/sales";
import { ContainerTypes, handleCatch, ItemUnits } from "../../common-utils";
const dateTimestamp = dayjs().valueOf();

const AddSalesOrder = (props) => {
    const { open, onClose, allContacts, allItems, allAgents, fetchOrders } = props;
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        const payload = {
            saleOrder: {
                contactId: values.contactId,
                agentId: values.agentId,
                saleType: values.saleType,
            },
            lineItems: values.lineItems?.map((item) => {
                return {
                    itemId: item.itemId,
                    type: 'SALE_ORDER',
                    quantity: item.quantity,
                    unit: item.unit,
                    rate: item.rate,
                    itemTotal: item.quantity * item.rate,
                }
            }),
            containers: values.containers
        }
        try {
            await addSaleOrder(payload);
            message.success('sale order added successfully');
            fetchOrders();
            onClose();
        } catch (err) {
            handleCatch(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Add Sales"
            footer={null}
            loading={loading}
            open={open}
            onCancel={onClose}
            styles={{ content: { padding: '10px' } }}
            style={{top: '50px'}}
        >
            <Form
                labelCol={{ xs: { span: 10 }, sm: { span: 8 } }}
                wrapperCol={{ xs: { span: 14 }, sm: { span: 16 } }}
                initialValues={{
                    saleType: 'local',
                    date: dateTimestamp
                }}
                layout="horizontal"
                size="middle"
                style={{
                    maxWidth: 600,
                    margin: '20px 0 10px'
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="date"
                    wrapperCol={{ span: 24 }}
                    style={{ textAlign: 'right' }}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => ({
                        value: value && dayjs(Number(value)),
                    })}
                    normalize={(value) => value && `${dayjs(value).valueOf()}`}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item name="contactId" wrapperCol={{ span: 24 }} rules={[{ required: true, message: 'Please select a customer!' }]}>
                    <Select
                        showSearch
                        placeholder="Select Customer"
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={allContacts}
                    />
                </Form.Item>
                <Form.Item
                    name="saleType"
                    label="sale type"
                    rules={[
                        {
                            required: true,
                            message: 'Please pick an item!',
                        },
                    ]}>
                    <Radio.Group>
                        <Radio.Button value="local">Local</Radio.Button>
                        <Radio.Button value="interState">InterState</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.saleType !== currentValues.saleType}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('saleType') === 'interState' ? (
                            <Form.Item name="agentId" label="Agent">
                                <Select
                                    showSearch
                                    placeholder="Select Agent"
                                    optionFilterProp="label"
                                    popupMatchSelectWidth={false}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={allAgents}
                                />
                            </Form.Item>
                        ) : null}
                </Form.Item>
                <Form.List
                    name="lineItems"
                    rules={[
                        {
                            validator: async (_, names) => {
                                if (!names || names.length < 1) {
                                    return Promise.reject(new Error('At least 1 Item'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex'
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'itemId']}
                                        wrapperCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing item',
                                            },
                                        ]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="items"
                                            optionFilterProp="label"
                                            popupMatchSelectWidth={false}
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={allItems}
                                            style={{ width: '100%' }}
                                        >
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'rate']}
                                        wrapperCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing rate',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Rate" type="number" style={{ marginBottom: 0 }} />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'quantity']}
                                        wrapperCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing quantity',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Qtn" type="number" style={{ marginBottom: 0 }} />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'unit']}
                                        wrapperCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing unit',
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder="units"
                                            style={{ width: '100%' }}
                                        >
                                            {ItemUnits.map(unit => (
                                                <Select.Option key={unit} value={unit}>{unit}</Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <MinusCircle size={24} color="#000" style={{ marginBottom: "-7px" }} onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item
                                wrapperCol={{ span: 24 }}
                            >
                                <Button type="dashed" onClick={() => add()} block icon={<PlusCircle size={24} color="#000" />}>
                                    Add Item
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.List
                    name="containers"
                >
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex'
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'type']}
                                        wrapperCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing type',
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder="type"
                                            style={{ width: '100%' }}
                                            popupMatchSelectWidth={false}
                                        >
                                            {ContainerTypes.map(type => (
                                                <Select.Option key={type} value={type}>{type}</Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'quantity']}
                                        wrapperCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing quantity',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Qtn" type="number" style={{ marginBottom: 0 }} />
                                    </Form.Item>
                                    <MinusCircle size={24} color="#000" style={{ marginBottom: "-7px" }} onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item
                                wrapperCol={{ span: 24 }}
                            >
                                <Button type="dashed" onClick={() => add()} block icon={<PlusCircle size={24} color="#000" />}>
                                    Add Containers
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>

            </Form>
        </Modal>
    );
};

export default AddSalesOrder;
