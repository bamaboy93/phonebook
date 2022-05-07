import { useSelector } from "react-redux";

import DatePicker from "sassy-datepicker";
import styled from "styled-components";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { contactsSelectors } from "../../redux/contacts";

import "./Sidebar.css";

const Total = styled.span`
  font-style: bold;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #7f00ff;
`;

const TotalWrapper = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 50px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 0px 0px 4px 4px;
  }
  @media (min-width: 768px) {
    margin-top: 20px;
    margin-left: 30px;
  }
  @media (min-width: 1280px) {
    display: flex;
    margin-top: 0;
    margin-bottom: 60px;
  }
`;

const SideWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 80px;
    max-height: 400px;
  }
`;

const CardWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default function Sidebar() {
  const total = useSelector(contactsSelectors.getTotalContacts);
  const onChange = (date) => {
    console.log(date.toString());
  };
  return (
    <SideWrapper>
      <TotalWrapper>
        <Card sx={{ height: 60, width: 150 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total Contacts: <Total>{total}</Total>
            </Typography>
          </CardContent>
        </Card>
      </TotalWrapper>

      <CardWrapper>
        <DatePicker onChange={onChange} />
      </CardWrapper>
    </SideWrapper>
  );
}
