import PropTypes from 'prop-types';
import VTextBox from "../views/VTextBox/VTextBox";
import VImageWithPadding from "../views/VImageWithPadding/VImageWithPadding";
import VImageCarousel from "../views/VImageCarousel/VImageCarousel";
import { ReactSortable } from "react-sortablejs";
import './Viewer.scss';


function Viewer(props) {
    return (
        <div className='Viewer' data-testid="viewer">
            <div className='view-wrapper'>
                <ReactSortable list={props.views} setList={props.onNewData} animation={500}>
                    {props.views.map( view => {
                        const onClick = () => props.onSelect(view.id);
                        const containerClass = 'view-container ' + (props.selectedViewId && props.selectedViewId !== view.id ? 'faded' : '');
                        switch(view.moduleType) {
                            case 'VTextBox': return <div className={containerClass} key={view.id}><VTextBox attributes={view.attributes} onClick={onClick}/></div>;
                            case 'VImageWithPadding': return <div className={containerClass} key={view.id}><VImageWithPadding attributes={view.attributes} onClick={onClick}/></div>;
                            case 'VImageCarousel': return <div className={containerClass} key={view.id}><VImageCarousel attributes={view.attributes}  onClick={onClick}/></div>;
                            default: return null;
                        };
                    })}
                </ReactSortable>
            </div>
        </div>
    );
}

Viewer.propTypes = {
    views: PropTypes.array,
    onNewData: PropTypes.func,
    selectedViewId: PropTypes.string,
    onSelect: PropTypes.func
};

export default Viewer;