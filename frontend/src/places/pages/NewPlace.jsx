import "./NewPlace.css"
import Input from "../../shared/components/FormElements/Input";

const NewPlace = () => {
    return ( 
        <form class="place-form">
            <Input element="input" type="text" label="Название" />
        </form>
     );
}
 
export default NewPlace;