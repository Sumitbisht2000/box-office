import React,{useEffect,useReducer} from 'react'
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import ShowMainData from '../component/show/ShowMainData';
import Details from '../component/show/Details';
import Seasons from '../component/show/Seasons';
import Cast from '../component/show/Cast';
import { ShowPageWrapper } from './Show.styled';

const reducer = (prevState,action) => {
    switch(action.type){
      case 'FETCH_SUCCESS' :{
        return{isLoading:false, error:null, show:action.show};  
      }

      case 'FETCH_FAILED':{
        return{...prevState,isLoading:false,error:action.error};
      }


        default: return prevState
    }


}

const initialState ={
    show:null,
    isLoading:true,
    error:null
}


const Show = () => {
     
    const {id}= useParams()
    const[{show,isLoading,error},dispatch]   =useReducer(reducer,initialState)
    

    // const [show,setShow] = useState(null);
    // const [isLoading,setIsLoading] = useState(true);
    // const [error,setError] = useState(null);
    
    useEffect(() =>{
             let isMounted =true;

         apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>{
            
                if(isMounted){

                      dispatch({type: 'FETCH_SUCCESS',show:results })

                    

                }
            
         })
         .catch(err=>{
            if(isMounted)
            {
                dispatch({type: 'FETCH_FAILED',error: err.message })

            }
         });
         return() =>{
            isMounted =false;
         }

    },[id])
        
        
        if(isLoading)
        {
            return <div>Data is Being Loaded !</div>
        }

        if(error)
        {
            return<div>Error Found : {error}</div>
        }
        return (
    <ShowPageWrapper>

      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

        <div>
          <h2>Details</h2>
          <Details
            status={show.status}
            network={show.network}
            premiered={show.premiered}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={show._embedded.seasons}/>
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={show._embedded.cast}/>
        </div>
      
    </ShowPageWrapper>
  )
}

export default Show;