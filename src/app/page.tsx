
  import React from "react";

interface Todo {
  userId: number;
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Home = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const colors = ["bg-gray-100", "bg-gray-200", "bg-gray-300"];
  const textColors = ["text-[#9F9F9F]", "text-gray-900"];
  const parsedResponse: Todo[] = await response.json();
  console.log("todos >>>", parsedResponse);
 
  return (
    <div className="mx-[100px]">
      <h1 className="font-bold text-4xl text-center mt-6 ">Todo</h1>
      <div className="grid lg:grid-cols-3 mt-20 gap-4 sm:grid-cols-3">
        {parsedResponse.map((todo, index) => (
          <div
            key={index}
            className={`border p-4 rounded shadow ${colors[index % colors.length]} flex flex-col gap-3 `}
          >
       
        <p className={`font-semibold `}>
              {todo.id}
            </p>
            <p className={`${textColors[index % textColors.length]}`}>
              {todo.name}
            </p>
            <p className={`${textColors[index % textColors.length]}`}>
              {todo.type}
            </p>

            <p className={`${textColors[index % textColors.length]} `}>
            {`${todo.available}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 



