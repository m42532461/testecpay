import React from "react";

const TestPage = () => {
  return (
    <div>
      <form action={`http://localhost:5000/test`} method="post">
        <input
          type="submit"
          value="Submit"
          className="px-32 bg-white text-bg py-4"
        />
      </form>
    </div>
  );
};

export default TestPage;
