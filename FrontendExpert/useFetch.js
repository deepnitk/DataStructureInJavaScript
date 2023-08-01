//Solution 1 -- using useSate, useEffect
function useFetch(url) {
    const [responseJSON, setResponseJSON] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      //To avoid race condition we can use a boolean flag or abort controller
      let shouldCancel = false;
      const callFetch = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(url);
          const newResponseJSON = await response.json();
          if(shouldCancel) return;
          setResponseJSON(newResponseJSON);
          setError(null);
          
        } catch(newError) {
          if(shouldCancel) return;
          setError(newError);
          setResponseJSON(null);
        }
        setIsLoading(false);
      };
      callFetch();
  
      return () => {shouldCancel = true};
    }, [url]);
  
    return {
      responseJSON,
      isLoading,
      error,
    };
  }
  
  // Do not edit the line below.
  exports.useFetch = useFetch;

  

  //Solution 2: using useReducer instead

  //More about useReducer -> https://react.dev/reference/react/useReducer
  
  function reducer(state, {type, responseJSON, error}) {
    switch(type) {
      case 'loading':
        return {...state, isLoading: true};
      case 'success':
        return {responseJSON, isLoading: false, error: null};
      case 'error':
        return {responseJSON: null, isLoading:false, error};
      default:
        throw new Error('Unknown action type');
    }
  }
  
  function useFetch(url) {
    // const [responseJSON, setResponseJSON] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);
  
    const [state, dispatch] = useReducer(reducer, {
      responseJSON: null,
      isLoading: true,
      error: null,
    });
  
    useEffect(() => {
      //To avoid race conditions we can use a boolean flag or abort controller
      let shouldCancel = false;
      
      const callFetch = async () => {
        dispatch({type: 'loading'});
        
        try {
          const response = await fetch(url);
          const newResponseJSON = await response.json();
          if(shouldCancel) return;
          // setResponseJSON(newResponseJSON);
          // setError(null);
          dispatch({type: 'success', responseJSON: newResponseJSON});
          
        } catch(newError) {
          if(shouldCancel) return;
          // setError(newError);
          // setResponseJSON(null);
          dispatch({type: 'error', error: newError});
          
        }
        // setIsLoading(false);
      };
      callFetch();
  
      return () => {shouldCancel = true};
    }, [url]);
  
    return state;
  }
  
  // Do not edit the line below.
  exports.useFetch = useFetch;
  