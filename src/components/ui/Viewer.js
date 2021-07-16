import VTextBox from "../views/VTextBox";
import VImageWithPadding from "../views/VImageWithPadding";
import VImageCarousel from "../views/VImageCarousel";
import { ReactSortable } from "react-sortablejs";
import './Viewer.scss';


function Viewer(props) {


    function addNew(event)
    {
        props.onAddNew(event.target.value);
        event.target.value = "";
    }

    return (
        <div className={'Viewer ' + props.mode}>

            <ReactSortable list={props.views} setList={props.onNewData}>
                {props.views.map( (view, vi) => {
                    const onChange = (fieldName, value) => props.onChange(vi, fieldName, value);
                    const onRemove = () => props.onRemove(vi);
                    switch(view.moduleType) {
                        case 'VTextBox': return <VTextBox key={vi} attributes={view.attributes} mode={props.mode} onChange={onChange} onRemove={onRemove}/>;
                        case 'VImageWithPadding': return <VImageWithPadding key={vi} attributes={view.attributes} mode={props.mode} onChange={onChange} onRemove={onRemove}/>;
                        case 'VImageCarousel': return <VImageCarousel key={vi} attributes={view.attributes} mode={props.mode} onChange={onChange} onRemove={onRemove}/>;
                        default: return null;
                    };
                })}
            </ReactSortable>

            {props.mode==="edit"?
                <div className="ui-columns">
                    <select onChange={addNew} value="" className="add-new-module">
                        <option value="">Add New...</option>
                        <option value="VTextBox">Text</option>
                        <option value="VImageWithPadding">Image</option>
                        <option value="VImageCarousel">Carousel</option>
                    </select>
                    <button onClick={props.onSave}>Save</button>
                </div>
            :null}

        </div>
    );
  }
  
  export default Viewer;