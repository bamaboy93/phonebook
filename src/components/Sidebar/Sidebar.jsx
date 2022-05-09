import { useSelector } from "react-redux";

import DatePicker from "sassy-datepicker";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { contactsSelectors } from "../../redux/contacts";

import s from "./Sidebar.module.scss";

export default function Sidebar() {
  const total = useSelector(contactsSelectors.getTotalContacts);
  const onChange = (date) => {
    console.log(date.toString());
  };
  return (
    <div className={s.sideWrapper}>
      <div className={s.totalWrapper}>
        <Card sx={{ height: 60, width: 150 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total Contacts: <span className={s.total}>{total}</span>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={s.dateWrapper}>
        <DatePicker className={s.sdp} onChange={onChange} />
      </div>
    </div>
  );
}
