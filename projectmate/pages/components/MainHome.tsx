import styles from '../../styles/Home.module.css'
import { useDispatch , useSelector} from 'react-redux'
import * as actions from "../../redux-store/actions/actionCreators";
import { STATE } from "../../redux-store/reducers/authReducers"

const MainHome = () => {  
  const dispatch = useDispatch();
  const state = useSelector((state:STATE)=>state);  
  
  return (
    <>
      <div className={styles.body}>
        <h3>{`Email : "${state.user.email} "   is Signed IN`}</h3>
      </div>
      
    </>
  )
}

export default MainHome
