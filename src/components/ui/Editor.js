import { ReactSortable } from "react-sortablejs";
import './Editor.scss';
import ModuleEditor from "./ModuleEditor";


function Editor(props) {


    function addNew(event)
    {
        props.onAddNew(event.target.value);
        event.target.value = "";
    }

    return (
        <div className='Editor'>

            <ReactSortable list={props.views} setList={props.onNewData} animation={500} filter={"input, .prevent-drag"} preventOnFilter={false}>
                {props.views.map( (view, vi) => {
                    const schema = props.schemas[view.moduleType];
                    return <ModuleEditor 
                        key={view.id}
                        title={schema.friendlyName} 
                        values={view.attributes} 
                        fields={schema.fields} 
                        onChange={ (fieldName, value) => props.onChange(vi, fieldName, value) } 
                        onRemove={ () => props.onRemove(vi) }
                        toggleOpen={() => { props.onSelect( view.id !== props.selectedViewId ? view.id : '') }}
                        isOpen = {props.selectedViewId === view.id}
                    />;
                })}
            </ReactSortable>

            <div className="ui-columns">
                <select onChange={addNew} value="" className="add-new-module">
                    <option value="">Add New...</option>
                    <option value="VTextBox">Text</option>
                    <option value="VImageWithPadding">Image</option>
                    <option value="VImageCarousel">Carousel</option>
                </select>
                <button className="embossy" onClick={props.onSave}>Save</button>
            </div>

        </div>
    );
  }
  
  export default Editor;