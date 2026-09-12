import { use, useState } from "react";
import type { IstackData } from "../type";
import StacksCard from "./StacksCard";
import SelactedStack from "./SelactedStack";

interface techProp {
  feachedPromise: Promise<IstackData[]>;
}

export default function Technology({ feachedPromise }: techProp) {
  const stacksData = use(feachedPromise);
  const [selectedStacks, setselectedStacks] = useState<IstackData[]>([])
    
  return (
    <div className="container mx-auto space-y-3.5">
      <h3 className="font-extrabold text-4xl text-[#0F172A]">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-transparent bg-clip-text">Technologies</span></h3>
      <p className="text-[#64748B] text-[16px] font-medium">Pick one technology per category to build your ideal stack.</p>
      <div className="grid grid-cols-12 pt-8 gap-8">
        <div className="grid grid-cols-3 gap-5 col-span-9">
          {stacksData.map((stackData: IstackData) => {
            return <StacksCard key={stackData.id} stackData={stackData} selectedStacks= {selectedStacks}  setselectedStacks = {setselectedStacks}/>;
          })}
        </div>
        <div className="col-span-3">
          <SelactedStack selectedStacks = {selectedStacks} setselectedStacks = {setselectedStacks} />
        </div>
      </div>
    </div>
  );
}
