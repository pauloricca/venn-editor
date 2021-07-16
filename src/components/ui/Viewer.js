import VTextBox from "../views/VTextBox/VTextBox";
import VImageWithPadding from "../views/VImageWithPadding/VImageWithPadding";
import VImageCarousel from "../views/VImageCarousel/VImageCarousel";
import { ReactSortable } from "react-sortablejs";
import './Viewer.scss';


function Viewer(props) {
    return (
        <div className='Viewer'>
            <div className='view-wrapper'>
                <ReactSortable list={props.views} setList={props.onNewData}>
                    {props.views.map( (view, vi) => {
                        const onChange = (fieldName, value) => props.onChange(vi, fieldName, value);
                        const onRemove = () => props.onRemove(vi);
                        switch(view.moduleType) {
                            case 'VTextBox': return <VTextBox key={view.id} attributes={view.attributes} onChange={onChange} onRemove={onRemove}/>;
                            case 'VImageWithPadding': return <VImageWithPadding key={view.id} attributes={view.attributes} onChange={onChange} onRemove={onRemove}/>;
                            case 'VImageCarousel': return <VImageCarousel key={view.id} attributes={view.attributes} onChange={onChange} onRemove={onRemove}/>;
                            default: return null;
                        };
                    })}
                </ReactSortable>
            </div>
        </div>
    );
  }
  
  export default Viewer;