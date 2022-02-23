import { useEffect, useState } from "react";

import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import api from "../../api/quotes-api";

const useStyles = makeStyles({
  root: {
    height: 180,
    width: 250,

    boxShadow: " 0px 5px 15px rgba(168, 71, 237, 1)",
  },
});

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    api
      .fetchQuote()
      .then((res) => {
        setQuote(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote of the Day
        </Typography>

        <Typography variant="body2">{quote}</Typography>
      </CardContent>
    </Card>
  );
};

export default Quotes;
