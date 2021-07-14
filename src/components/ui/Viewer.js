import VTextBox from "../views/VTextBox";
import VImageWithPadding from "../views/VImageWithPadding";

function Viewer(props) {
    
    const views = props.views.map( (view, vi) => {
        switch(view.moduleType) {
            case 'VTextBox': return <VTextBox key={vi} attributes={view.attributes} mode={props.mode} onChange={(fieldName, value) => props.onChange(vi, fieldName, value)}/>;
            case 'VImageWithPadding': return <VImageWithPadding key={vi} attributes={view.attributes} mode={props.mode} onChange={(fieldName, value) => props.onChange(vi, fieldName, value)}/>;
            default: return null;
        };
    });

    return (
        <div className={'Viewer ' + props.mode}>{views}</div>
    );
  }
  
  export default Viewer;