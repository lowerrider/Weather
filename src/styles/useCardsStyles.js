import { makeStyles } from "@material-ui/core/styles";

export const useCardsStyles = makeStyles(() => ({
    title: {
        fontSize: 14
    },

    contentCard: {
        "&:last-child": {
            padding: 16
        },
        textAlign: "center",
    },
    card: {
        borderRadius: 0,
    }
}));
