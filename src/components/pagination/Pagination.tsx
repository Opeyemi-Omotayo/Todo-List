import React, { useContext, useState } from "react";
import AppContext from "../../context/Index";
import Tasks from "../tasks/Tasks";
import ReactPaginate from "react-paginate";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


function PaginatedItems({ itemsPerPage }: any) {
  const { todos } = useContext(AppContext);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentTodos = todos?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(todos?.length / itemsPerPage);

  const handlePageClick = (event: { selected: any }) => {
    const newOffset = (event.selected * itemsPerPage) % todos?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Tasks currentTodos={currentTodos} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <div className="flex items-center cursor-pointer">
            <p>Next</p>
            <AiOutlineArrowRight className="mr-2"/>
          </div>
        }
        onPageChange={(event) => handlePageClick(event)}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <div className="flex items-center cursor-pointer">
            <AiOutlineArrowLeft  className="ml-2"/>
            <p>Previous</p>
          </div>
        }
        renderOnZeroPageCount={null}
        pageClassName="flex justify-center items-center text-sm font-medium"
        containerClassName="flex justify-between items-center px-4 lg:px-8 xl:pl-16 pb-24 pt-7 border-t solid border-spacing-28 gap-1"
        activeClassName=" shadow-sm bg-gray-100 py-2 px-4 flex justify-center items-center rounded-full cursor-pointer"
      />
    </>
  );
}

export default function Pagination() {
  return <PaginatedItems itemsPerPage={10} />;
}