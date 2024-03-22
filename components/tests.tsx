import Image from 'next/image';
import { Container } from "./container";
import './test.css'

export const Tests = () => {
  return (
    <Container>
      <div className="pt-16 pb-16">
        <div className="text-center justify-center items-center md:text-center md:flex ">
          <h2 className="text-gradient mb-4 text-2xl font-semibold md:mb-7 md:text-4xl">
            Tests that makes your conversion rate
            <br />as happy as your customers
          </h2>
        </div>
        <div className=" md:h-auto md:overflow-auto">
          <div className="grid snap-x snap-mandatory overflow-x-auto px-1 lg:px-8 justify-center pb-12 md:flex-wrap md:overflow-hidden md:grid-cols-2">
            <div className="relative flex w-full shrink-0 snap-center flex-col justify-center lg:justify-start after:lg:block after:hidden  after:content-[''] after:absolute after:h-[14px] after:w-[1px] after:bg-white after:bottom-0 after:right-[-1px] after:z-[9999]  border-b-0 border border-transparent-white bg-background p-8 text-left md:p-9">
              <p className="mb-4 text-xl">Best practices, built in. <span className="text-grey">
                Static analysis that pushes your performance forward.
              </span></p>
              {/* <img src="/img/code.svg" alt="Window image" /> */}
              <Image
                src="/img/code.svg"
                width={462}
                height={332}
                alt="Window image"
                className='my-6'
              />

            </div>
            <div className="relative flex w-full shrink-0 snap-center flex-col justify-center lg:justify-start border-l lg:border-l-0 border-b-0  border border-transparent-white bg-background yellow p-8 text-left md:p-9 after:content-['']  after:z-[9999] after:absolute after:h-[1px] after:w-[14px] after:lg:block after:hidden after:bg-white after:bottom-[-1px] after:left-[-1px]">
              <p className="mb-4 text-xl">Personalize for your audience. <span className="text-grey">
                Pre-render versions of your site with Middleware.
              </span></p>
              <div className='my-6'>

                <svg aria-hidden="true" height="100%" viewBox="-1 -1 802 402" width="100%">
                  <g data-testid="globe-wireframe">
                    <circle cx="400" cy="400" fill="var(--ds-background-200)" r="400" />
                    <path d="M 400 800 A -400 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M 400 800 A -328.701 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M 400 800 A -235.355 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M 400 800 A -123.097 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M 400 800 A 0 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M 400 0 A 123.097 400 0 0 0 400 800" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M 400 0 A 235.355 400 0 0 0 400 800" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M 400 0 A 328.701 400 0 0 0 400 800" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M 400 0 A 400 400 0 0 0 400 800" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M160,80 h480" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M80,160 h640" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M33.394,240 h733.212" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M8.082,320 h783.837" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />
                    <path d="M0,400 h800" fill="none" stroke="url(#globe-gradient)" stroke-width="1" vector-effect="non-scaling-stroke" />

                  </g>
                  <g data-testid="globe-nodes">
                    <g data-testid="deploy-node-3-5-ddd">
                      <g opacity="1">
                        <g id="ddd35" opacity="1">
                          <path d="M 597.221 80 A 328.701 400 0 0 0 400 0M 662.961 160 A 328.701 400 0 0 0 597.221 80M 701.26 240 A 328.701 400 0 0 0 662.961 160" fill="none" stroke="url(#ddd35-gradient)" stroke-linecap="round" stroke-width="2" vector-effect="non-scaling-stroke">
                            <animate attributeName="opacity" dur="4.5s" id="opacity-ddd35" keyTimes="0;0.133;0.267;0.4;0.533;0.667;1" repeatCount="indefinite" values="0;1;1;1;1;0;0" />
                          </path>
                          <defs>
                            <radialGradient class="path_gradient__z0qlN" cx="100" cy="100" gradientUnits="userSpaceOnUse" id="ddd35-gradient" r="0" style={{ color: "#45DEC4" }}>
                              <stop offset="0" stop-color="#45DEC4" />
                              <stop offset="0.4" stop-color="#45DEC4" />
                              <stop offset="1" stop-color="#45DEC4" stop-opacity="0" />
                              <animate attributeName="cx" dur="4.5s" id="cx-ddd35" keyTimes="0;0.133;0.267;0.4;0.533;0.667;1" repeatCount="indefinite" values="400;400;597.221;662.961;701.26;701.26;0" />
                              <animate attributeName="cy" dur="4.5s" id="cy-ddd35" keyTimes="0;0.133;0.267;0.4;0.533;0.667;1" repeatCount="indefinite" values="0;0;80;160;240;240;0" />
                              <animate attributeName="r" dur="4.5s" id="r-ddd35" keyTimes="0;0.133;0.267;0.4;0.533;0.667;1" repeatCount="indefinite" values="0;120;120;120;120;0;0" />
                            </radialGradient>
                          </defs>
                        </g>
                      </g>
                      <g data-testid="node">
                        <g opacity="1">
                          <circle cx="701.2596786376284" cy="240" fill="none" r="0" stroke="#45DEC4" stroke-width="2">
                            <animate attributeName="r" dur="4.5s" id="r-:r7:-r-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0" />
                            <animate attributeName="opacity" dur="4.5s" id="opacity-:r7:-opacity-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0" />
                          </circle>
                        </g>
                        <circle class="node_node__OmZxm" cx="701.2596786376284" cy="240" fill="var(--ds-background-100)" r="16" stroke="url(#globe-gradient)" vector-effect="non-scaling-stroke" />
                        <path class="node_icon__JUJP9" clip-rule="evenodd" d="M8.5 0C8.5 0 4.58642 3.74805 3.94122 4.39717C3.86128 4.4776 3.84989 4.60224 3.91398 4.69539C3.97806 4.78854 4.09993 4.82451 4.20557 4.78145L7.90537 3.27345L11.7747 9.36041C11.8406 9.46403 11.9758 9.50133 12.0869 9.44651C12.1979 9.39169 12.2483 9.26276 12.2032 9.1489C11.7103 7.90508 8.5 0 8.5 0ZM6.29304 6.03867C6.35522 5.93334 6.32602 5.79881 6.22554 5.72763C6.12505 5.65645 5.98605 5.67185 5.90418 5.76322C5.12486 6.633 0 12.5 0 12.5C0 12.5 5.18613 13.803 6.03089 13.9939C6.14204 14.0191 6.25587 13.964 6.30355 13.8621C6.35122 13.7603 6.31967 13.6394 6.22796 13.5728L3.1616 11.3431L6.29304 6.03867ZM14.054 7.5893C14.016 7.47964 13.9029 7.4131 13.7867 7.43203C13.6705 7.45096 13.5853 7.5498 13.5853 7.66564V11.3824L6.45275 11.5197C6.32824 11.5221 6.22613 11.6175 6.2173 11.7396C6.20846 11.8618 6.2958 11.9704 6.41871 11.9901C7.68171 12.1927 16 13.5728 16 13.5728C16 13.5728 14.3311 8.38966 14.054 7.5893Z" fill="#a0a0a0b3" fill-rule="evenodd" transform="translate(250.78679656440357, 72) "></path>
                        <circle class="node_dot__GSOQ_" cx="701.2596786376284" cy="240" fill="var(--ds-gray-900)" r="8" />
                      </g>
                    </g>
                    <g data-testid="deploy-node--3-5-dddd">
                      <g opacity="1">
                        <g id="dddd-35" opacity="1">
                          <path d="M 400 0 A -328.701 400 0 0 0 202.779 80M 202.779 80 A -328.701 400 0 0 0 137.039 160M 137.039 160 A -328.701 400 0 0 0 98.74 240M 98.74 240 A -328.701 400 0 0 0 77.94 320" fill="none" stroke="url(#dddd-35-gradient)" stroke-linecap="round" stroke-width="2" vector-effect="non-scaling-stroke">
                            <animate attributeName="opacity" dur="4.5s" id="opacity-dddd-35" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;1;1;1;1;1;0;0" />
                          </path>
                          <defs>
                            <radialGradient class="path_gradient__z0qlN" cx="100" cy="100" gradientUnits="userSpaceOnUse" id="dddd-35-gradient" r="0" style={{ color: "#45DEC4" }}>
                              <stop offset="0" stop-color="#45DEC4" />
                              <stop offset="0.4" stop-color="#45DEC4" />
                              <stop offset="1" stop-color="#45DEC4" stop-opacity="0" />
                              <animate attributeName="cx" dur="4.5s" id="cx-dddd-35" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="400;400;202.779;137.039;98.74;77.94;77.94;0" />
                              <animate attributeName="cy" dur="4.5s" id="cy-dddd-35" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;0;80;160;240;320;320;0" />
                              <animate attributeName="r" dur="4.5s" id="r-dddd-35" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;120;120;120;120;120;0;0" />
                            </radialGradient>
                          </defs>
                        </g>
                      </g>
                      <g data-testid="node">
                        <g opacity="1">
                          <circle cx="77.93985659667823" cy="320" fill="none" r="0" stroke="#45DEC4" stroke-width="2">
                            <animate attributeName="r" dur="4.5s" id="r-:r8:-r-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0" />
                            <animate attributeName="opacity" dur="4.5s" id="opacity-:r8:-opacity-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0" />
                          </circle>
                        </g>
                        <circle class="node_node__OmZxm" cx="77.93985659667823" cy="320" fill="var(--ds-background-100)" r="16" stroke="url(#globe-gradient)" vector-effect="non-scaling-stroke" />
                        <path class="node_icon__JUJP9" clip-rule="evenodd" d="M8.5 0C8.5 0 4.58642 3.74805 3.94122 4.39717C3.86128 4.4776 3.84989 4.60224 3.91398 4.69539C3.97806 4.78854 4.09993 4.82451 4.20557 4.78145L7.90537 3.27345L11.7747 9.36041C11.8406 9.46403 11.9758 9.50133 12.0869 9.44651C12.1979 9.39169 12.2483 9.26276 12.2032 9.1489C11.7103 7.90508 8.5 0 8.5 0ZM6.29304 6.03867C6.35522 5.93334 6.32602 5.79881 6.22554 5.72763C6.12505 5.65645 5.98605 5.67185 5.90418 5.76322C5.12486 6.633 0 12.5 0 12.5C0 12.5 5.18613 13.803 6.03089 13.9939C6.14204 14.0191 6.25587 13.964 6.30355 13.8621C6.35122 13.7603 6.31967 13.6394 6.22796 13.5728L3.1616 11.3431L6.29304 6.03867ZM14.054 7.5893C14.016 7.47964 13.9029 7.4131 13.7867 7.43203C13.6705 7.45096 13.5853 7.5498 13.5853 7.66564V11.3824L6.45275 11.5197C6.32824 11.5221 6.22613 11.6175 6.2173 11.7396C6.20846 11.8618 6.2958 11.9704 6.41871 11.9901C7.68171 12.1927 16 13.5728 16 13.5728C16 13.5728 14.3311 8.38966 14.054 7.5893Z" fill="#a0a0a0b3" fill-rule="evenodd" transform="translate(250.78679656440357, 72) "></path>
                        <circle class="node_dot__GSOQ_" cx="77.93985659667823" cy="320" fill="var(--ds-gray-900)" r="8" />
                      </g>
                    </g>
                    <g data-testid="deploy-node-1-5-dd">
                      <g opacity="1">
                        <g id="dd15" opacity="1">
                          <path d="M 473.858 80 A 123.097 400 0 0 0 400 0M 498.478 160 A 123.097 400 0 0 0 473.858 80" fill="none" stroke="#45DEC4" stroke-linecap="round" stroke-width="2" vector-effect="non-scaling-stroke">
                            <animate attributeName="opacity" dur="4.5s" id="opacity-dd15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;1;1;0;0" />
                          </path>
                          <defs>
                            <radialGradient class="path_gradient__z0qlN" cx="100" cy="100" gradientUnits="userSpaceOnUse" id="#45DEC4" r="0" style={{ color: "#45DEC4" }}>
                              <stop offset="0" stop-color="#45DEC4" />
                              <stop offset="0.4" stop-color="#45DEC4" />
                              <stop offset="1" stop-color="#45DEC4" stop-opacity="0" />
                              <animate attributeName="cx" dur="4.5s" id="cx-dd15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="400;400;473.858;498.478;498.478;0" />
                              <animate attributeName="cy" dur="4.5s" id="cy-dd15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;0;80;160;160;0" />
                              <animate attributeName="r" dur="4.5s" id="r-dd15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;120;120;120;0;0" />
                            </radialGradient>
                          </defs>
                        </g>
                      </g>
                      <g data-testid="node">
                        <g opacity="1">
                          <circle cx="498.47759065022575" cy="160" fill="none" r="0" stroke="#45DEC4" stroke-width="2">
                            <animate attributeName="r" dur="4.5s" id="r-:r9:-r-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0" />
                            <animate attributeName="opacity" dur="4.5s" id="opacity-:r9:-opacity-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0" />
                          </circle>
                        </g>
                        <circle class="node_node__OmZxm" cx="498.47759065022575" cy="160" fill="var(--ds-background-100)" r="16" stroke="url(#globe-gradient)" vector-effect="non-scaling-stroke" />
                        <path class="node_icon__JUJP9" clip-rule="evenodd" d="M8.5 0C8.5 0 4.58642 3.74805 3.94122 4.39717C3.86128 4.4776 3.84989 4.60224 3.91398 4.69539C3.97806 4.78854 4.09993 4.82451 4.20557 4.78145L7.90537 3.27345L11.7747 9.36041C11.8406 9.46403 11.9758 9.50133 12.0869 9.44651C12.1979 9.39169 12.2483 9.26276 12.2032 9.1489C11.7103 7.90508 8.5 0 8.5 0ZM6.29304 6.03867C6.35522 5.93334 6.32602 5.79881 6.22554 5.72763C6.12505 5.65645 5.98605 5.67185 5.90418 5.76322C5.12486 6.633 0 12.5 0 12.5C0 12.5 5.18613 13.803 6.03089 13.9939C6.14204 14.0191 6.25587 13.964 6.30355 13.8621C6.35122 13.7603 6.31967 13.6394 6.22796 13.5728L3.1616 11.3431L6.29304 6.03867ZM14.054 7.5893C14.016 7.47964 13.9029 7.4131 13.7867 7.43203C13.6705 7.45096 13.5853 7.5498 13.5853 7.66564V11.3824L6.45275 11.5197C6.32824 11.5221 6.22613 11.6175 6.2173 11.7396C6.20846 11.8618 6.2958 11.9704 6.41871 11.9901C7.68171 12.1927 16 13.5728 16 13.5728C16 13.5728 14.3311 8.38966 14.054 7.5893Z" fill="#a0a0a0b3" fill-rule="evenodd" transform="translate(250.78679656440357, 72) "></path>
                        <circle class="node_dot__GSOQ_" cx="498.47759065022575" cy="160" fill="var(--ds-gray-900)" r="8" />
                      </g>
                    </g>
                    <g data-testid="deploy-node--1-5-dl">
                      <g opacity="1">
                        <g id="dl-15" opacity="1">
                          <path d="M 400 0 A -123.097 400 0 0 0 326.142 80M326.142,80 h-67.355" fill="none" stroke="url(#dl-15-gradient)" stroke-linecap="round" stroke-width="2" vector-effect="non-scaling-stroke">
                            <animate attributeName="opacity" dur="4.5s" id="opacity-dl-15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;1;1;0;0" />
                          </path>
                          <defs>
                            <radialGradient class="path_gradient__z0qlN" cx="100" cy="100" gradientUnits="userSpaceOnUse" id="dl-15-gradient" r="0" style={{ color: "#45DEC4" }}>
                              <stop offset="0" stop-color="#45DEC4" />
                              <stop offset="0.4" stop-color="#45DEC4" />
                              <stop offset="1" stop-color="#45DEC4" stop-opacity="0" />
                              <animate attributeName="cx" dur="4.5s" id="cx-dl-15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="400;400;326.142;258.787;258.787;0" />
                              <animate attributeName="cy" dur="4.5s" id="cy-dl-15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;0;80;80;80;0" />
                              <animate attributeName="r" dur="4.5s" id="r-dl-15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;120;120;120;0;0" />
                            </radialGradient>
                          </defs>
                        </g>
                      </g>
                      <g data-testid="node">
                        <g opacity="1">
                          <circle cx="258.7867965644036" cy="80" fill="none" r="0" stroke="#45DEC4" stroke-width="2">
                            <animate attributeName="r" dur="4.5s" id="r-:ra:-r-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0" />
                            <animate attributeName="opacity" dur="4.5s" id="opacity-:ra:-opacity-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0" />
                          </circle>
                        </g>
                        <circle class="node_node__OmZxm" cx="258.7867965644036" cy="80" fill="var(--ds-background-100)" r="16" stroke="url(#globe-gradient)" vector-effect="non-scaling-stroke" />
                        <path class="node_icon__JUJP9" clip-rule="evenodd" d="M8.5 0C8.5 0 4.58642 3.74805 3.94122 4.39717C3.86128 4.4776 3.84989 4.60224 3.91398 4.69539C3.97806 4.78854 4.09993 4.82451 4.20557 4.78145L7.90537 3.27345L11.7747 9.36041C11.8406 9.46403 11.9758 9.50133 12.0869 9.44651C12.1979 9.39169 12.2483 9.26276 12.2032 9.1489C11.7103 7.90508 8.5 0 8.5 0ZM6.29304 6.03867C6.35522 5.93334 6.32602 5.79881 6.22554 5.72763C6.12505 5.65645 5.98605 5.67185 5.90418 5.76322C5.12486 6.633 0 12.5 0 12.5C0 12.5 5.18613 13.803 6.03089 13.9939C6.14204 14.0191 6.25587 13.964 6.30355 13.8621C6.35122 13.7603 6.31967 13.6394 6.22796 13.5728L3.1616 11.3431L6.29304 6.03867ZM14.054 7.5893C14.016 7.47964 13.9029 7.4131 13.7867 7.43203C13.6705 7.45096 13.5853 7.5498 13.5853 7.66564V11.3824L6.45275 11.5197C6.32824 11.5221 6.22613 11.6175 6.2173 11.7396C6.20846 11.8618 6.2958 11.9704 6.41871 11.9901C7.68171 12.1927 16 13.5728 16 13.5728C16 13.5728 14.3311 8.38966 14.054 7.5893Z" fill="#a0a0a0b3" fill-rule="evenodd" transform="translate(250.78679656440357, 72) "></path>
                        <circle class="node_dot__GSOQ_" cx="287.17974664711625" cy="240" fill="var(--ds-gray-900)" r="8" />

                      </g>
                    </g>
                    <g data-testid="deploy-node-0-5-dddl">
                      <g opacity="1">
                        <g id="dddl05" opacity="1">
                          <path d="M 400 80 A 0 400 0 0 0 400 0M 400 160 A 0 400 0 0 0 400 80M 400 240 A 0 400 0 0 0 400 160M400,240 h-112.82" fill="none" stroke="url(#dddl05-gradient)" stroke-linecap="round" stroke-width="2" vector-effect="non-scaling-stroke">
                            <animate attributeName="opacity" dur="4.5s" id="opacity-dddl05" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;1;1;1;1;1;0;0" />
                          </path>
                          <defs>
                            <radialGradient class="path_gradient__z0qlN" cx="100" cy="100" gradientUnits="userSpaceOnUse" id="dddl05-gradient" r="0" style={{ color: "#45DEC4" }}>
                              <stop offset="0" stop-color="#45DEC4" />
                              <stop offset="0.4" stop-color="#45DEC4" />
                              <stop offset="1" stop-color="#45DEC4" stop-opacity="0" />
                              <animate attributeName="cx" dur="4.5s" id="cx-dddl05" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="400;400;400;400;400;287.18;287.18;0" />
                              <animate attributeName="cy" dur="4.5s" id="cy-dddl05" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;0;80;160;240;240;240;0" />
                              <animate attributeName="r" dur="4.5s" id="r-dddl05" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;120;120;120;120;120;0;0" />
                            </radialGradient>
                          </defs>
                        </g>
                      </g>
                      <g data-testid="node">
                        <g opacity="1">
                          <circle cx="287.17974664711625" cy="240" fill="none" r="0" stroke="#45DEC4" stroke-width="2">
                            <animate attributeName="r" dur="4.5s" id="r-:rb:-r-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0" />
                            <animate attributeName="opacity" dur="4.5s" id="opacity-:rb:-opacity-pulse" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0" />
                          </circle>
                        </g>
                        <circle class="node_node__OmZxm" cx="287.17974664711625" cy="240" fill="var(--ds-background-100)" r="16" stroke="url(#globe-gradient)" vector-effect="non-scaling-stroke" />
                        <path class="node_icon__JUJP9" clip-rule="evenodd" d="M8.5 0C8.5 0 4.58642 3.74805 3.94122 4.39717C3.86128 4.4776 3.84989 4.60224 3.91398 4.69539C3.97806 4.78854 4.09993 4.82451 4.20557 4.78145L7.90537 3.27345L11.7747 9.36041C11.8406 9.46403 11.9758 9.50133 12.0869 9.44651C12.1979 9.39169 12.2483 9.26276 12.2032 9.1489C11.7103 7.90508 8.5 0 8.5 0ZM6.29304 6.03867C6.35522 5.93334 6.32602 5.79881 6.22554 5.72763C6.12505 5.65645 5.98605 5.67185 5.90418 5.76322C5.12486 6.633 0 12.5 0 12.5C0 12.5 5.18613 13.803 6.03089 13.9939C6.14204 14.0191 6.25587 13.964 6.30355 13.8621C6.35122 13.7603 6.31967 13.6394 6.22796 13.5728L3.1616 11.3431L6.29304 6.03867ZM14.054 7.5893C14.016 7.47964 13.9029 7.4131 13.7867 7.43203C13.6705 7.45096 13.5853 7.5498 13.5853 7.66564V11.3824L6.45275 11.5197C6.32824 11.5221 6.22613 11.6175 6.2173 11.7396C6.20846 11.8618 6.2958 11.9704 6.41871 11.9901C7.68171 12.1927 16 13.5728 16 13.5728C16 13.5728 14.3311 8.38966 14.054 7.5893Z" fill="#a0a0a0b3" fill-rule="evenodd" transform="translate(250.78679656440357, 72) "></path>
                        <circle class="node_dot__GSOQ_" cx="287.17974664711625" cy="240" fill="var(--ds-gray-900)" r="8" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="globe-gradient" x1="0" x2="0" y1="0" y2="400">
                      <stop offset="0%" stop-color="#a0a0a042" />
                      <stop offset="100%" stop-color="#a0a0a042" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="relative flex w-full shrink-0 snap-center flex-col justify-center lg:justify-start   border border-transparent-white bg-background yellow py-10 lg:py-0 p-2 text-left md:p-9 after:content-[''] after:absolute after:w-[14px]  after:z-[9999] after:h-[1px] after:lg:block after:hidden after:bg-white after:top-[-1px] after:right-[-1px]">
              <p className="mb-4 text-lg lg:text-xl">Get experimental. <span className="text-grey">
                A/B test without degrading CLS, with Edge Config.
              </span></p>
              {/* <img src="/img/ab-testing.svg" alt="AB image" /> */}

              {/* <Image
                src="/img/ab-testing.svg"
                width={462}
                height={200}
                alt="AB image"
                className='my-6'
              /> */}

              <div className='max-w-[445px] w-full flex gap-[8px] mx-auto'>
                <div className='w-1/2 flex flex-col justify-between items-center my-2 lg:my-[16px]'>
                  <div className='w-full flex gap-2 lg:gap-[14px] items-center'>

                    <div className='max-w-[64px] w-full bg-white rounded-[8px] h-[36px]  text-black px-[8px] py-[12px] flex justify-center items-center text-sm lg:text-lg'>User 1</div>


                    <div className="max-w-[137px]   h-[2px] bg-[#e5484d] red-arrow w-full relative after:content-[''] after:absolute after:border-t-[5px] after:border-r-[10px] after:border-b-[5px] after:border-l-0 after:left-calc(4px* -1) after:top-[-4px] after:left-[-3px]
                  before:content-[''] before:absolute before:border-t-[5px] before:border-r-[0px] before:border-b-[5px] before:border-l-[10px] before:right-[-5px] before:bottom-[-3px]
                  ">

                    </div>
                  </div>
                  <div className='w-full flex gap-2 lg:gap-[14px] items-center'>

                    <div className='max-w-[64px] w-full bg-white rounded-[8px] h-[36px]  text-black px-[8px] py-[12px] flex justify-center items-center text-sm lg:text-lg'>User 2</div>


                    <div className="max-w-[137px]   h-[2px] bg-[#0c9784] green-arrow w-full relative after:content-[''] after:absolute after:border-t-[5px] after:border-r-[10px] after:border-b-[5px] after:border-l-0 after:left-calc(4px* -1) after:top-[-4px] after:left-[-3px]
                  before:content-[''] before:absolute before:border-t-[5px] before:border-r-[0px] before:border-b-[5px] before:border-l-[10px] before:right-[-5px] before:bottom-[-3px]
                  ">

                    </div>
                  </div>
                </div>
                <div className='w-1/2'>
                  <div className='max-w-[218px] h-[48px] lg:h-[64px] rounded-[12px] border border-transparent-white  flex justify-center items-center gap-[10px]'>
                    <div className='max-w-[16px] w-full h-[16px]'>
                      <svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16">
                        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                        <path d="M13 2v7h7" />
                      </svg>

                    </div>
                    <p>Page Cache</p>
                    <p className='p-[4px] bg-transparent-white max-w-[32px] w-full h-[20px] rounded-[14px] text-center'>
                      old
                    </p>
                  </div>

                  <div className='py-[36px] w-full flex flex-col gap-[20px] justify-center items-center relative'>
                    <span className='absolute h-[115px] w-[2px] bg-[#2e2e2e] z-[1] gray-arrow after:absolute after:content-[" "] after:bottom-[-4px] after:left-[-4px]'></span>
                    <div className='bg-[#2e2e2e] w-fit rounded-full px-[10px] h-[18px] lg:h-[24px] text-[8px] lg:text-[13px] flex justify-center items-center relative z-10'>
                      {/* <span className='absolute max-w-[8px] w-full'>
                        <svg  fill="none" height="30" viewBox="0 0 8 30" width="8" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3 0C3 1.65685 1.65685 3 0 3H3V0ZM3 30C3 28.3431 1.65685 27 0 27H3V30ZM8 3C6.34315 3 5 1.65685 5 0V3H8ZM5 30C5 28.3431 6.34315 27 8 27H5V30Z" fill="#2e2e2e" fill-rule="evenodd"></path></svg>
                      </span> */}
                      Trigger or Interval</div>
                    <div className='bg-[#2e2e2e] w-fit rounded-full px-[10px] h-[18px] lg:h-[24px] text-[8px] lg:text-[13px] relative z-10 flex justify-center items-center'>Regenerate page + update cache</div>

                  </div>

                  <div className='max-w-[218px] h-[48px] lg:h-[64px] rounded-[12px] border border-transparent-white  flex justify-center items-center gap-[10px]'>
                    <div className='max-w-[16px] w-full h-[16px]'>
                      <svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16">
                        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                        <path d="M13 2v7h7" />
                      </svg>

                    </div>
                    <p>Page Cache</p>
                    <p className='p-[4px] bg-transparent-white max-w-[32px] w-full h-[20px] rounded-[14px] text-center'>
                      old
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative flex w-full shrink-0 snap-center flex-col justify-center lg:justify-start border-l lg:border-l-0  border border-transparent-white bg-background py-10 lg:py-0  p-2 text-left md:p-9 after:content-[''] after:absolute after:h-[14px] after:lg:block after:hidden after:z-[9999]  after:w-[1px] after:bg-white after:top-[-1px] after:left-[-1px]">
              <p className="mb-4 text-lg lg:text-xl">Oberserve. <span className="text-grey">
                Tools to measure real user experience on the devices they're using.
              </span></p>

              <div className='max-w-[438px] mx-auto w-full bg-[#0a0a0a] rounded-[12px] border border-transparent-white p-[16px] flex flex-col gap-[20px]'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-[10px] w-full'>
                    <p className='text-[10px] lg:text-[18px] font-semibold'>Real Experience Score</p>
                    <p className='max-w-[40px] lg:max-w-[51px] w-full h-[20px] lg:h-[24px] bg-[#0f2e18] text-[#62c073] rounded-full text-center flex justify-center items-center text-[8px] lg:text-[12px] font-bold'>+25%</p>
                  </div>
                  <div className='max-w-[32px] w-full h-[32px] relative'>
                    <p className='text-[16px] font-medium absolute top-[3px] left-[7px] right-0 bottom-0'>99</p>
                    <svg fill="none" stroke-width="2" viewBox="0 0 100 100" >
                      <circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="gauge_arc__UGu7u" data-geist-progress-circle-fg="" stroke="#62c073" />
                    </svg>

                  </div>
                </div>
                <div className='flex gap-[20px]'>
                  <div className='p-[10px] lg:p-[16px] max-w-[183px] w-full bg-black rounded-[6px] flex flex-col gap-[6px]'>
                    <p className='text-[8px] lg:text-[14px]'>Largest Contentful Paint</p>
                    <div className='flex gap-[4px] items-end leading-[24px]'>
                      <p className='block text-[#45a557] text-[16px] font-medium'>1.01</p>
                      <p className='block text-[14px] text-grey'>s</p>
                    </div>
                    <div className='w-full flex gap-[2px]'>
                      <div className='max-w-[103px] bg-[#45a557] h-[2px] rounded-[3px] w-full'></div>
                      <div className='h-[2px] max-w-[28px] bg-[#454545] rounded-[3px] w-full relative after:absolute after:h-[6px] after:w-[2px] after:bg-white after:top-[-2px] after:right-[50%]'></div>
                      <div className='h-[2px] max-w-[15px] bg-[#8f8f8f] rounded-[3px] w-full'></div>
                    </div>
                  </div>
                  <div className='p-[10px] lg:p-[16px] max-w-[183px] w-full bg-black rounded-[6px] flex flex-col gap-[6px]'>
                    <p className='text-[8px] lg:text-[14px] font-light'>First Contentful Paint</p>
                    <div className='flex gap-[4px] items-end leading-[24px]'>
                      <p className='block text-[#ff990a] text-[16px] font-medium'>1.01</p>
                      <p className='block text-[14px] text-grey'>s</p>
                    </div>
                    <div className='w-full flex gap-[2px]'>
                      <div className='max-w-[87px] bg-[#454545] h-[2px] rounded-[3px] w-full'></div>
                      <div className='h-[2px] max-w-[55px] bg-[#ff990a] rounded-[3px] w-full relative after:absolute after:h-[6px] after:w-[2px] after:bg-white after:top-[-2px] after:right-[50%]'></div>
                      <div className='h-[2px] max-w-[15px] bg-[#8f8f8f] rounded-[3px] w-full'></div>
                    </div>
                  </div>

                </div>
                <div className='flex  gap-[20px]'>
                  <div className='p-[10px] lg:p-[16px] max-w-[183px] w-full bg-black rounded-[6px] flex flex-col gap-[6px]'>
                    <p className='text-[8px] lg:text-[14px]'>Cumulative Layout Shift</p>
                    <div className='flex gap-[4px] items-end leading-[24px]'>
                      <p className='block text-[#45a557] text-[16px] font-medium'>0.002</p>
                      {/* <p className='block text-[14px] text-grey'>s</p> */}
                    </div>
                    <div className='w-full flex gap-[2px]'>
                      <div className='max-w-[103px] bg-[#45a557] h-[2px] rounded-[3px] w-full'></div>
                      <div className='h-[2px] max-w-[28px] bg-[#454545] rounded-[3px] w-full relative after:absolute after:h-[6px] after:w-[2px] after:bg-white after:top-[-2px] after:right-[50%]'></div>
                      <div className='h-[2px] max-w-[15px] bg-[#8f8f8f] rounded-[3px] w-full'></div>
                    </div>
                  </div>
                  <div className='p-[10px] lg:p-[16px] max-w-[183px] w-full bg-black rounded-[6px] flex flex-col gap-[6px]'>
                    <p className='text-[8px] lg:text-[14px]'>Interaction to Next Paint</p>
                    <div className='flex gap-[4px] items-end leading-[24px]'>
                      <p className='block text-[#45a557] text-[16px] font-medium'>1.01</p>
                      <p className='block text-[14px] text-grey'>s</p>
                    </div>
                    <div className='w-full flex gap-[2px]'>
                      <div className='max-w-[103px] bg-[#45a557] h-[2px] rounded-[3px] w-full'></div>
                      <div className='h-[2px] max-w-[28px] bg-[#454545] rounded-[3px] w-full relative after:absolute after:h-[6px] after:w-[2px] after:bg-white after:top-[-2px] after:right-[50%]'></div>
                      <div className='h-[2px] max-w-[15px] bg-[#8f8f8f] rounded-[3px] w-full'></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
