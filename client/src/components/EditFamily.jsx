import React, { useState, useEffect } from "react";

function EditFamily(props) {

    const [family, setFamily] = useState(props.atmFamily);

    // const [children, setChildren] = useState({
    //   name: "",
    //   grandChildren: []
    // });

    useEffect(
        () => {
            // CurrentFamily reinladen
            setFamily(props.atmFamily);
        },
        [ props ]
      );

    function handleChange(event) {
      const { name, value } = event.target;
  
      setFamily((prevFamily) => {
        console.log(prevFamily)
        return {
          ...prevFamily,
          [name]: value
        };
      });
    }

    // Default nach Abschicken
    function submitFamily(event) {
      props.onEdit(family);
      setFamily({
        name: "",
        children: []
      });
      event.preventDefault();
    }

    // Clear-Button
    function handleClear(event) {
      props.onClear(props.boolean);
      setFamily({
        name: "",
        children: []
      });
      event.preventDefault();
    }

    return (
        <div>
          <form className="create-family">
            <input
                name="name"
                onChange={handleChange}
                value={family.name}
                placeholder="Family Name"
            />
            <input
                name="children"
                onChange={handleChange}
                value={family.children}
                placeholder="Children"
            />
            {/* <input
                name="grandChildren"
                onChange={handleChange}
                value={family.grandChildren}
                placeholder="Grand Children"
            /> */}

            <button onClick={submitFamily}>Edit</button>
            <button onClick={handleClear}>Cancel</button>
          </form>
        </div>
    );
}

export default EditFamily;