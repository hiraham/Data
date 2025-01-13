"use client";
import React, { useEffect, useState } from "react";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const page = () => {
  const [data, setData] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const parsedResponse: ITodo[] = await response.json();
      console.log("todos >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((todo, index) => (
        <div key={index} className="flex flex-col-text-center gap-2 border border-black bg-red-100  ">
          <p>userId: {todo.userId}</p>
          <p>id: {todo.id}</p>
          <p>title: {todo.title}</p>
          <p>completed: {`${todo.completed}`}</p>
        </div>
      ))}
    </div>
  );
};

export default page;