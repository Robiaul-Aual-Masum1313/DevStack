
import { RxCross2 } from "react-icons/rx";
import type { IstackData } from "../type";
import type { Dispatch, SetStateAction } from "react";

export interface StacksCardProps {
  selactedStack: IstackData;
  setselectedStacks : Dispatch<SetStateAction<IstackData[]>>
}

export default function SelectedStackCard({selactedStack , setselectedStacks}: StacksCardProps){
  return (
    <div className="flex justify-between items-center py-3 px-3.5 mb-4 border border-[#eee] rounded-md">
      <div  className="flex justify-between items-center gap-2.5">
        <img className="w-9" src={selactedStack.icon} alt="" />
        <div>
          <h2 className="text-[10px] font-bold text-[#0F172A]">{selactedStack.name}</h2>
          <p className="text-[6px] font-bold text-[#94A3B8]">{selactedStack.category}</p>
        </div>
      </div>
      <RxCross2 />
    </div>
  )
}
