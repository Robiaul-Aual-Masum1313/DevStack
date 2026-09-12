export interface SelactedStackProps {
  prop: string;
}

const SelactedStack = ({ prop }: SelactedStackProps) => {
  return (
    <div className="p-6 border border-[#eee] rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] space-y-2">
      <h3 className="text-[16px] font-bold text-[#0F172A]">Your Stack</h3>
      <p className="text-[12px] font-medium text-[#94A3B8]">No technologies selected yet.</p>
      <p className="text-[12px] font-medium text-[#94A3B8] py-8 w-full text-center border border-[#eee] rounded-2xl
       ">Your stack is empty.</p>
    </div>
  );
};

export default SelactedStack;
