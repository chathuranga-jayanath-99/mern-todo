import { Box, Typography, styled } from "@mui/material";

const todoBoxStyles = {
    padding: "16px",
    border: "1px solid #1976d2",
    borderRadius: "4px",
    backgroundColor: "#f3f3f3",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
};

const titleStyles = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
};

const detailStyles = {
    fontSize: "1rem",
    marginBottom: "0.5rem",
};

const subTextStyles = {
    fontSize: "0.8rem",
    color: "#888",
};

const TodoDetail = ({ todo }) => {
    return (
        <Box style={todoBoxStyles}>
            <Typography style={titleStyles}>{todo.title}</Typography>
            <Typography style={detailStyles}>
                <span style={subTextStyles}>Due Date:</span> {todo.dueDate}
            </Typography>
            <Typography style={detailStyles}>
                <span style={subTextStyles}>Hours Needed:</span>{" "}
                {todo.hoursNeeded}
            </Typography>
        </Box>
    );
};

export default TodoDetail;
