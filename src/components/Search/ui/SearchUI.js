import React from 'react';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const SearchUI = ({ searchInput, handleChange, handleSubmit, showError, classes, fullScreen }) => {
    return (
        <form className={fullScreen ? "search-wrapper fullscreen" : "search-wrapper"} onSubmit={handleSubmit}>
            <h2 className="search-title">WHAT IS THE WEATHER?</h2>
            <div>
                <Paper
                    className={classes.root}>
                    <InputBase
                        className={classes.input}
                        inputProps={{ "aria-label": "search" }}
                        value={searchInput}
                        onChange={handleChange}
                        placeholder="City"
                    />
                    <IconButton
                        className={classes.iconButton}
                        aria-label="search"
                        type="submit"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
                {showError && <div className="search-error">Please enter city</div>}
            </div>
        </form>
    )
}

export default SearchUI
