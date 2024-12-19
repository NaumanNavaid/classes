
  import React from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const colors = ["bg-gray-100", "bg-gray-200", "bg-gray-300"];
  const textColors = ["text-[#9F9F9F]", "text-gray-900"];
  const parsedResponse: Todo[] = await response.json();
  console.log("todos >>>", parsedResponse);
 
  return (
    <div className="mx-[100px]">
      <h1 className="font-bold text-4xl text-center mt-6 ">Todo</h1>
      <div className="grid lg:grid-cols-5 mt-20 gap-4 sm:grid-cols-3">
        {parsedResponse.map((todo, index) => (
          <div
            key={index}
            className={`border p-4 rounded shadow ${colors[index % colors.length]} flex flex-col gap-3 `}
          >
       
        <p className={`font-semibold `}>
              {todo.id}
            </p>
            <p className={`${textColors[index % textColors.length]}`}>
              {todo.title}
            </p>
            <p className={`${textColors[index % textColors.length]} `}>
            {`${todo.completed}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 



