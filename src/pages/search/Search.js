import './Search.css';
import SearchItem from '../../components/search_item/SearchItem';
import { Button, Select, TextField, FormControl, InputLabel, MenuItem, Box, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import tutorData from '../../data/tutor_data.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {

    const [items] = useState(tutorData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    //change page
    const paginate = (e, value) => {
        setCurrentPage(value);
    };

    //get current page items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='search'>
            <div className='searchBar'>
                <h1> Find a student or tutor </h1>
                <div className='searchBox'>
                    <TextField className='subject' id="outlined-basic" label="Enter subject" variant="outlined" />
                    <Box sx={{ minWidth: 180, maxWidth: 180 }}>
                        <FormControl fullWidth>
                            <InputLabel>Tutor</InputLabel>
                            <Select label="Tutor">
                                <MenuItem value={'Tutor'}>Tutor</MenuItem>
                                <MenuItem value={'Student'}>Student</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className='level' sx={{ minWidth: 180, maxWidth: 180 }}>
                        <FormControl fullWidth>
                            <InputLabel>Level</InputLabel>
                            <Select label="Level">
                                <MenuItem value={'Kindergarten'}>Kindergarten</MenuItem>
                                <MenuItem value={'Primary School'}>Primary School</MenuItem>
                                <MenuItem value={'Middle School'}>Middle School</MenuItem>
                                <MenuItem value={'High School'}>High School</MenuItem>
                                <MenuItem value={'College'}>College</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button className='searchButton' variant="contained" color="success" startIcon={<SearchIcon />}>
                        Search
                    </Button>
                </div>
            </div>
            
            <Pagination count={Math.ceil(tutorData.length/itemsPerPage)} color='primary' page={currentPage} onChange={paginate}/>

            <div className='searchList'>
                {
                    currentItems.map((searchItems) => {
                        return  <Link to={`/contact-profile/${searchItems.username}`}>
                                    <SearchItem key={searchItems.username} image={searchItems.image} name={searchItems.name}
                                        subjects={
                                            searchItems.subject.map((s) => {
                                                const sList = [];
                                                return [s.subject, ...sList];
                                            })
                                        } 
                                        experience={searchItems.experience}
                                        location={searchItems.location} type={searchItems.type} />
                                </Link>
                    })
                }
            </div>

            <Pagination count={Math.ceil(tutorData.length/itemsPerPage)} color='primary' page={currentPage} onChange={paginate}/>
        </div>
    )
}

export default Search
