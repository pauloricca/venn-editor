import VTextBox from "../views/VTextBox";
import VImageWithPadding from "../views/VImageWithPadding";
import VImageCarousel from "../views/VImageCarousel";

function Viewer(props) {
    
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
        <div className={'Viewer ' + props.mode}>{views}</div>
    );
  }
  
  export default Viewer;