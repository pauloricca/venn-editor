import VTextBox from "../views/VTextBox/VTextBox";
import VImageWithPadding from "../views/VImageWithPadding/VImageWithPadding";
import VImageCarousel from "../views/VImageCarousel/VImageCarousel";
import { ReactSortable } from "react-sortablejs";
import './Viewer.scss';


function Viewer({views, onNewData, onChange, onRemove}) {
    return (
        <div className='Viewer'>
            <div className='view-wrapper'>
                <ReactSortable list={views} setList={onNewData}>
                    {views.map( (view, vi) => {
                        const onChangeCallback = (fieldName, value) => onChange(vi, fieldName, value);
                        const onRemoveCallback = () => onRemove(vi);
                        switch(view.moduleType) {
                            case 'VTextBox': return <VTextBox key={view.id} attributes={view.attributes} onChange={onChangeCallback} onRemove={onRemoveCallback}/>;
                            case 'VImageWithPadding': return <VImageWithPadding key={view.id} attributes={view.attributes} onChange={onChangeCallback} onRemove={onRemoveCallback}/>;
                            case 'VImageCarousel': return <VImageCarousel key={view.id} attributes={view.attributes} onChange={onChangeCallback} onRemove={onRemoveCallback}/>;
                            default: return null;
                        };
                    })}
                </ReactSortable>
            </div>
        </div>
    );
  }
  
  export default Viewer;