import React, { useState } from "react";

function CreateFamily(props) {
    const [family, setFamily] = useState({
        name: "",
        children: []
    });

    // const [children, setChildren] = useState({
    //   name: "",
    //   grandChildren: []
    // });

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
      props.onAdd(family);
      setFamily({
        name: "",
        children: []
      });
      event.preventDefault();
    }

    // Clear-Button
    function handleClear(event) {
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

            <button onClick={submitFamily}>Add</button>
            <button onClick={handleClear}>Clear</button>
          </form>
        </div>
    );
}

export default CreateFamily;