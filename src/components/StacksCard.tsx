import { MdStarRate } from "react-icons/md";
import type { IstackData } from "../type";

export interface StacksCardProps {
  stackData: IstackData;
}

export default function StacksCard({ stackData }: StacksCardProps) {
  return (
    <>
      <div className="relative p-6 border border-[#eee] rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] space-y-4">
        <p className="absolute right-4 top-4 text-[#0EA5E9] text-[11.5px] font-semibold px-3 py-1 border border-[#eee] rounded-full">{stackData.badge}</p>
        <img className="w-10 pt-2" src={stackData.icon} alt="" />
        <h2 className="text-[#0F172A] font-bold text-[18px]">{stackData.name}</h2>
        <p className="text-[#64748B] font-medium text-[12px]">{stackData.description}</p>
        <div className="flex justify-between items-center pt-4">
          <p className="text-[11px] font-medium text-[#475569] bg-[#F1F5F9] py-1 px-2 rounded-md">{stackData.category}</p>
          <p className="text-[11px] font-medium text-[#475569]">{stackData.difficulty}</p>
          <p className=" flex gap-1 items-center"><MdStarRate className="text-[#FBBF24]" />
{stackData.rating}</p>
        </div>
        <button className="text-[12px] font-medium text-white  bg-[#0A0F1D] w-full py-2 rounded-md">Add to Stack</button>
      </div>
    </>
  );
}
