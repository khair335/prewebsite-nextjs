import { Container } from "./container"

export const Infosection = () => {
  return (
  <div className="pt-16 pb-16">
    <Container>
    <div className="bg-grey-dark text-white">
        <div className="grid grid-cols-3 gap-4 mb-3">
             <div className="col-span-2 text-2xl p-4">
                 <p>You can turn off your pager. Mitigating thousands of DDoS attacks every week, without customers even noticing.</p>
                 </div>
                  <div className="p-4">
                     <p>The Vercel Firewall →</p>
                      </div>
                </div>

     <div className="grid grid-cols-3 gap-4">
         <div className="text-2xl p-4">
          <h3>DDoS Mitigation</h3>
         <p>Continuously analyzes incoming traffic to detect signs of DDoS attacks, Helping identify and mitigate threats in real-time.</p>
         </div>
     <div className="text-2xl p-4">
       <h3>Dynamic Scaling</h3>
      <p>Proactive resources that absorb the increased traffic, preventing your applications or websites from being overwhelmed.</p>
    </div>
     <div className="text-2xl p-4">
      <h3>Enterprise Level</h3>
      <p>Dedicated DDoS support for Enterprise teams, with IP Blocking abilities to strengthen your security posture.</p>
    </div>
    </div>
    </div>

    </Container>
  </div>
  );
};