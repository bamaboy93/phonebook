import { makeStyles } from "@mui/styles";
import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    "& > *": {
      // marginTop: theme.spacing(2),
      minWidth: "20px",
    },
  },
  ul: {
    display: "flex",
    justifyContent: "center",
  },
}));

const TransactionPagination = ({ totalPages, page }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const pageSwitch = (e, value) => {
    dispatch(actions.changePage(value));
  };

  return (
    <div className={classes.root}>
      <Pagination
        className={classes.ul}
        size="small"
        page={Number(page)}
        variant="outlined"
        color="secondary"
        count={Number(totalPages)}
        onChange={pageSwitch}
      />
    </div>
  );
};

TransactionPagination.propTypes = {
  totalPages: PropTypes.node,
};

export default TransactionPagination;
