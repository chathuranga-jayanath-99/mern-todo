import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

import TodoDetail from "../components/TodoDetail";

const Home = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get(
                "http://localhost:5000/api/todos/"
            );
            const todos = response.data;
            if (response.status === 200) {
                setTodos(todos);
            }
        };
        fetchTodos();
    }, []);

    return (
        <>
            <CssBaseline />
            <Box sx={{ height: "100vh" }}>
                <Typography variant="h3">Home</Typography>
                <Box>
                    {todos &&
                        todos.map((todo) => (
                            <TodoDetail key={todo._id} todo={todo} />
                        ))}
                </Box>
            </Box>
        </>
    );
};

export default Home;
