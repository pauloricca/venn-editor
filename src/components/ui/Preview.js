import VTextBox from "../views/VTextBox";

function Preview(props) {
    
    const views = props.views.map( view => {
        switch(view.moduleType) {
            case 'VTextBox': return <VTextBox attributes={view.attributes}/>;
            default: return null;
        };
    });

    return (
        <div className='Preview'>{views}</div>
    );
  }
  
  export default Preview;