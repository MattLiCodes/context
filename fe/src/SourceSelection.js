import React, {useState} from 'react';
import Select from 'react-select';
import {allSides} from "./allsides";

function SourceSelection() {
    const [sources, setSources] = useState([])
    const handleChange = (e) => {
        let sources = e.map(({value}) => value)
        setSources(sources);
    }
    return (
        <Select
            closeMenuOnSelect={false}
            isMulti
            options={allSides.map(({name}) => {return {value: name, label: name}})}
            onChange={handleChange}
        />
    );
}

export default SourceSelection;