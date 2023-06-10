import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {

    const [form, setForm] = useState('');

    const history = useNavigate();

    function handleChange(event) {
        setForm(event.target.value);
    }

    function submitAndRedirect(event) {
        event.preventDefault();
        addColor(form);
        setForm('');
        history('/colors');
    }

    return (
        <form onSubmit={submitAndRedirect}>
                <label htmlFor="newColor">add new color</label>&nbsp;
                <input autoFocus id="newColor" type="text" name="newColorForm" value={form} onChange={handleChange} />
            <button>submit</button>
        </form>
    )
}

export default NewColorForm;