import React from "react";
import CreateFamily from "./CreateFamily";
import EditFamily from "./EditFamily";
import Family from "./Family";
import TableHeader from "./TableHeader";
import { useState } from "react";

function App() {
  // Test Data
  const dummyData = [
    {
      id: 0,
      name: "Familie-1",
      children: ["Kind-1"],
      //grandchildren: ["Urenkel-1"]
    },
    { id: 1, name: "Bobson", children: [] }
  ];
  // Alle Familien
  const [families, setFamilies] = useState([]);
  if (families.length === 0) {
    setFamilies(dummyData);
  }
  // Editing
  const [edit, setEditing] = useState(false);
  function currentEdit(boolean) {
    console.log("currentEditBoolean: " + boolean);
    setEditing(!boolean);
  }
  // Editing Cancel
  function currentCancel(boolean) {
    setEditing(!boolean);
  }
  // Add Family
  function addFamily(newFamily) {
    setFamilies((prevFamilies) => {
      return [...prevFamilies, newFamily];
    });
  }
  // Current Family
  const [currentFamily, setCurrentFamily] = useState({
    name: "",
    children: [""],
  });
  function tempFamily(name, children, id) {
    const newFamily = {
      id: id,
      name: name,
      children: [children],
    };
    setCurrentFamily(newFamily);
  }
  // Edit Family
  function editFamily(family) {
    // Erst Kopie anlegen um Mutability zu vermeiden
    const currentStateCopy = [...families];
    currentStateCopy.splice(family.id, 1, family);
    setFamilies(currentStateCopy);
    setEditing(false);
  }
  // Delete Family
  function deleteFamily(id) {
    setFamilies((prevFamilies) => {
      return prevFamilies.filter((familyItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <h1>Meine Familie</h1>
      {edit ? (
        <EditFamily
          boolean={edit}
          atmFamily={currentFamily}
          onEdit={editFamily}
          onClear={currentCancel}

        />
      ) : (
        <CreateFamily onAdd={addFamily} />
      )}

      <table>
        <TableHeader/>
        <tbody>
        {families.map((familyEntry, index) => (
          <tr key={familyEntry.name + index}>
            <Family
              id={index}
              boolean={edit}
              name={familyEntry.name}
              children={familyEntry.children}
              onEditing={currentEdit}
              onCurrentFamily={tempFamily}
              onDelete={deleteFamily}
            />
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
