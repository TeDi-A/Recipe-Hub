import { useCategoryContext } from "../contexts/CategoryContext";
import { Grid } from "react-loader-spinner";

const Loading = () => {

  return (
  <>
        <div className="loading">
          <Grid  color="#EDAF76" margin={0}/>
        </div>
  </>
)};

export default Loading
