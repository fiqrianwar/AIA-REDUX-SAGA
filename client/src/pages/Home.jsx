        import { useState , useEffect }             from 'react';
        import { Link , useNavigate }               from 'react-router-dom';

        import API                                  from '../api/API';
        import ModalAdd                             from '../components/ModalAdd';

        // ################## Material Icon ##################
        import DeleteIcon                           from '@mui/icons-material/Delete';
        import NoteAltIcon                          from '@mui/icons-material/NoteAlt';
        import AddIcon                              from '@mui/icons-material/Add';

        // ################## Material Component ##################
        import  { 
                    Table,
                    Stack,
                    Button, 
                    Box,
                    Paper,
                    TableBody,
                    TableCell,
                    TableHead,
                    TableRow,
                    TableContainer,
                }                            from '@mui/material';
        
        // ################## Redux #####################
        import  {
                    useDispatch, 
                    useSelector
                }                            from 'react-redux'
        

        const Home = () => {

            // =========== Modal State ============
            const [ open, setOpen ]     = useState(false);
            // ===========  Get Data From Reducer =============
            const category              = useSelector((state) => state.category)
            // =========== Update Category  =============
            // console.log(category);
            const dispatch              = useDispatch()
            
            const history               = useNavigate()
            
            const token                 = localStorage.getItem('token');


            
            useEffect( () => {

                if (token) {
                    dispatch({
                        type : 'FETCHING_DATA'
                    })
                    
                }else {
                    history('/login')
                }

                

                
            }, [] )
            
            

                
                

                const handleOpen  = () => setOpen(true)
                const handleClose = () => setOpen(false);
                
    
                
                // ============= Function Delete ===========
                const handleDelete = async (id,name) => {
                    
                    const confirmDelete = window.confirm(`Delete ${name}`)

                    if (confirmDelete) {
                    
                        dispatch({
                            type    : 'DELETE_CATEGORIES',
                            payload : id
                        })
                    
                        alert(`success delete ${name}`)

                    } else { 
                        alert('Cancel Delete')
                    }

                }

            return (

                <>
                
                <ModalAdd
                    open    = {open}
                    onClose = {handleClose}
                
                />

                        
                <Stack direction = 'row' justifyContent = 'end'>
                    <Box>
                        <Button 
                            onClick     = {handleOpen} 
                            variant     = "outlined" 
                            color       = 'success' 
                            startIcon   = {<AddIcon/>}
                        >
                            Add
                        </Button>
                    </Box>
                </Stack>
                
                

                <Stack direction = 'row' justifyContent = 'center' marginTop = '5%'>
                    <TableContainer component={Paper} sx = {{ 
                        width : '50%'
                    }}>
                        <Table sx={{ minWidth: 50 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell  sx = {{ textAlign : 'center' }}>Category</TableCell>
                                    <TableCell  sx = {{ textAlign : 'center' }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                

                                {
                                    category.data.map((item) => 
                                    
                                            <TableRow
                                                sx = {{ 
                                                    '&:last-child td, &:last-child th': { border: 0 } 
                                                }}
                                                key = {item.id}
                                            >

                                                <TableCell>
                                                    {item.name}
                                                </TableCell>

                                                <TableCell sx = {{
                                                    display         : 'flex',
                                                    justifyContent  : 'space-around'
                                                }}> 

                                                
                                                
                                                <Link to = {`/update/${item.id}`}>
                                                    <Button 
                                                        variant = 'contained' 
                                                        endIcon = {<NoteAltIcon/>} 
                                                    >
                                                        Update
                                                    </Button>
                                                </Link>


                                                    <Button 
                                                        variant = 'contained' 
                                                        endIcon = {<DeleteIcon/>} 
                                                        color   = 'error' 
                                                        onClick = { () => handleDelete(item.id,item.name) }
                                                    > 
                                                        
                                                            Delete
                                                        </Button> 
                                            
                                                </TableCell>
                                            </TableRow>
                                    
                                    
                                    )
                                }
                                


                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
                </>
                
                
            )
        }

        export default Home