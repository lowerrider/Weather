import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardUI = ({ temp, date, icon, pres, humidity, clouds, wind, classes, isLoading }) => {

    if(isLoading === true){
        return <p>Loading...</p>;
    }
    return (
        <Card className={classes.card}>
            <CardContent className={classes.contentCard}>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {date}
                </Typography>
                <img src={icon} alt='' />
                <Typography variant="h5" component="h2">
                    {temp}&deg;
                </Typography>
                <Typography variant="body2" component="p">
                    Давление: {pres} мм.рт.ст.
                </Typography>
                <Typography variant="body2" component="p">
                    Влажность: {humidity}%
                </Typography>
                <Typography variant="body2" component="p">
                    Облачность: {clouds}%
                </Typography>
                <Typography variant="body2" component="p">
                    Ветер: {wind} м/с
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardUI
