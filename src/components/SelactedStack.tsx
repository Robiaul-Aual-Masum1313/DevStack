import type { Dispatch, SetStateAction } from "react";
import type { IstackData } from "../type";
import SelectedStackCard from "./SelectedStackCard";

export interface SelactedStackProps {
  selectedStacks: IstackData[];
  setselectedStacks: Dispatch<SetStateAction<IstackData[]>> ;
}

const SelactedStack = ({ selectedStacks ,setselectedStacks }: SelactedStackProps) => {
  return (
    <div className="p-6 border border-[#eee] rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] space-y-2">
      <h3 className="text-[16px] font-bold text-[#0F172A]">Your Stack</h3>
      <p className="text-[12px] font-medium text-[#94A3B8]">{selectedStacks.length === 0  ? 'No technologies selected yet.' : `${selectedStacks.length} technologies selected`}</p>
      {
        selectedStacks.length === 0 ? <p className="text-[12px] font-medium text-[#94A3B8] py-8 w-full text-center border border-[#eee] rounded-2xl
       ">Your stack is empty.</p> : ''
      }
      <div className="">
      {
        selectedStacks.map( selactedStack => {
          return <SelectedStackCard key={selactedStack.id}  selactedStack = {selactedStack} selectedStacks = {selectedStacks} setselectedStacks = {setselectedStacks}/>
        })
      }
      </div>

      <button onClick={() => setselectedStacks([])} className="text-[12px] font-medium text-[#D82C20] border border-[#ED8C85]  bg-transparent w-full py-2 rounded-md">Remove All</button>
    </div>
  );
};

export default SelactedStack;
