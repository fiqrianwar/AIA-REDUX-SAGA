    import * as React           from 'react';
    
    import  {       
                    Box,
                    Modal,
                    FormControl

            }                   from '@mui/material';
        
            
    import InputItem            from './InputItem';
    import ButtonSubmit         from './ButtonSubmit';
    

    import { useDispatch } from 'react-redux';

    const style = {
        position    : 'absolute',
        top         : '50%',
        left        : '50%',
        transform   : 'translate(-50%, -50%)',
        width       : 400,
        bgcolor     : 'background.paper',
        border      : '2px solid #000',
        boxShadow   : 24,
        p           : 4,
    };

    
    
    export default function ModalAdd({open,onClose}) {

        const [name,setName] = React.useState('')

        const dispatch      = useDispatch()


        const handleSubmit = async (e) => {
            e.preventDefault()

            dispatch({
                type    : 'ADD_FETCHING_DATA',
                payload : name
            })

            // setName(' ')

        }

            

    
    return (
        <div>
            <Modal
                open                = {open}
                onClose             = {onClose}
                aria-labelledby     = "modal-modal-title"
                aria-describedby    = "modal-modal-description"
            >
                <Box sx={style}>


                    <form onSubmit = {handleSubmit} >
                        <FormControl fullWidth>
                            <h3>Add Category</h3>
                                <InputItem
                                    label       = 'Category'
                                    onChange    =  {(e) => setName(e.target.value)}
                                />
                                <Box marginTop = '5%'>
                                    <ButtonSubmit 
                                        label = 'Submit'
                                        
                                    />
                                        
                                </Box>
                        </FormControl>
                        
                    </form>
                </Box>
                
            </Modal>
        </div>
    );
    }