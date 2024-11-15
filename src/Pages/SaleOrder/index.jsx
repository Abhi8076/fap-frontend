import { useEffect, useState } from "react";
import { DatePicker, Descriptions, message, Select, Table } from "antd";
import { handleCatch, screenHeight } from "../../common-utils";
import CommonHeader from "../../Components/CommonHeader";
import { ColFlex, RowFlex, StyledDiv } from "../../Styled/Layout";
import { statusDesign } from "../../Components/TableColumns";
import { fetchAllContacts, fetchAllItems, fetchSalesOrder } from "../../api/sales";
import AddSalesOrder from "../../Components/AddSalesOrderModal";
import { StyledButton } from "../../Styled/Button";
import { CaretCircleLeft, CaretCircleRight, DownloadSimple, Plus } from "@phosphor-icons/react";
import EditSalesOrder from "../../Components/EditSalesOrderModal";
import { PencilSimple } from "@phosphor-icons/react";
import { Tag } from "antd";
import dayjs from 'dayjs';
import { downloadExcel } from "../../Utils/excel";
import { fetchAllAgents } from "../../api";
import { useNavigate } from "react-router-dom";

const SaleOrder = () => {
  const navigate = useNavigate();
  const [saleOrderData, setSaleOrderData] = useState([]);
  const [filteredSaleOrders, setFilteredSaleOrders] = useState([]);
  const [addSaleModalOpen, setAddSaleModalOpen] = useState(false);
  const [editSaleModalOpen, setEditSaleModalOpen] = useState(false);
  const [selectedSaleOrder, setSelectedSaleOrder] = useState(null);
  const [allContacts, setAllContacts] = useState([]);
  const [itemNameToIdMap, setItemNameToIdMap] = useState(new Map());
  const [allItems, setAllItems] = useState([]);
  const [allAgents, setAllAgents] = useState([]);
  const [date, setDate] = useState([dayjs(), dayjs()]);
  const [isdateChangeBtnVisible, setIsdateChangeBtnVisible] = useState(true);

  //filters
  const [selectedContact, setSelectedContact] = useState(null);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'contactName',
      filteredValue: selectedContact && [selectedContact.value],
      onFilter: (value, record) => record.contactId == value,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (data) => <Tag bordered={true} color={statusDesign[data]}>
        {data.toLowerCase()}
      </Tag>
    },
    {
      key: 'action',
      render: (_, rowData) => <PencilSimple size={18} color="rgba(0, 0, 0, 0.58)" weight="fill" onClick={(e) => {
        e.stopPropagation();
        setSelectedSaleOrder(rowData);
        setEditSaleModalOpen(true);
      }} />,
      width: 1
    },
  ];

  const itemsTableColumn = [
    {
      title: 'Item Name',
      dataIndex: 'itemId',
      render: (data) => <>{allItems.find((e) => e.value == data).label}</>
    },
    {
      title: 'rate',
      dataIndex: 'rate',
    },
    {
      title: 'Qtn',
      dataIndex: 'quantity',
    },
    {
      title: 'unit',
      dataIndex: 'unit',
    }
  ];

  const handleDownload = () => {
    if(!filteredSaleOrders?.length){
      message.error("No Sale Order Found!!");
      return;
    }
    downloadExcel(filteredSaleOrders, date[0].format("YYYY/MM/DD"), date[1].format("YYYY/MM/DD"))
  }

  const HeaderContent = () => {
    return (
      <RowFlex m="0" gap="20px">
        <StyledButton
          h="36px"
          onClick={() => setAddSaleModalOpen(true)}
          icon={<Plus size={18} color="#000" />}
          >
          Add
        </StyledButton>
        <DownloadSimple size={24} color="#000" style={{ alignSelf: "end", margin: "auto" }} onClick={handleDownload} />
      </RowFlex>
    )
  }

  const getAllContacts = async () => {
    try {
      const res = await fetchAllContacts();
      if (res.status == 200) {
        const contactForSelect = res.data?.map((contact) => {
          return {
            value: contact.id,
            label: contact.displayName || "-"
          }
        })
        setAllContacts(contactForSelect);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  const getAllItems = async () => {
    try {
      const res = await fetchAllItems();
      if (res.status == 200) {
        const itemsMap = new Map();
        const itemsForSelect = res.data?.map((item) => {
          if (!itemsMap.has(item.id)) itemsMap.set(item.id, item.name);
          return {
            value: item.id,
            label: item.name
          }
        })
        setAllItems(itemsForSelect);
        setItemNameToIdMap(itemsMap);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  const getAllAgents = async () => {
    try {
      const res = await fetchAllAgents();
      if (res.status == 200) {
        const AgentsForSelect = res.data?.map((agent) => {
          return {
            value: agent.id,
            label: agent.displayName
          }
        })
        setAllAgents(AgentsForSelect);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  const fetchOrders = async () => {
    try {
      const res = await fetchSalesOrder({
        startDate: date[0].startOf('day').valueOf(),
        endDate: date[1].endOf('day').valueOf()
      });
      if (res.status == 200) {
        setSaleOrderData(res.data);
        setFilteredSaleOrders(res.data);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  const onDateChange = (_, dates) => {
    const dateFunc = dates.map(date => dayjs(date))
    setDate(dateFunc);
  }
  const updateDate = (days) => {
    const updatedDate = date[0].add(days, 'day');
    setDate([updatedDate, updatedDate]);
  };

  const ItemTable = (props) => {
    return (
      <Table
        bordered
        style={{ width: '100%', marginLeft: 0 }}
        size="middle"
        pagination={{
          position: ["none", "bottomCenter"],
          pageSize: 5
        }}
        columns={itemsTableColumn}
        dataSource={props.itemData || []}
      />
    )
  }

  useEffect(() => {
    // Toggle date change button visibility based on date comparison
    setIsdateChangeBtnVisible(date[0].isSame(date[1], 'day'));

    // fetch orders
    fetchOrders();
  }, [date]);

  useEffect(() => {
    getAllContacts();
    getAllItems();
    getAllAgents();
  }, []);

  return (
    <ColFlex ai="center" minH={false ? `${screenHeight}` : "100vh"} maxW="500px" w="100%" bgc="#fff" style={{ position: "relative" }}>
      <CommonHeader title="Sales" onBack={()=>navigate(-1)} rightContent={<HeaderContent />} />
      <ColFlex m="0" w="100%" p="20px" gap="20px">
        <RowFlex w="100%" m="0" gap="20px">
          <CaretCircleLeft size={32} color="#8c8c8c" display={isdateChangeBtnVisible ? "block" : "none"} onClick={()=>updateDate(-1)} />
          <DatePicker.RangePicker value={date} style={{ alignSelf: "end", width: "100%" }} onChange={onDateChange} format="YYYY/MM/DD" popupClassName="yolup" />
          <CaretCircleRight size={32} color="#8c8c8c" display={isdateChangeBtnVisible ? "block" : "none"} onClick={()=>updateDate(1)} />
        </RowFlex>
        <RowFlex w="100%" m="0" gap="20px">
          <Select
              showSearch
              value={selectedContact}
              placeholder="customers"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={allContacts}
              style={{ width: '100%' }}
              onChange={(e, v) => setSelectedContact(v)}
          />
          <StyledButton h="32px" fs="14px" onClick={()=>setSelectedContact(null)}>Reset</StyledButton>
        </RowFlex>
        <Table
          style={{ width: '100%' }}
          size="middle"
          pagination={{
            position: ["none", "bottomCenter"],
            pageSize: 15
          }}
          columns={columns}
          dataSource={filteredSaleOrders || []}
          expandable={{
            expandIcon: () => null,
            expandIconColumnIndex: -1,
            expandRowByClick: true,
            expandedRowRender: (record) => <StyledDiv id="1234" w="100%">
              <Descriptions
                title=""
                size="small"
                style={{marginBottom: "10px"}}
                column={{ xs: 1 }}
                items={[
                  {
                    key: '1',
                    label: 'Agent',
                    children: record.agentName,
                  },{
                    key: '2',
                    label: 'Containers',
                    children: record.containers?.map((e)=><>{e.type} : {e.quantity}<br/></>),
                  }
                ]}
              />
              <ItemTable itemData={record.items} />
            </StyledDiv>
          }}
          rowKey={(_, i) => i}
        />
      </ColFlex>
      <AddSalesOrder
        open={addSaleModalOpen}
        onClose={() => setAddSaleModalOpen(false)}
        allContacts={allContacts}
        getAllContacts={getAllContacts}
        allItems={allItems}
        getAllItems={getAllItems}
        allAgents={allAgents}
        fetchOrders={fetchOrders}
      />
      <EditSalesOrder
        open={editSaleModalOpen}
        onClose={() => setEditSaleModalOpen(false)}
        saleOrder={selectedSaleOrder}
        allContacts={allContacts}
        allItems={allItems}
        allAgents={allAgents}
        itemNameToIdMap={itemNameToIdMap}
      />
    </ColFlex>
  );
};

export default SaleOrder;
