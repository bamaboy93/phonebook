import { useSelector } from "react-redux";
import styled from "styled-components";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Quotes from "../Quotes/Quotes";
import { contactsSelectors } from "../../redux/contacts";

const Total = styled.span`
  font-style: bold;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #7f00ff;
`;

const TotalWrapper = styled.div`
  margin-top: 180px;
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
    max-height: 300px;
  }
`;

const CardWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default function Sidebar() {
  const total = useSelector(contactsSelectors.getTotalContacts);
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
        <Quotes />
      </CardWrapper>
    </SideWrapper>
  );
}
