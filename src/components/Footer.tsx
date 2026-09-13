import FooterLogo from "../assets/logo-text.png";
export default function Footer() {
  return (
    <div className="border-t  border-[#eee] mt-24 pt-13">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 pb-18 border-b border-[#eee]">
          <div className="col-span-2  space-y-2.5">
            <img src={FooterLogo} alt="" />
            <p className="text-[#64748B] text-[12px] font-medium">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="">
              <ul className="text-[#475569] text-[12px] font-semibold flex justify-start gap-2.5">
                <li>
                  <a href="">GitHub</a>
                </li>
                <li>
                  <a href="">Twitter</a>
                </li>
                <li>
                  <a href="">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-[#0F172A] text-[12px] font-bold pb-3">
              PRODUCT
            </h2>
            <ul className="text-[#64748B] text-[12px] font-medium space-y-1.5">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-[#0F172A] text-[12px] font-bold pb-3">
              COMPANY
            </h2>
            <ul className="text-[#64748B] text-[12px] font-medium  space-y-1.5">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-[#0F172A] text-[12px] font-bold pb-3">
              LEGAL
            </h2>
            <ul className="text-[#64748B] text-[12px] font-medium space-y-1.5">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between pt-6 pb-8">
          <div className="text-[#94A3B8] text-[12px] font-medium">© 2026 Dev Stack. All rights reserved.</div>
          <div>
            <ul className="flex gap-2.5 text-[12px] font-medium text-[#94A3B8]">
              <li><a href="">Privacy</a></li>
              <li><a href="">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
