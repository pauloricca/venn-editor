import VTextBox from "../views/VTextBox";
import VImageWithPadding from "../views/VImageWithPadding";
import VImageCarousel from "../views/VImageCarousel";
import './Viewer.scss';

function Viewer(props) {

    function addNew(event)
    {
        props.onAddNew(event.target.value);
        event.target.value = "";
    }
    
    const views = props.views.map( (view, vi) => {
        const onChange = (fieldName, value) => props.onChange(vi, fieldName, value);
        switch(view.moduleType) {
            case 'VTextBox': return <VTextBox key={vi} attributes={view.attributes} mode={props.mode} onChange={onChange}/>;
            case 'VImageWithPadding': return <VImageWithPadding key={vi} attributes={view.attributes} mode={props.mode} onChange={onChange}/>;
            case 'VImageCarousel': return <VImageCarousel key={vi} attributes={view.attributes} mode={props.mode} onChange={onChange}/>;
            default: return null;
        };
    });

    return (
        <div className={'Viewer ' + props.mode}>
            {views}
            {props.mode==="edit"?
                <div>
                    <select onChange={addNew}>
                        <option value="" selected>Add New</option>
                        <option value="VTextBox">Text</option>
                        <option value="VImageWithPadding">Image</option>
                        <option value="VImageCarousel">Carousel</option>
                    </select>
                    <button>Save</button>
                </div>
            :null}
        </div>
    );
  }
  
  export default Viewer;