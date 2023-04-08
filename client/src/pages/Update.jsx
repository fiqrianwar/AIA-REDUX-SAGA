import { useEffect, useState }         from 'react';

import InputItem            from '../components/InputItem'
import ButtonSubmit         from '../components/ButtonSubmit';
import API                  from '../api/API';

import { 

          Box, 
          Stack, 
          FormControl 
        
        }                   from '@mui/material'

import { useNavigate, useParams }      from 'react-router-dom';


import { useDispatch } from 'react-redux';
import { Identity } from '@mui/base';


const Update = () => {

  
  let { id } = useParams()

  const [ name, setName ] = useState('')

  const dispatch = useDispatch()


  useEffect (() => {

    dispatch({
      type : 'GET_SPECIFIC_CATEGORIES',
      payload : id
    })

  },[])

  const history       = useNavigate()

  
  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch({
      type    : 'UPDATE_CATEGORIES',
      payload :  {
          id    : id,
          name  : name
      }
    })

    history('/home')

}



  return (
    <>
      <Stack direction = 'row' justifyContent = 'center'>
        <Box width = '30%'>
          
            <form onSubmit = {handleSubmit} >
              <FormControl fullWidth>
                <h3>Update Category</h3>
                    <InputItem
                      label         = 'Category'
                      onChange      =  {(e) => setName(e.target.value)}
                      
                    />
                <Box marginTop = '5%'>
                  <ButtonSubmit 
                    label = 'Submit'
                  />
                </Box>
              </FormControl>
              </form>
        </Box>
      </Stack>

    </>
  )
}

export default Update