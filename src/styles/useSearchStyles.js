import { makeStyles } from "@material-ui/core/styles";

export const useSearchStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            width: 270
        },
        display: "flex",
        alignItems: "center",
        width: 500
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 10,
        "&:hover": {
            borderRadius: 0
        },
        borderRadius: 0,
    }
}));
