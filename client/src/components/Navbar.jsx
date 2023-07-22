import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <span style={{ pointerEvents: "none" }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </span>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link
                            to="/"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            My Todo
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
