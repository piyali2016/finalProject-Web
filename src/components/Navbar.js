import React,{useRef} from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  styled,alpha,InputBase 
 } from "@mui/material"
 import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    const inputRef = useRef();
      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 100,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(30),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      const handleSearch = (e) => {
        e.preventDefault()
        let q=inputRef.current.value;
        console.log(inputRef.current.value);
        navigate('search/'+q);
    };
 

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" >
        <Link to="/" className='navLink' >E-CUBE</Link>
        </Typography>
          <div >
            <Link to="/latest-movies" className='navLink' >
            Latest Movies
            </Link>
            <Link to="/upcoming-movies" className='navLink' >
            Upcoming Movies
            </Link>
            <Link to="/nearby-events" className='navLink' >
            Near by Events
            </Link>
            
            
          </div>
          <form onSubmit={handleSearch}>
          <Search  >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              inputRef={inputRef}
              
            />
          </Search>
          </form>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;