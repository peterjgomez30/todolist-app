import React from "react";
import Button from "react-bootstrap/Button";

const Form = ({ input, setInput, handleSubmit, editId }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {" "}
      <input
        className="input"
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="primary"
        type="submit"
        className="button-submit"
        onClick={() => handleSubmit}
      >
        {editId ? "Edit" : "Add Todo"}
      </Button>
    </form>
  );
};

export default Form;
