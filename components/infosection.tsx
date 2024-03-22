import { Container } from "./container"
import './infoSection.css'
export const Infosection = () => {
  return (
    <div className="pt-16 pb-16">
      <Container>
        <div className="bg-[#1a1a1a] text-white infoSection">
          <div className="grid grid-cols-1 lg:grid-cols-3  ">
            <div className="col-span-1 lg:col-span-2 text-2xl p-[16px] lg:p-[48px] border border-transparent-white border-b-0 relative">
              <span className='w-[1px] bg-[#272727] h-[193px] top-0 absolute hidden lg:block left-[50%]'></span>
              <p className='text-[16px] lg:text-[26px] text-grey leading-[32px] '><span className='text-white font-semibold '>You can turn off your pager.</span> Mitigating thousands of DDoS attacks every week, without customers even noticing.</p>
            </div>
            <div className="p-[48px] border border-transparent-white border-b-0 border-l lg:border-l-0">
              <div className='max-w-[228px] w-full rounded-full border border-[#ffffff14] bg-[#0a0a0a] hover:bg-[#ffffff17] cursor-pointer transition-all flex justify-center gap-2 items-center h-[48px] mx-auto'>
                <span>
                  <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                    <path d="M11.25 4.25V3.5C9.35033 2.86678 6 2.58921 6 0C6 2.58921 2.64967 2.86678 0.75 3.5V9.52717C0.75 11.2011 1.67915 12.7367 3.16197 13.5134L4.5 14.2143" stroke="#ffff" stroke-width="1.5" stroke-linecap="square" fill="transparent" />
                    <circle cx="11.5" cy="11.5" r="3.875" stroke="#ffff" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" fill="transparent" />
                    <path d="M8 11.5H15.25" stroke="#ffff" stroke-linejoin="bevel" />
                    <path d="M10.75 15V15C10.0964 12.7124 10.0964 10.2876 10.75 8V8" stroke="#ffff" stroke-linejoin="bevel" />
                    <path d="M12.25 15V15C12.9036 12.7124 12.9036 10.2876 12.25 8V8" stroke="#ffff" stroke-linejoin="bevel" />
                  </svg>

                </span>
                <p className='text-[16px] font-medium'>The Vercel Firewall</p>
                <span>
                  <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z" fill="#fff" />
                  </svg>

                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="text-lg lg:text-2xl p-[16px] lg:p-[48px] text-center border border-transparent-white">
              <h3>DDoS Mitigation</h3>
              <p>Continuously analyzes incoming traffic to detect signs of DDoS attacks, Helping identify and mitigate threats in real-time.</p>
            </div>
            <div className="text-lg lg:text-2xl p-[16px] lg:p-[48px] text-center border border-l-0 border-transparent-white">
              <h3>Dynamic Scaling</h3>
              <p>Proactive resources that absorb the increased traffic, preventing your applications or websites from being overwhelmed.</p>
            </div>
            <div className="text-lg lg:text-2xl p-[16px] lg:p-[48px] text-center border border-l-0 border-transparent-white">
              <h3>Enterprise Level</h3>
              <p>Dedicated DDoS support for Enterprise teams, with IP Blocking abilities to strengthen your security posture.</p>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};