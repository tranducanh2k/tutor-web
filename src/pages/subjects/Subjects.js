import {useState} from 'react';
import './Subjects.css';
import { TextField, Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';

const Subjects = () => {
    const subjectsList = [{id: 1, subject: 'Maths', level: 'High School', price: 100000},
                        {id: 2, subject: 'Music', level: 'High School', price: 100000},
                        {id: 3, subject: 'Maths', level: 'High School', price: 100000},];

    const [subjects, setSubjects] = useState(subjectsList);
    const [lastestId, setLastestId] = useState(subjectsList.length);

    const deleteSubject = (id) => {
        setSubjects(subjects.filter((s) => s.id !== id));
    }

    const handleAddSubject = () => {
        const id = lastestId+1;
        setLastestId(id);
        const newSubject = {id, subjects: null, level: null, price: 0};
        setSubjects([...subjects, newSubject]);
    }

    const handleDropdownSubject = (e, id) => {
        let updatedList = subjects.map((s) => {
            if(s.id === id){
                return {...s, subject: e.target.value};
            }
            return s;
        });
        setSubjects(updatedList);
    }

    const handleDropdownLevel = (e, id) => {
        let updatedList = subjects.map((s) => {
            if(s.id === id){
                return {...s, level: e.target.value};
            }
            return s;
        });
        setSubjects(updatedList);
    }

    const handlePrice = (e, id) => {
        let updatedList = subjects.map((s) => {
            if(s.id === id){
                return {...s, price: parseInt(e.target.value.slice(0, e.target.value.length - 4))};
            }
            return s;
        });
        setSubjects(updatedList);
    }

    return <div className='subjects'>
        <div className='title'>
            My subjects
        </div>
        <div className='mainDiv'>
            {   
                subjects.length > 0 ?
                (subjects.map((s) => {
                    return <div className='subjectsItem'>
                        <Box sx={{ width:'250px' }}>
                            <FormControl fullWidth>
                                <InputLabel>Subjects</InputLabel>
                                <Select
                                    label="Subjects"
                                    defaultValue={s.subject}
                                    onChange={(e) => {
                                        handleDropdownSubject(e, s.id);
                                    }}
                                >
                                <MenuItem value={'Maths'}>Maths</MenuItem>
                                <MenuItem value={'Literature'}>Literature</MenuItem>
                                <MenuItem value={'English'}>English</MenuItem>
                                <MenuItem value={'Physics'}>Physics</MenuItem>
                                <MenuItem value={'Chemistry'}>Chemistry</MenuItem>
                                <MenuItem value={'Biology'}>Biology</MenuItem>
                                <MenuItem value={'History'}>History</MenuItem>
                                <MenuItem value={'Music'}>Music</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ width:'200px' }}>
                            <FormControl fullWidth>
                                <InputLabel>Level</InputLabel>
                                <Select
                                    label="Level"
                                    defaultValue={s.level}
                                    onChange={(e) => handleDropdownLevel(e, s.id)}
                                >
                                <MenuItem value={'Kindergarten'}>Kindergarten</MenuItem>
                                <MenuItem value={'Primary School'}>Primary School</MenuItem>
                                <MenuItem value={'Middle School'}>Middle School</MenuItem>
                                <MenuItem value={'High School'}>High School</MenuItem>
                                <MenuItem value={'College'}>College</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <TextField id='price' label='price' variant='filled' defaultValue={s.price + ' VND'} 
                                    onChange={(e) => {handlePrice(e, s.id); console.log(subjects)}}/>
                        <Button variant='contained' color='error' onClick={(e) => deleteSubject(s.id)}>
                            <DeleteOutlineIcon />
                        </Button>
                        
                    </div>
                })) : ('Please add your subjects')
            }
            <div className='buttonRow'>
                <Button variant='contained' onClick={handleAddSubject}>
                    <AddIcon />
                </Button>
                <Button variant='contained' color='success'> Save </Button>
            </div>
        </div>
    </div>;
};

export default Subjects;
