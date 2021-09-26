import React from 'react'
import { PropTypes } from 'prop-types'

const InputGroup=({name,type,label,onChange ,placeholder,className,defaultValue,refpointer,error})=>{
        return (
            <div className='form-group'>
            <label htmlFor={name} > {label} </label>
            <input type={type} className={className} onChange={onChange} placeholder={placeholder} defaultValue={defaultValue} ref={refpointer}/>
            <div className="invalid-feedback">{error}</div>
            </div>

        );


};


InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    defaultValue:PropTypes.string,
    onChange:PropTypes.func,
    error:PropTypes.string,
    

}
InputGroup.defaultProps={
    name:'',
    type:'text',
    error:'',
    label:'',
    onChange:console.log('done') ,
    placeholder:'',
    className:'',
    defaultValue:'',
}
export default InputGroup;